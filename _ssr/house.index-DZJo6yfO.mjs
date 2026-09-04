import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-Dfkrid2k.mjs";
import { s as ROOMS } from "./router-BEQ9bDUj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house.index-DZJo6yfO.js
var import_jsx_runtime = require_jsx_runtime();
function RoomLink({ room }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/house/$room",
		params: { room: room.id },
		className: "room-link",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "room-link-numeral",
			children: room.numeral
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "room-link-title",
			children: room.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-2 block max-w-xl font-editorial text-[1.02rem] leading-relaxed text-dust",
			children: room.intro
		})] })]
	});
}
function HousePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-3xl px-5 pb-24 pt-8 sm:px-8 sm:pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "archive-kicker",
				children: "The house"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "room-title mt-4",
				children: [
					"A place for the things",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"that stayed."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-xl font-editorial text-lg leading-relaxed text-dust text-pretty",
				children: "Not every room that ever existed. Only the ones that remained after the noise thinned: the threshold, the record, the system, and the human part that did not disappear."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Rooms",
				className: "mt-12 sm:mt-16",
				children: ROOMS.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomLink, { room }, room.id))
			})
		]
	}) });
}
//#endregion
export { HousePage as component };
