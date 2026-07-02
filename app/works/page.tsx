import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Works() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-black">
      <header className="flex justify-between items-center px-16 pt-8 pb-14">
        <h1 className={`${archivoBlack.className} text-[#c3312f] text-xl`}>
          Schaukasten Eisenacherstr.
        </h1>

        <nav className="flex gap-10 text-sm tracking-[0.12em] uppercase">
          <Link href="/">Current</Link>
          <Link href="/works">Works</Link>
          <Link href="/info">Info</Link>
        </nav>
      </header>

      <section className="mx-16 max-w-3xl">
        <h2 className="text-xl mb-12">Works</h2>

        <div className="space-y-8">
          <Link
            href="/works/skizze-aus-einem-kindertraum-von-der-apokalypse-i"
            className="flex justify-between gap-8 border-b pb-4 hover:text-[#c3312f]"
          >
            <span>Skizze aus einem Kindertraum von der Apokalypse I</span>
            <span className="text-[#c3312f]">→</span>
          </Link>

          <Link
            href="/works/skizze-aus-einem-kindertraum-von-der-apokalypse-ii"
            className="flex justify-between gap-8 border-b pb-4 hover:text-[#c3312f]"
          >
            <span>Skizze aus einem Kindertraum von der Apokalypse II</span>
            <span className="text-[#c3312f]">→</span>
          </Link>

          <Link
            href="/works/edition"
            className="flex justify-between gap-8 border-b pb-4 hover:text-[#c3312f]"
          >
            <span>Edition (Risograph)</span>
            <span className="text-[#c3312f]">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}