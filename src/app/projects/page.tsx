import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Kieran Venison",
  description: "Check out my latest projects",
};

export default function Projects() {
  return (
    <main>
      <div className="skinny-container py-8">
        <h1 className="text-4xl font-bold lg:text-5xl mb-6">Projects</h1>
        <div className="grid md:grid-cols-[10rem_1fr] md:gap-4">
          <Image
            src="/images/voiders/voidersBig.png"
            width={500}
            height={500}
            alt="Kieran Venison"
            className="w-[10rem] md:w-full mb-2"
          />
          <div>
            <h2 className="text-2xl">VOIDERS</h2>
            <p className="mb-4">
              Can you defend the planet from the voiders in this 8 bit style
              mobile shooter, Find out!
            </p>
            <p className="mb-4">Developed in Unity using C#</p>
            <p>
              <Link
                href="/projects/voiders"
                className="inline-block px-3 py-2 border-solid border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-bg-end active:bg-primary active:text-bg-end"
              >
                Find out more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
