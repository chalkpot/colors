// Copyright 2023 Chalkpot. All rights reserved. MIT license.

import { assertEquals } from "../../dev_deps.ts";
import { localizeColor } from "./localize_color.ts";

Deno.test("localization function correct", () => {
  assertEquals(localizeColor("darkblue", "en-US"), "dark blue");
});
