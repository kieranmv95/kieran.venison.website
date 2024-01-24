import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venison Interactive Gaming | Kieran Venison",
  description: "Venison Interactive Gaming",
};

export default function VenisonInteractiveGaming() {
  return (
    <main>
      <div className="skinny-container py-8">
        <h1 className="text-4xl font-bold lg:text-5xl mb-4">Projects</h1>
        <p>A showcase of some of my wokr and projects in the pipeline</p>
        <p>Coming Soon...</p>
      </div>
    </main>
  );
}
