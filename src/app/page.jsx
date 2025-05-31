import Main from "@/components/Main";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect("https://gilangcahyono.github.io");
  return (
    <Main>
      <h1 className="text-3xl font-bold text-center">Gilang Cahyono</h1>
      <p className="text-center">Web Developer</p>
    </Main>
  );
}
