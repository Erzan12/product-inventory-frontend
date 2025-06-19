// pages/index.tsx
'use client';

import Head from 'next/head';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const { data: products, isLoading, isError } = useProducts();

  return (
    <>
      <Head>
        <title>Product Inventory</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Product Inventory</h1>

        {isLoading && <p>Loading products...</p>}
        {isError && <p className="text-red-500">Failed to load products.</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
