import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <p className="font-display text-sm italic text-dust">
          The archive remains open.
        </p>
        <p className="archive-kicker">
          {SITE.author} · {SITE.year}
        </p>
      </div>
      <div className="mx-auto flex max-w-3xl gap-6 px-5 pb-10 sm:px-8">
        <Link to="/" className="nav-link">
          Threshold
        </Link>
        <Link to="/house" className="nav-link">
          The House
        </Link>
        <Link
          to="/read/$slug"
          params={{ slug: "enter-slowly" }}
          className="nav-link"
        >
          First page
        </Link>
      </div>
    </footer>
  );
}
