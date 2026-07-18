import Image from "next/image";
import Link from "next/link";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function Edition() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-black px-5 py-6 md:px-16 md:py-8">
      <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className={`${archivoBlack.className} text-[#c3312f] text-xl leading-none`}>
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
        <Link href="/works" className="text-xs text-[#c3312f]">
          ← Back to Works
        </Link>

        <Image
          src="/images/edition-risograph-2.jpg"
          alt="Edition (Risograph)"
          width={1400}
          height={1100}
          className="mt-8 w-full h-auto"
          priority
        />

        <div className="mt-8 max-w-xl space-y-2 text-sm">
          <h2 className="text-base">Edition (Risograph)</h2>

          <p className="text-neutral-600">Risograph print</p>
          <p className="text-neutral-600">
            Edition of 25, signed and numbered, 40 x 30 cm, printed on Munken 170g
          </p>
          <p className="text-neutral-600">50 €</p>

          <p className="pt-4 text-neutral-600">
            Available for purchase.
For orders and shipping inquiries:
            <br />
            info@schaukasten-eisenacher.de
          </p>
        </div>
      </section>
    </main>
  );
}