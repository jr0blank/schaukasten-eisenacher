import Image from "next/image";
import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Edition() {
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

      <section className="mx-16 max-w-4xl">

        <Link
          href="/works"
          className="text-[#c3312f] hover:underline"
        >
          ← Back to Works
        </Link>

        <div className="mt-10 relative aspect-[4/3] bg-neutral-200">

          <Image
            src="/images/edition.jpeg"
            alt="Edition (Risograph)"
            fill
            className="object-contain"
          />

        </div>

        <div className="mt-12 max-w-xl space-y-3">

          <h2 className="text-xl">
            Edition (Risograph)
          </h2>

          <p className="text-neutral-600">
            Risograph print
          </p>

          <p className="text-neutral-600">
            Edition of 25, signed and numbered
          </p>

          <p className="text-neutral-600">
            Price: 50 €
          </p>

        </div>

      </section>

    </main>
  );
}