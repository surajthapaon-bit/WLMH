//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-B1dMs6Fo.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/house",
			"/read"
		],
		preloads: [
			"/assets/index-EuGC2IjA.js",
			"/assets/useStore-DkUXc2QZ.js",
			"/assets/PageShell-C3WacwjK.js",
			"/assets/root-CDpNo7ef.js"
		],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-EuGC2IjA.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes-BhDuUdA6.js"]
	},
	"/house": {
		filePath: "/workspace/src/routes/house.tsx",
		children: ["/house/$room", "/house/"],
		preloads: ["/assets/house-BC1Kt7t-.js"]
	},
	"/read": {
		filePath: "/workspace/src/routes/read.tsx",
		children: ["/read/$slug", "/read/"],
		preloads: ["/assets/read-BC1Kt7t-.js"]
	},
	"/house/$room": {
		filePath: "/workspace/src/routes/house.$room.tsx",
		children: void 0,
		preloads: ["/assets/house._room-BUgDajhv.js"]
	},
	"/read/$slug": {
		filePath: "/workspace/src/routes/read.$slug.tsx",
		children: void 0,
		preloads: ["/assets/read._slug-CoU338e6.js"]
	},
	"/house/": {
		filePath: "/workspace/src/routes/house.index.tsx",
		children: void 0,
		preloads: ["/assets/house.index-EqNs7Xch.js"]
	},
	"/read/": {
		filePath: "/workspace/src/routes/read.index.tsx",
		children: void 0,
		preloads: ["/assets/read.index-DJ7LAi8J.js"]
	}
} });
//#endregion
export { tsrStartManifest };
