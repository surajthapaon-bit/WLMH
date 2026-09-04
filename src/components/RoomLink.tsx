import { Link } from "@tanstack/react-router";
import type { Room } from "@/data/rooms";

export function RoomLink({ room }: { room: Room }) {
  return (
    <Link
      to="/house/$room"
      params={{ room: room.id }}
      className="room-link"
    >
      <span className="room-link-numeral">{room.numeral}</span>
      <span>
        <span className="room-link-title">{room.title}</span>
        <span className="mt-2 block max-w-xl font-editorial text-[1.02rem] leading-relaxed text-dust">
          {room.intro}
        </span>
      </span>
    </Link>
  );
}
