import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'

function buildPlugin(pluginName: string) {
  esbuild.build({
    entryPoints: [`./plugins-v2/${pluginName}/src/index.js`],
    bundle: true, // Bundles the code
    outfile: `./plugins-v2/${pluginName}/dist/index.js`, // Output bundled file
    format: 'iife', // IIFE format (to run directly in the browser)
    globalName: 'buildPlugin', // This will be the global variable name
  })
}

const pluginDirs = fs
  .readdirSync('plugins')
  .filter(
    (p) =>
      fs.statSync(path.join('plugins-v2', p)).isDirectory() &&
      fs.existsSync(path.join('plugins-v2', p, 'plugin.json'))
  )

for (const plugin of pluginDirs) {
  buildPlugin(plugin)
}
