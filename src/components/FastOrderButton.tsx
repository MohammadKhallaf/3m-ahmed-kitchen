"use client";

import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { MenuItem } from "../app/api/menu";

export default function FastOrderButton({ item }: { item: MenuItem }) {
  const [isOrdering, setIsOrdering] = useState(false);

  const handleFastOrder = async () => {
    setIsOrdering(true);
    // Simulate API call for placing a fast order
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(`تم تقديم طلب سريع لـ ${item.name}`);
    setIsOrdering(false);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleFastOrder}
      disabled={isOrdering}
      className="btn btn-secondary"
    >
      {isOrdering ? (
        <>
          <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          جاري الطلب...
        </>
      ) : (
        "طلب سريع"
      )}
    </motion.button>
  );
}
