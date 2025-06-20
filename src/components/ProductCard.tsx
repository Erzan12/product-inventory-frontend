// components/ProductCard.tsx
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/api';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { mutate: addToCart, isPending } = useMutation({
    mutationFn: async () => {
      await api.post('/api/orders/cart', {
        productId: product.id,
        quantity: 1,
      });
    },
    onSuccess: () => {
      alert('✅ Added to cart!');
    },
    onError: () => {
      alert('❌ Failed to add to cart.');
    },
  });

  return (
    <div className="border rounded-xl shadow-sm p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500 mb-2">{product.description}</p>
        <p className="text-primary font-bold mb-4">₱{product.price}</p>
        <p className="text-sm text-gray-500">Stock: {product.quantity}</p>
      </div>
      <Button onClick={() => addToCart()} disabled={isPending}>
        {isPending ? 'Adding...' : 'Add to Cart'}
      </Button>
    </div>
  );
}
