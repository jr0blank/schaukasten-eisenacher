import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function TextPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] px-5 py-6 text-black md:px-16 md:py-8">
      <header className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <h1
          className={`${archivoBlack.className} whitespace-nowrap text-base leading-none text-[#c3312f] md:text-xl`}
        >
          Schaukasten Eisenacherstr.
        </h1>

        <nav className="flex gap-5 text-[11px] uppercase tracking-[0.12em] md:text-sm">
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/text">Text</Link>
          <Link href="/info">Info</Link>
        </nav>
      </header>

      <section className="max-w-2xl border border-[#c3312f] p-6 md:p-8">
        <h2 className="mb-8 text-sm uppercase tracking-[0.25em] text-[#c3312f]">
          Text
        </h2>

        <div className="space-y-6 text-sm leading-8">
          <p className="text-neutral-500">
            Accompanying text coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}