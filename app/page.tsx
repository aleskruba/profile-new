import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-white to-gray-100 text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600 max-w-md mb-6 text-justify">
  Welcome! My name is <span className="font-bold text-blue-500">Aleš</span>, and this is my personal portfolio website. Here, you can explore my technical expertise, discover the projects I've built, and learn more about my journey in the tech world. 
</p>
<Button className="px-6 py-3 text-lg font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600">
<Link href="/dashboard">View Portfolio</Link>  
</Button>
    </div>
  );
}
