import fs from "fs";
import path from "path";
import esbuild from "esbuild";

function buildPlugin(pluginName: string) {
  esbuild.build({
    entryPoints: [`./plugins/${pluginName}/src/index.js`],
    bundle: true, // Bundles the code
    outfile: `./plugins/${pluginName}/dist/index.js`, // Output bundled file
    format: "iife", // IIFE format (to run directly in the browser)
    globalName: "buildPlugin", // This will be the global variable name
  });
}

console.log(fs.readdirSync("plugins"));
const pluginDirs = fs
  .readdirSync("plugins")
  .filter(
    (p) =>
      fs.statSync(path.join("plugins", p)).isDirectory() &&
      fs.existsSync(path.join("plugins", p, "plugin.json"))
  );

for (const plugin of pluginDirs) {
  buildPlugin(plugin);
}
