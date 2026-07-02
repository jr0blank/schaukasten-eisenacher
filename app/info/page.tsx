import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Info() {
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

      <section className="mx-16 max-w-2xl">
        <h2 className="text-xl mb-12">Info</h2>

        <div className="space-y-6 text-sm leading-7">
  <p>
    Schaukasten Eisenacherstraße is a series of monthly exhibitions that
    brings 12 artistic positions per year to vitrines in the subway station
    Eisenacher Straße in Berlin.
    The works are accompanied by editions that are available on this site.
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