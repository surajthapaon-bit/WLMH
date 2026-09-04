import { PRINCIPLES } from "@/data/principles";

export function PrincipleList() {
  return (
    <section aria-labelledby="principles-heading" className="relative z-10">
      <h2 id="principles-heading" className="sr-only">
        Archive principles
      </h2>
      <ul className="divide-y divide-line border-t border-b border-line">
        {PRINCIPLES.map((principle) => (
          <li key={principle.title} className="py-7 sm:py-8">
            <h3 className="font-display text-[1.35rem] leading-snug text-paper text-balance">
              {principle.title}
            </h3>
            <p className="mt-2 max-w-xl font-editorial text-[1.02rem] leading-relaxed text-dust text-pretty">
              {principle.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
