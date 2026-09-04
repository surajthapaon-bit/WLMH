import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-Dfkrid2k.js
var import_jsx_runtime = require_jsx_runtime();
function GrainOverlay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 z-40 overflow-hidden mix-blend-overlay",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "h-full w-full opacity-[0.055]",
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
				id: "archive-grain",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feTurbulence", {
					type: "fractalNoise",
					baseFrequency: "0.85",
					numOctaves: "2",
					stitchTiles: "stitch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", {
					type: "saturate",
					values: "0"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "100%",
				height: "100%",
				filter: "url(#archive-grain)"
			})]
		})
	});
}
var SITE = {
	name: "Without Losing My Humanity",
	shortName: "The Archive",
	author: "Suraj Thapa",
	edition: "Archive Edition",
	year: "2026",
	subtitle: "A Quiet Archive of What I Noticed on the Way Back to Myself",
	statement: [
		"This is not a brand.",
		"Not a course.",
		"Not a performance."
	],
	description: "A quiet archive of what Suraj Thapa noticed on the way back to himself. Not a brand, not a course, not a performance.",
	themeColor: "#0c0d0b"
};
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative z-10 mt-auto border-t border-line px-5 py-10 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm italic text-dust",
				children: "The archive remains open."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "archive-kicker",
				children: [
					SITE.author,
					" · ",
					SITE.year
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-6 flex max-w-5xl gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "nav-link",
					children: "Threshold"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/house",
					className: "nav-link",
					children: "The House"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/read/$slug",
					params: { slug: "enter-slowly" },
					className: "nav-link",
					children: "First page"
				})
			]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteHeader({ tone = "default" }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const onHouse = pathname === "/house" || pathname.startsWith("/house/");
	const onRead = pathname.startsWith("/read/");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("relative z-20 flex items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6", tone === "home" ? "bg-transparent" : "bg-night/80 backdrop-blur-[2px]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			className: "wordmark max-w-[11.5rem] sm:max-w-none",
			"aria-label": `${SITE.name}, home`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Without Losing My Humanity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "sm:hidden",
				children: [
					"Without Losing",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"My Humanity"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Primary",
			className: "flex items-center gap-5 sm:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/house",
				className: "nav-link",
				"data-active": onHouse ? "true" : "false",
				children: "The House"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/read/$slug",
				params: { slug: "enter-slowly" },
				className: "nav-link",
				"data-active": onRead ? "true" : "false",
				children: "Read"
			})]
		})]
	});
}
function SkipLink() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#main",
		className: "skip-link",
		children: "Skip to contents"
	});
}
function PageShell({ children, tone = "default", footer = true, mainClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-dvh flex-col bg-night text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipLink, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrainOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { tone }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: cn("relative z-10 flex-1", mainClassName),
				children
			}),
			footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}) : null
		]
	});
}
//#endregion
export { SITE as n, PageShell as t };
