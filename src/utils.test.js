import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { songs } from "./utils.js";

describe("songs", () => {
	it("has 3 artists", () => {
		assert.equal(Object.keys(songs).length, 3);
	});
	it("has 15 songs combined", () => {
		assert.equal(Object.values(songs).flat().length, 15);
	});
});
