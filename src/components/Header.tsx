"use client";

import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "./CartContext";
import { useState } from "react";

export default function Header() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4">
      {" "}
      {/* Updated header className */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          مطبخ عم أحمد{" "}
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="القائمة"
          >
            <Menu />
          </button>
        </div>
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:space-x-reverse">
            <li>
              <Link href="/" className="hover:text-gray-200">
                {" "}
                {/* Updated hover class */}الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-gray-200">
                {" "}
                {/* Updated hover class */}تسجيل الدخول
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="flex items-center hover:text-gray-200"
              >
                <ShoppingCart className="ml-2" />
                <span>العربة ({cartItemsCount})</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
