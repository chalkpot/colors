// Copyright 2023 Chalkpot. All rights reserved. MIT license.

import { assertEquals } from "../../dev_deps.ts";
import { unformatLocaleCode } from "./unformat_locale_code.ts";

Deno.test("regular expression correct", () => {
  assertEquals(unformatLocaleCode("_en-US"), "enUS");
});
