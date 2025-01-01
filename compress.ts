import fs from "fs";
import archiver from "archiver";
import path from "path";

function zipDirectory(sourceDir, outPath) {
  const output = fs.createWriteStream(outPath);
  const archive = archiver("zip", { zlib: { level: 9 } }); // Sets the compression level

  return new Promise((resolve, reject) => {
    output.on("close", () => {
      console.log(
        `${outPath} created successfully! Total size: ${archive.pointer()} bytes.`
      );
    });

    archive.on("error", (err) => reject(err));

    archive.pipe(output);
    archive.directory(sourceDir, false); // Add the directory contents to the archive
    archive.finalize(); // Finalize the archive
  });
}

const pluginDirs = fs
  .readdirSync("plugins")
  .filter(
    (p) =>
      fs.statSync(path.join("plugins", p)).isDirectory() &&
      fs.existsSync(path.join("plugins", p, "plugin.json"))
  );

for (const plugin of pluginDirs) {
  console.log("compressing", path.join("plugins", plugin, "assets"));
  zipDirectory(
    path.join("plugins", plugin, "assets"),
    path.join("plugins", plugin, "assets.zip")
  );
}
