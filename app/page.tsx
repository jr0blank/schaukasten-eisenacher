import Image from "next/image";
import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-black px-5 py-6 md:px-16 md:py-8">
      <header className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <h1 className={`${archivoBlack.className} text-[#c3312f] text-base md:text-xl leading-none whitespace-nowrap`}>
          Schaukasten Eisenacherstr.
        </h1>

        <nav className="flex gap-5 text-[11px] tracking-[0.12em] uppercase md:text-sm">
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/info">Info</Link>
        </nav>
      </header>

      <section className="border border-[#c3312f] p-3 md:p-10">
        <Image
          src="/images/hero-installation.jpg"
          alt="Installation view of Zwei Bilder für zwei Schaukästen"
          width={2000}
          height={1500}
          className="w-full h-auto"
          priority
        />

        <div className="mt-5 text-center">
          <h2 className="text-base font-light tracking-[0.15em]">
            J.R. Blank
          </h2>

          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-600">
            Zwei Bilder für zwei Schaukästen
          </p>

          <div className="mt-5 text-[#c3312f] text-xl">
            ↓
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-8 text-sm uppercase tracking-[0.25em] text-[#c3312f]">
          Works
        </h2>

        <div className="space-y-6 text-sm">
          <Link
            href="/works/skizze-aus-einem-kindertraum-von-der-apokalypse-i"
            className="flex justify-between gap-6 border-b border-neutral-300 pb-4"
          >
            <span>Skizze aus einem Kindertraum von der Apokalypse I</span>
            <span className="text-[#c3312f]">→</span>
          </Link>

          <Link
            href="/works/skizze-aus-einem-kindertraum-von-der-apokalypse-ii"
            className="flex justify-between gap-6 border-b border-neutral-300 pb-4"
          >
            <span>Skizze aus einem Kindertraum von der Apokalypse II</span>
            <span className="text-[#c3312f]">→</span>
          </Link>

          <Link
            href="/works/edition"
            className="flex justify-between gap-6 border-b border-neutral-300 pb-4"
          >
            <span>Edition (Risograph)</span>
            <span className="text-[#c3312f]">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}