// src/app/layout.tsx
import './globals.css';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {/* Navbar */}
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <Link href="/" className="text-lg font-bold">Inventory</Link>
            <Link href="/cart" className="relative hover:text-blue-600 transition">
              <ShoppingCart size={24} />
              {/* Optional: Add badge for cart item count */}
            </Link>
          </header>

          {/* Main Content */}
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

