const extractFrames = require("ffmpeg-extract-frames");
const fs = require("fs");

var files = fs.readdirSync("./files");

files.forEach(file => {
    if (file.endsWith(".mp4")) {
        extractFrames({
            input: `./files/${file}`,
            output: `./thumbnails/${file}.jpg`,
            offsets: [1000]
        });
    }
});
