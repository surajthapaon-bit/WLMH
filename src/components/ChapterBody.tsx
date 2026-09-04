import type { Block } from "@/content/types";

export function ChapterBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-archive">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "lead":
            return (
              <p key={key} className="lead">
                {block.text}
              </p>
            );
          case "p":
            return <p key={key}>{block.text}</p>;
          case "pull":
            return (
              <blockquote key={key} className="pull">
                {block.text}
              </blockquote>
            );
          case "verse":
            return (
              <ul key={key} className="verse">
                {block.lines.map((line, lineIndex) => (
                  <li key={`${index}-${lineIndex}`}>{line}</li>
                ))}
              </ul>
            );
          case "note":
            return (
              <aside key={key} className="note">
                <div className="note-kicker">{block.kicker}</div>
                {block.title ? <div className="note-title">{block.title}</div> : null}
                {block.text ? <p>{block.text}</p> : null}
              </aside>
            );
          case "placeholder":
            return (
              <aside key={key} className="placeholder">
                <div className="placeholder-kicker">Editorial placeholder</div>
                <p>Original chapter not yet inserted.</p>
                <p>
                  The record remains unfinished where the life itself was unfinished.
                </p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
