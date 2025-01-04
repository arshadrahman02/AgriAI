import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isAnalyzing: boolean;
}

export const ImageUpload = ({ onImageSelect, isAnalyzing }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (file.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(file));
        onImageSelect(file);
      } else {
        toast.error("Please upload an image file");
      }
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    multiple: false,
    disabled: isAnalyzing,
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"}
          ${isAnalyzing ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Preview"
              className="max-h-64 mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500">
              Click or drag to upload a different image
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="w-12 h-12 mx-auto text-gray-400" />
            <div className="space-y-2">
              <p className="text-xl font-medium text-gray-700">
                Upload Crop Image
              </p>
              <p className="text-sm text-gray-500">
                Drag and drop or click to select
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
