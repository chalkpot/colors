// Copyright 2023 mineejo. All rights reserved. MIT license.

export function unformatLocaleCode(code: string): string {
  return code.replace(/[_\W]+/g, "");
}
