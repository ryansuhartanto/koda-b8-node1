const fs = require("node:fs/promises");

const songs = {
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

const data = Object.entries(songs).flatMap(([artist, songs]) => {
	return songs.map((song) => `${artist} - ${song}`);
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
