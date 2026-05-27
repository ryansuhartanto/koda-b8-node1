import { createFile, getFilenames, songs } from "./utils.js";

const data = Object.entries(songs).flatMap(([artist, songs]) => {
	return getFilenames(artist, songs);
});

data.forEach(async (song) => {
	try {
		createFile(song);
		console.log(`File ${song}.mp3 has been created.`);
	} catch (err) {
		console.error(`Error creating file ${song}.mp3:`, err);
	}
});
