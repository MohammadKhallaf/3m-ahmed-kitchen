export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "sandwich" | "drink";
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "طعمية",
    price: 5,
    description: "ساندوتش طعمية مصرية تقليدية مع خضروات طازجة",
    image: "/placeholder.svg?height=200&width=200&text=طعمية",
    category: "sandwich",
  },
  {
    id: 2,
    name: "شاورما",
    price: 15,
    description: "شاورما دجاج مشوية مع صوص ثوم وبطاطس مقلية",
    image: "/placeholder.svg?height=200&width=200&text=شاورما",
    category: "sandwich",
  },
  {
    id: 3,
    name: "كشري",
    price: 10,
    description: "كشري مصري تقليدي في خبز بلدي مع صلصة حارة",
    image: "/placeholder.svg?height=200&width=200&text=كشري",
    category: "sandwich",
  },
  {
    id: 4,
    name: "حواوشي",
    price: 20,
    description: "لحم مفروم متبل في خبز بلدي محمص مع بهارات شرقية",
    image: "/placeholder.svg?height=200&width=200&text=حواوشي",
    category: "sandwich",
  },
  {
    id: 5,
    name: "شاي مصري",
    price: 3,
    description: "شاي أسود مصري تقليدي",
    image: "/placeholder.svg?height=200&width=200&text=شاي+مصري",
    category: "drink",
  },
  {
    id: 6,
    name: "قهوة تركي",
    price: 5,
    description: "قهوة تركية غنية ومركزة",
    image: "/placeholder.svg?height=200&width=200&text=قهوة+تركي",
    category: "drink",
  },
  {
    id: 7,
    name: "ينسون",
    price: 3,
    description: "مشروب الينسون الساخن والمنعش",
    image: "/placeholder.svg?height=200&width=200&text=ينسون",
    category: "drink",
  },
];

export async function getMenuItems(): Promise<MenuItem[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return menuItems;
}

export async function getMenuItem(
  id: number | string
): Promise<MenuItem | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return menuItems.find((item) => item.id === id);
}
