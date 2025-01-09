import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Slide1 from "/slide1.jpg";
import slide2 from "/slide3.jpg";
import slide3 from "/slide5.jpg";
import slide4 from "/slide4.jpg";
import slide5 from "/slide2.jpg";

const CarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 10 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const slides = [
    {
      image: Slide1,
      text: "আধুনিক কৃষি প্রযুক্তির সাথে আপনার ফসলের যত্ন নিন।",
    },
    {
      image: slide2,
      text: "আমাদের প্ল্যাটফর্ম ব্যবহার করে আপনার ফসলের রোগ নির্ণয় করুন।",
    },
    {
      image: slide3,
      text: "বিশেষজ্ঞদের পরামর্শ নিন এবং আপনার ফসলের ফলন বাড়ান।",
    },
    {
      image: slide4,
      text: "সরাসরি কৃষকদের কাছ থেকে ফসল কিনুন এবং ন্যায্য মূল্য নিশ্চিত করুন।",
    },
    {
      image: slide5,
      text: "আমাদের সাথে যোগ দিন এবং কৃষি খাতে আপনার কর্মজীবন শুরু করুন।",
    },
  ];

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, setScrollSnaps, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    let intervalId: any;

    const startAutoSlide = () => {
      intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 10000);
    };

    startAutoSlide();

    return () => {
      clearInterval(intervalId);
    };
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide relative min-w-0 flex-[0_0_100%] flex items-center justify-center"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-[800px]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-white text-2xl font-bold text-center px-8">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full"
        >
          <ArrowLeft className="h-5 w-5 bg-orange-500" />
        </Button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          className="rounded-full"
        >
          <ArrowRight className="h-5 w-5 bg-orange-500" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              selectedIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;
