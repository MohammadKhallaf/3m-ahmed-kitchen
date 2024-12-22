import { CartProvider } from "@/components/CartContext";
import { Cairo } from "next/font/google";
import Header from "@/components/Header";
import AnimatedPage from "@/components/AnimatedPage";

import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "ساندوتشات مصرية لذيذة",
  description: "أشهى الساندوتشات المصرية المحلية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-sage-50 text-sage-900`}>
        <CartProvider>
          <div className="min-h-screen bg-sage-50">
            <Header />
            <AnimatedPage>
              <main className="container mx-auto py-8 px-4">{children}</main>
            </AnimatedPage>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
