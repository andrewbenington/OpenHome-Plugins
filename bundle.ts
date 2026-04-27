import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'

function buildPlugin(pluginName: string) {
  esbuild.build({
    entryPoints: [`./plugins-${process.env.API_VERSION}/${pluginName}/src/index.js`],
    bundle: true, // Bundles the code
    outfile: `./plugins-${process.env.API_VERSION}/${pluginName}/dist/index.js`, // Output bundled file
    format: 'iife', // IIFE format (to run directly in the browser)
    globalName: 'buildPlugin', // This will be the global variable name
  })
}

const pluginDirs = fs
  .readdirSync('plugins')
  .filter(
    (p) =>
      fs.statSync(path.join(`plugins-${process.env.API_VERSION}`, p)).isDirectory() &&
      fs.existsSync(path.join(`plugins-${process.env.API_VERSION}`, p, 'plugin.json'))
  )

for (const plugin of pluginDirs) {
  buildPlugin(plugin)
}
