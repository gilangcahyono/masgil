import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Script from "next/script";

export const metadata = {
  title: "Gilang Cahyono",
  description: "My Personal Website",
};

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className + " text-gray-100"}>
      <body className="antialiased bg-cyan-500">
        <div className="bg-zinc-700 m-20 rounded-3xl overflow-hidden flex absolute inset-0 justify-between">
          <Hero />
          <div className="rounded-tl-3xl rounded-bl-3xl bg-zinc-900 py-10 w-4/5 grid items-center pr-7">
            {children}
          </div>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
