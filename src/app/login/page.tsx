"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { motion } from "motion/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"employee" | "officeboy">(
    "employee"
  );
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate the credentials against a backend
    // For this example, we'll use some dummy logic
    if (username && password) {
      if (userType === "employee") {
        router.push("/dashboard");
      } else {
        router.push("/orders");
      }
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">تسجيل الدخول</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="userType" className="block text-sage-700 mb-2">
            نوع المستخدم
          </label>
          <select
            id="userType"
            value={userType}
            onChange={(e) =>
              setUserType(e.target.value as "employee" | "officeboy")
            }
            className="input w-full"
          >
            <option value="employee">موظف</option>
            <option value="officeboy">عامل المكتب</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sage-700 mb-2">
            اسم المستخدم
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input w-full"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sage-700 mb-2">
            كلمة المرور
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input w-full"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="btn btn-primary w-full"
        >
          تسجيل الدخول
        </motion.button>
      </form>
    </>
  );
}
