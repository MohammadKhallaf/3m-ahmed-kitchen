import { CartProvider } from "@/components/CartContext";
import { Cairo } from "next/font/google";

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
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
