import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/views/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex h-screen items-center justify-center p-6  ${inter.className}`}
    >
      <div className={`flex items-center h-[80vh] justify-center p-6 rounded-2xl bg-gradient-background shadow-backgroundshadow ${inter.className}`}>
      <Hero />
      </div>

    
    </main>
  );
}
