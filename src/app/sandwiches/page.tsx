import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMenuItems } from "../api/menu";

export default async function SandwichesPage() {
  const sandwiches = await getMenuItems();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Sandwiches</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sandwiches.map((sandwich) => (
          <div key={sandwich.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={sandwich.image}
              alt={sandwich.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{sandwich.name}</h2>
            <p className="text-gray-600 mb-4">{sandwich.description}</p>
            <p className="text-lg font-bold mb-4">
              ${sandwich.price.toFixed(2)}
            </p>
            <Link href={`/sandwiches/${sandwich.id}`}>
              <Button className="w-full">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
