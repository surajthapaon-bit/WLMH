import { Link, useRouterState } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader({ tone = "default" }: { tone?: "default" | "home" }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHouse = pathname === "/house" || pathname.startsWith("/house/");
  const onRead = pathname.startsWith("/read/");

  return (
    <header
      className={cn(
        "relative z-20",
        tone === "home" ? "bg-transparent" : "bg-night",
      )}
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
        <Link
          to="/"
          className="wordmark max-w-[11.5rem] sm:max-w-none"
          aria-label={`${SITE.name}, home`}
        >
          <span className="hidden sm:inline">Without Losing My Humanity</span>
          <span className="sm:hidden">
            Without Losing
            <br />
            My Humanity
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-8">
          <Link
            to="/house"
            className="nav-link"
            data-active={onHouse ? "true" : "false"}
            aria-current={onHouse ? "page" : undefined}
          >
            The House
          </Link>
          <Link
            to="/read/$slug"
            params={{ slug: "enter-slowly" }}
            className="nav-link"
            data-active={onRead ? "true" : "false"}
            aria-current={onRead ? "page" : undefined}
          >
            Read
          </Link>
        </nav>
      </div>
    </header>
  );
}
