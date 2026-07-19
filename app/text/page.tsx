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
        <h2 className="mb-10 text-sm uppercase tracking-[0.25em] text-[#c3312f]">
          Text
        </h2>
        <p className="mb-3 text-sm text-[#c3312f]">
  July 2026
</p>

        <h3 className="mb-8 text-lg font-semibold">
          I’ve got two feet
        </h3>

        <div className="whitespace-pre-line text-[15px] leading-8">
          {`Two feet planted
on the ground, now!
My toes claw at the insides of my shoes
like my stomach sometimes against my insides
It’s not so much worrying, rather
a constant state of re-action
feels like something digging out of me
from the ground upwards.

Whoa my heart is racing? No it’s
A whooooooosh of yellow
Like when I rub my eyelids too hard, too fast
making fireworks behind my eyes, and
when I open them I forget
which way the world turns.

Why is the Center so loud?
Colors and cultures clashing
Like how rude
I can’t hear my own thoughts
Oh, if only some quiet so I could listen to myself, loudly
my heart beats against my chest
as the only reminder that I am here, too
two feet planted
on this godforsaken ground
gripping my toes into my shoes
in the hopes of being my own center of gravity
there’s no place for my eyes to hold and focus my balance
cause I don’t want to look at you, or
you either
and definitely not you.

I cast my gaze upwards
find a way out of the fight
It’s not that I'm a hater but I’m not
loving all the colors and words grabbing at me away from the ground upwards, but
I’ve got my two feet planted and I’m not giving up my space
for anyone.`}
        </div>

        <p className="mt-10 italic text-neutral-600">
          — Jaime Heather Schwartz
        </p>
      </section>
    </main>
  );
}