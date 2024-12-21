import AddToCartButton from "@/components/AddToCartButton";
import { getMenuItem } from "@/app/api/menu";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function SandwichPage({ params }: PageProps) {
  const sandwich = await getMenuItem(params.id);

  if (!sandwich) {
    notFound();
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img
          src={sandwich.image}
          alt={sandwich.name}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{sandwich.name}</h1>
        <p className="text-gray-600">{sandwich.description}</p>
        <p className="text-2xl font-bold">${sandwich.price.toFixed(2)}</p>
        <AddToCartButton item={sandwich} />
      </div>
    </div>
  );
}
