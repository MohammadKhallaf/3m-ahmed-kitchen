"use client";

import AnimatedPage from "@/components/AnimatedPage";
import Header from "@/components/Header";
import { motion } from "motion/react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-sage-50">
      <Header />
      <AnimatedPage>
        <main className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-sage-800">
            لوحة التحكم للموظفين
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4 text-sage-700">
                إحصائيات المبيعات
              </h2>
              <p className="text-sage-600">
                عرض إحصائيات المبيعات اليومية والأسبوعية والشهرية
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4 text-sage-700">
                إدارة المخزون
              </h2>
              <p className="text-sage-600">
                تحديث وتتبع مخزون المكونات والمنتجات
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold mb-4 text-sage-700">
                تقارير الموظفين
              </h2>
              <p className="text-sage-600">عرض وإدارة تقارير أداء الموظفين</p>
            </motion.div>
          </div>
        </main>
      </AnimatedPage>
    </div>
  );
}
