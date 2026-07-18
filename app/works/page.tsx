import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Works() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-black px-5 py-6 md:px-16 md:py-8">
      <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className={`${archivoBlack.className} text-[#c3312f] text-lg md:text-xl leading-none`}>
          Schaukasten Eisenacherstr.
        </h1>

        <nav className="flex gap-5 text-[11px] tracking-[0.12em] uppercase md:text-sm">
  <Link href="/">Home</Link>
  <Link href="/works">Works</Link>
  <Link href="/text">Text</Link>
  <Link href="/info">Info</Link>
</nav>
      </header>

      <section>
        <h2 className="mb-8 text-sm uppercase tracking-[0.25em] text-[#c3312f]">
          Works
        </h2>

        <div className="space-y-6 text-sm">
          <Link
            href="/works/skizze-aus-einem-kindertraum-von-der-apokalypse-i"
            className="flex justify-between gap-6 border-b border-neutral-300 pb-4"
          >
            <span>Kindertraum von der Apokalypse I</span>
            <span className="text-[#c3312f]">→</span>
          </Link>

          <Link
            href="/works/skizze-aus-einem-kindertraum-von-der-apokalypse-ii"
            className="flex justify-between gap-6 border-b border-neutral-300 pb-4"
          >
            <span>Kindertraum von der Apokalypse II</span>
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