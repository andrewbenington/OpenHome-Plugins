import fs from "fs";
import archiver from "archiver";
import path from "path";

function zipDirectory(sourceDir, outPath) {
  const output = fs.createWriteStream(outPath);
  const archive = archiver("zip", { zlib: { level: 9 } }); // Sets the compression level

  return new Promise((resolve, reject) => {
    output.on("close", () => {
      console.log(
        `Archive created successfully! Total size: ${archive.pointer()} bytes.`
      );
    });

    archive.on("error", (err) => reject(err));

    archive.pipe(output);
    archive.directory(sourceDir, false); // Add the directory contents to the archive
    archive.finalize(); // Finalize the archive
  });
}

const pluginDirs = fs
  .readdirSync(".")
  .filter(
    (p) =>
      fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, "plugin.json"))
  );

for (const plugin of pluginDirs) {
  zipDirectory(path.join(plugin, "assets"), path.join(plugin, "assets.zip"));
}
