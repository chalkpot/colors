// Copyright 2023 Chalkpot. All rights reserved. MIT license.

import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

const outDir = "./.npm";

await emptyDir(outDir);

await build({
  entryPoints: ["./mod.ts"],
  outDir: outDir,
  shims: {
    deno: true,
  },
  test: true,
  package: {
    name: "@chalkpot/colors",
    version: Deno.args[0],
    description:
      "Colors is JSON with the names of colors, their values and localization. Colors\n" +
      "are based on HTML color names and CSS keywords.",
    author: "mineejo",
    license: "MIT",
    homepage: "https://github.com/chalkpot/colors#readme",
    repository: {
      type: "git",
      url: "git+https://github.com/chalkpot/colors.git",
    },
    bugs: {
      url: "https://github.com/chalkpot/colors/issues",
    },
    keywords: [
      "chalkpot",
      "colors",
      "html",
      "css",
      "keywords",
    ],
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", `${outDir}/LICENSE`);
    Deno.copyFileSync("README.md", `${outDir}/README.md`);
  },
});
