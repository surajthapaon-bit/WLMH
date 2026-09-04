import { i as __toESM } from "../_runtime.mjs";
import { B as notFound, V as require_react, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-Dfkrid2k.mjs";
import { a as getChapter, c as getRoom, n as Route, o as getNeighbors } from "./router-BEQ9bDUj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read._slug-BoaL5aVr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChapterBody({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "prose-archive",
		children: blocks.map((block, index) => {
			const key = `${block.type}-${index}`;
			switch (block.type) {
				case "lead": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lead",
					children: block.text
				}, key);
				case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.text }, key);
				case "pull": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "pull",
					children: block.text
				}, key);
				case "verse": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "verse",
					children: block.lines.map((line, lineIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, `${index}-${lineIndex}`))
				}, key);
				case "note": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "note",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "note-kicker",
							children: block.kicker
						}),
						block.title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "note-title",
							children: block.title
						}) : null,
						block.text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block.text }) : null
					]
				}, key);
				case "placeholder": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "placeholder",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "placeholder-kicker",
							children: "Editorial placeholder"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Original chapter not yet inserted." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The record remains unfinished where the life itself was unfinished." })
					]
				}, key);
				default: return null;
			}
		})
	});
}
function useReadProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
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
function ReadingLayout({ chapter }) {
	const { prev, next } = getNeighbors(chapter.slug);
	const room = getRoom(chapter.room);
	const progress = useReadProgress();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "read-progress",
		style: { width: `${progress * 100}%` },
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto w-full max-w-[42rem] px-5 pb-24 pt-6 sm:px-6 sm:pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-10 sm:mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "archive-kicker",
					children: [chapter.part.replace("PART ", "").replace(" — ", " · "), chapter.id ? ` · ${chapter.id}` : ""]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "chapter-title mt-4",
					children: chapter.title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterBody, { blocks: chapter.blocks }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Adjacent pages",
				className: "mt-20 border-t border-line pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 sm:grid-cols-2",
					children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$slug",
						params: { slug: prev.slug },
						className: "group min-h-11 no-underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "archive-kicker",
							children: "Previous"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 block font-display text-xl leading-snug text-paper-deep group-hover:text-paper",
							children: ["← ", prev.title]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/read/$slug",
						params: { slug: next.slug },
						className: "group min-h-11 no-underline sm:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "archive-kicker",
							children: "Next"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 block font-display text-xl leading-snug text-paper-deep group-hover:text-paper",
							children: [next.title, " →"]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
				}), room ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/house/$room",
						params: { room: room.id },
						className: "quiet-link px-0",
						children: ["Return to ", room.title]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/house",
						className: "quiet-link px-0",
						children: "Return to the house"
					})
				})]
			})
		]
	})] });
}
function ReadPage() {
	const { slug } = Route.useParams();
	const chapter = getChapter(slug);
	if (!chapter) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadingLayout, { chapter });
}
//#endregion
export { ReadPage as component };
