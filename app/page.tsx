import Link from "next/link";

import Image from "next/image";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-black">

      {/* Header */}

      <header className="flex justify-between items-center px-16 pt-8 pb-14">

        <h1 className={`${archivoBlack.className} text-[#c3312f] text-2xl`}>
  Schaukasten Eisenacherstr.
 

        </h1>

        <nav className="flex gap-10 text-sm tracking-widest uppercase">


          <Link href="/">Current</Link>
<Link href="/works">Works</Link>
          <Link href="/info">Info</Link>

        </nav>

      </header>

      {/* Hero */}

      <section className="mx-20 border border-[#c3312f] p-16">

        <div className="aspect-[4/3] relative overflow-hidden">
  <Image
    src="/images/placeholder.jpeg"
    alt="Schaukasten placeholder"
    fill
    className="object-cover object-center"
    priority
  />
        </div>

        <div className="text-center mt-10">

          <h2 className="text-lg font-light tracking-[0.15em]">
  J.R. Blank
          </h2>

          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-600">
  Zwei Bilder für zwei Schaukästen
          </p>

        </div>

      </section>
<section className="mx-16 mt-24">

  <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-10">
    Works
  </h2>

  <div className="space-y-8">

    <div className="flex justify-between items-center border-b border-neutral-300 pb-4">
      <div>
        <h3 className="text-lg">Skizze aus einem Kindertraum von der Apokalypse I</h3>
        <p className="text-sm text-neutral-500">
          Oil on canvas
        </p>
      </div>

      <Link href="/works">
        View Details
      </Link>
    </div>

    <div className="flex justify-between items-center border-b border-neutral-300 pb-4">
      <div>
        <h3 className="text-lg">Skizze aus einem Kindertraum von der Apokalypse II</h3>
        <p className="text-sm text-neutral-500">
          Oil on canvas
        </p>
      </div>

      <Link href="/works">
        View Details
      </Link>
    </div>

    <div className="flex justify-between items-center border-b border-neutral-300 pb-4">
      <div>
        <h3 className="text-lg">Edition</h3>
        <p className="text-sm text-neutral-500">
          Risograph Edition
        </p>
      </div>

      <Link href="/works">
        View Details
      </Link>
    </div>

  </div>

</section>
    </main>
  );
}
