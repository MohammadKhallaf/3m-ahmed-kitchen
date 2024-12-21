"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/components/CartContext";
import Header from "@/components/Header";

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log("Order placed:", {
      customerName: e.currentTarget.name,
      address: e.currentTarget.address.value,
      phone: e.currentTarget.phone.value,
      items: cart,
      total: getCartTotal(),
    });
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">شكراً لطلبك!</h1>
          <p className="text-center text-xl">
            تم استلام طلبك وسيتم التواصل معك قريباً.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">اتمام الشراء</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              الاسم
            </label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              العنوان
            </label>
            <Input type="text" id="address" name="address" required />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              رقم الهاتف
            </label>
            <Input type="tel" id="phone" name="phone" required />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">ملخص الطلب</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>{item.price * item.quantity} جنيه</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>الإجمالي:</span>
                <span>{getCartTotal()} جنيه</span>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            تأكيد الطلب
          </Button>
        </form>
      </main>
    </div>
  );
}
