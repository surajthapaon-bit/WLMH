export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "pull"; text: string }
  | { type: "verse"; lines: string[] }
  | { type: "note"; kicker: string; title: string; text: string }
  | { type: "placeholder" };

export type Chapter = {
  slug: string;
  id: string;
  title: string;
  part: string;
  room: string;
  placeholder: boolean;
  excerpt: string;
  blocks: Block[];
};

export type RoomId =
  | "enter-slowly"
  | "the-record"
  | "the-nervous-system"
  | "the-human-part";
