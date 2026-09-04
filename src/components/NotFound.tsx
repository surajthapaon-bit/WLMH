import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export function NotFound() {
  return (
    <PageShell>
      <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-5 py-16 sm:px-8">
        <p className="archive-kicker">404</p>
        <h1 className="room-title mt-4">This room is empty.</h1>
        <p className="mt-5 font-editorial text-lg leading-relaxed text-dust">
          The page you asked for is not in the archive. It may have been moved,
          or it may never have been written.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link to="/house" className="btn-paper">
            Return to the house
          </Link>
          <Link to="/" className="quiet-link">
            Back to the threshold
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
