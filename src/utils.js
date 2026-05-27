import fs from "node:fs/promises";

/**
 * @typedef {string[]} Song
 */

/**
 * @type {Object<string, Song>} A collection of artist and its songs
 */
export const songs = {
	PinocchioP: [
		"SLoWMoTIoN feat. Hatsune Miku",
		"God-ish feat. Hatsune Miku",
		"Reincarnation Apple feat. Hatsune Miku",
		"Anonymous M feat. Hatsune Miku & ARuFa",
		"Non-breath oblige feat. Hatsune Miku",
	],
	"Mitchie M": [
		"Viva Happy feat. 初音ミク",
		"Ohedo-Julia Night feat. Hatsune Miku, KAITO",
		"Seraphim On The Ring feat. Hatsune Miku, Kagamine Rin, KAITO",
		"Bureau ai de feat Hatsune Miku",
		"Love! Snow! Really Magic feat. Hatsune Miku",
	],
	SAWTOWNE: [
		"LOVELY♥CAVITY ft. Hatsune Miku",
		"Confessions of a Rotten Girl ft. Hatsune Miku",
		"POKÉDANCE ft. Hatsune Miku",
		"M@GICAL☆CURE! LOVE ♥ SHOT! feat. Hatsune Miku",
		"Lollipop feat. 初音ミク",
	],
};

/**
 * Get the filenames of artist and its songs
 * @param {string} artist
 * @param {Song} songs
 */
export function getFilenames(artist, songs) {
	return songs.map((song) => `${artist} - ${song}`);
}

/**
 * Creates a file if it doesn't exist
 * @param {string} filename
 */
export async function createFile(filename) {
	await fs.writeFile(`gen/${filename}.mp3`, "", { flag: "w" });
}
