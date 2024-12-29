import fs from "fs";
import path from "path";
import esbuild from "esbuild";

function buildPlugin(pluginName: string) {
  esbuild.build({
    entryPoints: [`./${pluginName}/src/index.js`],
    bundle: true, // Bundles the code
    outfile: `./${pluginName}/dist/index.js`, // Output bundled file
    format: "iife", // IIFE format (to run directly in the browser)
    globalName: "buildPlugin", // This will be the global variable name
  });
}

const pluginDirs = fs
  .readdirSync(".")
  .filter(
    (p) =>
      fs.statSync(p).isDirectory() && fs.existsSync(path.join(p, "plugin.json"))
  );

for (const plugin of pluginDirs) {
  buildPlugin(plugin);
}
