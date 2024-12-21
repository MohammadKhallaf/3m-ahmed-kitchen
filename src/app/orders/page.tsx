"use client";

import AnimatedPage from "@/components/AnimatedPage";
import Header from "@/components/Header";
import { motion } from "motion/react";
import { useState } from "react";

interface Order {
  id: number;
  items: string[];
  status: "pending" | "in-progress" | "completed";
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, items: ["طعمية (2x)", "شاي مصري (1x)"], status: "pending" },
    { id: 2, items: ["شاورما (1x)", "قهوة تركي (2x)"], status: "in-progress" },
    { id: 3, items: ["كشري (3x)"], status: "completed" },
  ]);

  const updateOrderStatus = (
    id: number,
    newStatus: "pending" | "in-progress" | "completed"
  ) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <Header />
      <AnimatedPage>
        <main className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-sage-800">
            إدارة الطلبات
          </h1>
          <div className="space-y-4">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold mb-2 text-sage-700">
                  طلب رقم {order.id}
                </h2>
                <ul className="list-disc list-inside mb-4 text-sage-600">
                  {order.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex space-x-2 space-x-reverse">
                  <button
                    onClick={() => updateOrderStatus(order.id, "pending")}
                    className={`btn ${
                      order.status === "pending"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    قيد الانتظار
                  </button>
                  <button
                    onClick={() => updateOrderStatus(order.id, "in-progress")}
                    className={`btn ${
                      order.status === "in-progress"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    جاري التحضير
                  </button>
                  <button
                    onClick={() => updateOrderStatus(order.id, "completed")}
                    className={`btn ${
                      order.status === "completed"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    تم التسليم
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </AnimatedPage>
    </div>
  );
}
