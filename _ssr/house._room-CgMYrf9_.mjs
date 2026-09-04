import { B as notFound, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-Dfkrid2k.mjs";
import { c as getRoom, i as chaptersInRoom, r as Route$2 } from "./router-BEQ9bDUj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house._room-CgMYrf9_.js
var import_jsx_runtime = require_jsx_runtime();
function RoomPage() {
	const { room: roomId } = Route$2.useParams();
	const room = getRoom(roomId);
	if (!room) throw notFound();
	const groups = groupByPart(chaptersInRoom(room.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-3xl px-5 pb-24 pt-8 sm:px-8 sm:pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "archive-kicker",
				children: [
					"The house · ",
					room.numeral,
					" · ",
					room.kicker
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "room-title mt-4",
				children: room.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-xl font-editorial text-lg leading-relaxed text-dust text-pretty",
				children: room.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-12",
				children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-labelledby": `part-${group.part}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: `part-${group.part}`,
						className: "archive-kicker mb-2",
						children: group.part
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": group.part,
						children: group.chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/read/$slug",
							params: { slug: chapter.slug },
							className: "chapter-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-baseline justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "chapter-row-title font-display text-[1.35rem] leading-snug text-paper-deep",
									children: chapter.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 font-mono text-[0.68rem] tracking-[0.16em] text-dust",
									children: chapter.id
								})]
							}), chapter.placeholder ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block font-editorial text-sm italic text-dust",
								children: "Original chapter not yet inserted."
							}) : chapter.excerpt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block max-w-xl font-editorial text-[0.98rem] leading-relaxed text-dust",
								children: chapter.excerpt
							}) : null]
						}, chapter.slug))
					})]
				}, group.part))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/house",
					className: "quiet-link px-0",
					children: "← All rooms"
				})
			})
		]
	}) });
}
function groupByPart(items) {
	const groups = [];
	for (const item of items) {
		const last = groups[groups.length - 1];
		if (last && last.part === item.part) last.chapters.push(item);
		else groups.push({
			part: item.part,
			chapters: [item]
		});
	}
	return groups;
}
//#endregion
export { RoomPage as component };
