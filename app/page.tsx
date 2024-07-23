import { Boxes } from "@/components/ui aceternity/background-boxes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" h-screen flex flex-col items-center p-24 bg-black">
      <div className="absolute inset-0 overflow-hidden ">
        <Boxes />
        <section className="  flex flex-col items-center">
          <h1 className="text-center text-3xl sm:text-7xl bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent z-10 capitalize mt-32">
            meet up clone
          </h1>
          <h2 className="py-6 z-10 text-gray-500 text-lg sm:text-2xl">
            Come and make new experiences
          </h2>
          <div className="mt-64 z-10 flex gap-4">
            <Link href={"/login"}>
              <Button variant="secondary" className="h-12 w-full text-base">
                login
              </Button>
            </Link>
            <Link href={"/register"}>
              <Button variant="default" className="h-12 w-full text-base">
                register
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
