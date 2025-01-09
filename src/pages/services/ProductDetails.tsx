import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", productId)
          .single();

        if (error) {
          toast.error("Error fetching product details");
          console.error("Error fetching product details:", error);
          throw error;
        }

        setProduct(data);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">
        {product.name}
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-medium text-primary mb-2">
          মূল্য: ৳{product.price}/কেজি
        </p>
        <p className="text-gray-600 mb-4">পরিমাণ: {product.quantity} কেজি</p>
        <Button>কিনুন</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
