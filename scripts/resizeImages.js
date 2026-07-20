const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = path.join(__dirname, "../src/images/teamPhotos/centerStage-raw");
const outputFolder = path.join(__dirname, "../src/images/teamPhotos/centerStage");

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

fs.readdirSync(inputFolder).forEach(file => {
  const input = path.join(inputFolder, file);
  const output = path.join(outputFolder, file);

  sharp(input)
    .resize(3024, 3591, {
      fit: "cover",
      position: "center"
    })
    .toFile(output)
    .then(() => console.log(`Done: ${file}`))
    .catch(console.error);
});