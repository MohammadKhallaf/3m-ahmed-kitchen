"use client";

import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart, getCartTotal } = useCart();

  const sendToWhatsApp = () => {
    const message = cart
      .map(
        (item) =>
          `${item.name} (${item.quantity}عدد) - ${
            item.price * item.quantity
          } جنيه`
      )
      .join("\n");

    const total = getCartTotal();
    const fullMessage = `عايز:\n${message}\n\nالإجمالي: ${total} جنيه`;

    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center">عربة التسوق</h1>
      {cart.length === 0 ? (
        <p className="text-center text-xl">عربة التسوق فارغة</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 pb-4 border-b"
            >
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">الكمية: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-bold ml-4">
                  {item.price * item.quantity} جنيه
                </span>
                <Button
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  حذف
                </Button>
              </div>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">الإجمالي:</span>
              <span className="text-2xl font-bold">{getCartTotal()} جنيه</span>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <Button onClick={sendToWhatsApp}>إرسال الطلب عبر واتساب</Button>
            <Link href="/checkout">
              <Button>اتمام الشراء</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
