import AddToCartButton from "@/components/AddToCartButton";
import FastOrderButton from "@/components/FastOrderButton";
import Image from "next/image";
import { getMenuItems } from "./api/menu";

export default async function Home() {
  const menuItems = await getMenuItems();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        أشهى الساندوتشات والمشروبات المصرية
      </h1>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">الساندوتشات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {menuItems
          .filter((item) => item.category === "sandwich")
          .map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-700">
                  {item.price} جنيه
                </span>
                <div className="space-x-2 space-x-reverse">
                  <AddToCartButton item={item} />
                  <FastOrderButton item={item} />
                </div>
              </div>
            </div>
          ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        المشروبات الساخنة
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems
          .filter((item) => item.category === "drink")
          .map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-700">
                  {item.price} جنيه
                </span>
                <div className="space-x-2 space-x-reverse">
                  <AddToCartButton item={item} />
                  <FastOrderButton item={item} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
