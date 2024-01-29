import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Venison Interactive Gaming | Kieran Venison",
  description: "Venison Interactive Gaming",
};

export default function Voiders() {
  return (
    <main>
      <div className="skinny-container py-8 text-center space-y-4">
        <Image
          src="/images/voiders/text.png"
          width={960}
          height={164}
          alt="Voiders Text"
          className="w-[30rem] mx-auto"
        />
        <p>
          Can you defend the planet from the voiders in this 8 bit style mobile
          shooter, Find out!
        </p>
        <p>More info coming soon...</p>
      </div>
    </main>
  );
}
