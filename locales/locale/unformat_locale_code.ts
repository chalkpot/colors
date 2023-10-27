// Copyright 2023 Chalkpot. All rights reserved. MIT license.

export function unformatLocaleCode(code: string): string {
  return code.replace(/[_\W]+/g, "");
}
