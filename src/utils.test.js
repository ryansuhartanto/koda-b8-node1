import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { createFile, getFilenames, songs } from "./utils.js";

describe("songs", () => {
	it("has 3 artists", () => {
		assert.equal(Object.keys(songs).length, 3);
	});
	it("has 15 songs combined", () => {
		assert.equal(Object.values(songs).flat().length, 15);
	});
});

describe("getFilenames", () => {
	it("returns array", () => {
		assert.equal(typeof getFilenames("", []), "object");
		assert(Array.isArray(getFilenames("", [])));
	});

	it("returns array of strings", () => {
		assert.equal(typeof getFilenames("", [""])[0], "string");
	});
});

describe("createFile", () => {
	it("creates file", () => {
		assert.doesNotThrow(async () => {
			await createFile("PinocchioP - SLoWMoTIoN feat. Hatsune Miku");
		});
	});
});
