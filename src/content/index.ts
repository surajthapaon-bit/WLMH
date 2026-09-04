import archive from "./archive.json";
import type { Chapter, RoomId } from "./types";

export type { Block, Chapter, RoomId } from "./types";

export const chapters: Chapter[] = archive.chapters as Chapter[];

const bySlug = new Map(chapters.map((chapter) => [chapter.slug, chapter]));

export function getChapter(slug: string | undefined): Chapter | undefined {
  if (!slug) return undefined;
  return bySlug.get(slug);
}

export function getChapterIndex(slug: string): number {
  return chapters.findIndex((chapter) => chapter.slug === slug);
}

export function getNeighbors(slug: string): {
  prev?: Chapter;
  next?: Chapter;
} {
  const index = getChapterIndex(slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? chapters[index - 1] : undefined,
    next: index < chapters.length - 1 ? chapters[index + 1] : undefined,
  };
}

export function chaptersInRoom(room: RoomId): Chapter[] {
  return chapters.filter((chapter) => chapter.room === room);
}

export function firstChapter(): Chapter {
  return chapters[0];
}

export function chapterPath(slug: string): string {
  return `/read/${slug}`;
}

export function roomPath(room: RoomId): string {
  return `/house/${room}`;
}
