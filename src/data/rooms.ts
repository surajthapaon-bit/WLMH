import type { RoomId } from "@/content/types";

export type Room = {
  id: RoomId;
  numeral: string;
  title: string;
  kicker: string;
  intro: string;
  body: string;
};

export const ROOMS: Room[] = [
  {
    id: "enter-slowly",
    numeral: "01",
    title: "Enter Slowly",
    kicker: "Threshold",
    intro: "A place to arrive before anything begins.",
    body: "How to enter. What this archive is, and is not. The first pages were written for the nervous system as much as for the mind.",
  },
  {
    id: "the-record",
    numeral: "02",
    title: "The Record",
    kicker: "Origin",
    intro: "The years before the rupture had a name.",
    body: "Camps, kitchens, uncles, Canada. Adaptation wearing the clothes of ordinary life. What the body learned before language arrived.",
  },
  {
    id: "the-nervous-system",
    numeral: "03",
    title: "The Nervous System",
    kicker: "Machinery",
    intro: "What became visible when the machinery was moving.",
    body: "Gambling, love, uncertainty, the long activation. Not a diagnosis. A record of a system that finally became observable from the inside.",
  },
  {
    id: "the-human-part",
    numeral: "04",
    title: "The Human Part",
    kicker: "Reconstruction",
    intro: "What remained after the noise thinned.",
    body: "Gardens, work, an empty house, a letter to the boy who survived by staying alert. The archive remains open because the life inside it is still becoming.",
  },
];

export function getRoom(id: string | undefined): Room | undefined {
  return ROOMS.find((room) => room.id === id);
}
