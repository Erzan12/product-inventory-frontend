import { Product } from "@/types";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    return  (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="mt-2 font-bold text-blue-600">
        ₱{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </p>
      <p className="text-sm text-gray-500">Stock: {product.quantity}</p>
    </div>
  );
}