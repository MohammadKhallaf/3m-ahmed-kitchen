"use client";

import { motion } from "motion/react";
import { useCart } from "./CartContext";
import type { MenuItem } from "@/app/api/menu";

export default function AddToCartButton({ item }: { item: MenuItem }) {
  const { addToCart } = useCart();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => addToCart(item)}
      className="btn btn-primary"
    >
      أضف إلى العربة
    </motion.button>
  );
}
