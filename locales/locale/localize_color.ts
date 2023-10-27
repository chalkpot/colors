// Copyright 2023 Chalkpot. All rights reserved. MIT license.

import * as locales from "../mod.ts";
import { unformatLocaleCode } from "./unformat_locale_code.ts";

export function localizeColor(
  colorName: string,
  localeCode: string,
): string | undefined {
  localeCode = unformatLocaleCode(localeCode).toLowerCase();
  // deno-lint-ignore no-explicit-any
  return (locales as any)?.[localeCode]?.[colorName];
}
