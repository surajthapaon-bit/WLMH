import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChapterBody } from "@/components/ChapterBody";
import { PageShell } from "@/components/PageShell";
import type { Chapter } from "@/content/types";
import { getNeighbors } from "@/content/index";
import { getRoom } from "@/data/rooms";

function useReadProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max <= 0 ? 0 : Math.min(1, el.scrollTop / max));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

export function ReadingLayout({ chapter }: { chapter: Chapter }) {
  const { prev, next } = getNeighbors(chapter.slug);
  const room = getRoom(chapter.room);
  const progress = useReadProgress();

  return (
    <PageShell>
      <div
        className="read-progress"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
      <article className="mx-auto w-full max-w-[42rem] px-5 pb-24 pt-6 sm:px-6 sm:pt-10">
        <header className="mb-10 sm:mb-14">
          <p className="archive-kicker">
            {chapter.part.replace("PART ", "").replace(" — ", " · ")}
            {chapter.id ? ` · ${chapter.id}` : ""}
          </p>
          <h1 className="chapter-title mt-4">{chapter.title}</h1>
        </header>
        <ChapterBody blocks={chapter.blocks} />
        <nav
          aria-label="Adjacent pages"
          className="mt-20 border-t border-line pt-8"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            {prev ? (
              <Link
                to="/read/$slug"
                params={{ slug: prev.slug }}
                className="group min-h-11 no-underline"
              >
                <span className="archive-kicker">Previous</span>
                <span className="mt-2 block font-display text-xl leading-snug text-paper-deep group-hover:text-paper">
                  ← {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/read/$slug"
                params={{ slug: next.slug }}
                className="group min-h-11 no-underline sm:text-right"
              >
                <span className="archive-kicker">Next</span>
                <span className="mt-2 block font-display text-xl leading-snug text-paper-deep group-hover:text-paper">
                  {next.title} →
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
          {room ? (
            <p className="mt-10">
              <Link
                to="/house/$room"
                params={{ room: room.id }}
                className="quiet-link px-0"
              >
                Return to {room.title}
              </Link>
            </p>
          ) : (
            <p className="mt-10">
              <Link to="/house" className="quiet-link px-0">
                Return to the house
              </Link>
            </p>
          )}
        </nav>
      </article>
    </PageShell>
  );
}
