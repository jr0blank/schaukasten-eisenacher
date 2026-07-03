import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Info() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-black px-5 py-6 md:px-16 md:py-8">
      <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className={`${archivoBlack.className} text-[#c3312f] text-xl leading-none`}>
          Schaukasten Eisenacherstr.
        </h1>

        <nav className="flex gap-6 text-xs tracking-[0.12em] uppercase md:text-sm">
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/info">Info</Link>
        </nav>
      </header>

      <section className="max-w-2xl border border-[#c3312f] p-6 md:p-8">
        <h2 className="mb-8 text-sm uppercase tracking-[0.25em] text-[#c3312f]">
          About
        </h2>

        <div className="space-y-6 text-sm leading-8">
          <p>
            Schaukasten Eisenacherstraße is a series of monthly exhibitions
            that brings 12 artistic positions per year to the display cases
            at U-Bahnhof Eisenacher Straße in Berlin. The works are
            accompanied by editions that are available through this website.
          </p>

          <p>
            For inquiries:
            <br />
            info@schaukasten-eisenacher.de
          </p>
        </div>
      </section>
    </main>
  );
}