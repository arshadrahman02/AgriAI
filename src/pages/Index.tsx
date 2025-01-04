import { useState } from "react";
import { ImageUpload } from "@/components/ImageUpload";
import { AnalysisResults } from "@/components/AnalysisResults";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import { supabase } from "@/integrations/supabase/client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useLocation } from "react-router-dom";
import CarouselSection from "@/components/landing/CarouselSection";

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const location = useLocation();

  const handleImageSelect = async (file: File) => {
    try {
      setIsAnalyzing(true);
      const analysisResults = await analyzeImage(file);
      setResults(analysisResults);
      toast.success("বিশ্লেষণ সম্পন্ন হয়েছে!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(
          "ছবি বিশ্লেষণ করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
        );
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  const isAnalyzeRoute = location.pathname === "/analyze";

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-foreground">
      {!isAnalyzeRoute ? (
        <>
          <CarouselSection />
          <HeroSection />
          <FeaturesSection />
          <BenefitsSection />
          <StatsSection />
          <TestimonialsSection />
        </>
      ) : (
        <div className="container py-8 px-4 mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">
              ফসলের ক্ষতি বিশ্লেষণ
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              আপনার ক্ষতিগ্রস্ত ফসলের ছবি আপলোড করুন এবং AI-এর মাধ্যমে তাৎক্ষণিক
              বিশ্লেষণ এবং চিকিৎসার পরামর্শ পান।
            </p>
          </div>

          <ImageUpload
            onImageSelect={handleImageSelect}
            isAnalyzing={isAnalyzing}
          />

          {isAnalyzing && (
            <div className="flex items-center justify-center py-8 animate-fadeIn">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="ml-3 text-lg text-gray-700">
                ছবি বিশ্লেষণ করা হচ্ছে...
              </span>
            </div>
          )}

          {results && !isAnalyzing && <AnalysisResults results={results} />}
        </div>
      )}
    </div>
  );
};

const analyzeImage = async (file: File) => {
  // Fetch the API key from Supabase
  const { data, error: secretError } = await supabase.functions.invoke(
    "get-secret",
    {
      body: { key: "VITE_GEMINI_API_KEY" },
    }
  );

  if (secretError || !data?.value) {
    console.error("Error fetching API key:", secretError);
    throw new Error(
      "Gemini API key not found. Please check your configuration."
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(data.value);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 0.4,
        topP: 1,
        topK: 32,
        maxOutputTokens: 4096,
      },
    });

    // Convert File to base64
    const base64Image = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

    // Remove data URL prefix
    const imageData = base64Image.split(",")[1];

    const prompt = `
      You are an agricultural expert. Analyze this crop image and provide:
      1. A detailed description of any damage or disease (in Bengali)
      2. A list of 3-4 practical solutions (in Bengali)
      3. A list of 3-4 recommended pesticides with proper dosage (in Bengali)
      
      Format the response in JSON with these exact keys:
      {
        "damage": "damage description in Bengali",
        "solutions": ["solution1", "solution2", "solution3"],
        "pesticides": ["pesticide1", "pesticide2", "pesticide3"]
      }
    `;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageData,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();

    // Remove any markdown formatting that might be present
    const cleanedText = text.replace(/```json\n|\n```/g, "");

    try {
      // Parse the JSON response
      const analysisResult = JSON.parse(cleanedText);
      return {
        damage: analysisResult.damage,
        solutions: analysisResult.solutions,
        pesticides: analysisResult.pesticides,
      };
    } catch (parseError) {
      console.error("Error parsing JSON response:", parseError);
      throw new Error(
        "বিশ্লেষণের ফলাফল পার্স করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
      );
    }
  } catch (error) {
    console.error("Error analyzing image:", error);
    if (error instanceof Error && error.message.includes("API key not valid")) {
      throw new Error(
        "অবৈধ API কী। অনুগ্রহ করে আপনার Gemini API কী যাচাই করুন।"
      );
    }
    throw new Error(
      "ছবি বিশ্লেষণ করতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
    );
  }
};

export default Index;
