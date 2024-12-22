import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import { getMenuItem } from "@/app/api/menu";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function SandwichPage(props: PageProps) {
  const { id } = await props.params;
  const sandwich = await getMenuItem(id);

  if (!sandwich) {
    notFound();
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-6xl mx-auto">
      <div className="md:w-1/2 relative aspect-square">
        <Image
          src={sandwich.image}
          alt={sandwich.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg shadow-md"
          priority
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
