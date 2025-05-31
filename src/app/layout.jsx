import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Gilang Cahyono",
  description: "My Personal Website",
};

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return redirect("https://gilangcahyono.github.io");

  return (
    <html lang="en" className={inter.className + " text-gray-100"}>
      <body className="antialiased bg-cyan-500">
        <div className="bg-zinc-700 m-20 rounded-3xl overflow-hidden flex absolute inset-0 justify-between">
          <Hero />
          <Main>{children}</Main>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
