import fs from "node:fs/promises";

import { songs } from "./util.js";
import { getFilenames } from "./utils.js";

const data = Object.entries(songs).flatMap(([artist, songs]) => {
	return getFilenames(artist, songs);
});

data.forEach(async (song) => {
	try {
		const handle = await fs.open(`gen/${song}.mp3`, "a");
		console.log(`File ${song}.mp3 has been created.`);
		await fs.close(handle.fd);
	} catch (err) {
		console.error(`Error creating file ${song}.mp3:`, err);
	}
});
