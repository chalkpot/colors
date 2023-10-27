// Copyright 2023 Chalkpot. All rights reserved. MIT license.

import { assertEquals } from "./dev_deps.ts";
import { basicColors } from "./basic_colors.ts";

Deno.test("color keys match name field", () => {
  // deno-lint-ignore no-explicit-any
  const colors = basicColors as any;

  for (const color in colors) {
    assertEquals(colors[color]?.name, color, `"basicColors.${color}.name"`);
  }
});
