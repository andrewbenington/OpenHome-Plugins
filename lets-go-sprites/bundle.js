const esbuild = await import("esbuild");
esbuild
  .build({
    entryPoints: ["./src/index.js"],
    bundle: true, // Bundles the code
    outfile: "dist/index.js", // Output bundled file
    format: "iife", // IIFE format (to run directly in the browser)
    globalName: "buildPlugin", // This will be the global variable name
  })
  .catch(() => process.exit(1));
