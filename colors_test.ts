// Copyright 2023 Chalkpot. All rights reserved. MIT license.

import { assertArrayIncludes, assertEquals } from "./dev_deps.ts";
import { colors as originalColors } from "./colors.ts";
import * as locales from "./locales/mod.ts";

Deno.test("colors have only required fields", async (t) => {
  const requiredFields: string[] = ["name", "hex", "rgb", "localize"];

  // deno-lint-ignore no-explicit-any
  const colors = originalColors as any;

  for (const color in colors) {
    assertArrayIncludes(requiredFields, Object.keys(colors[color]));
  }

  await t.step("color keys match name field", () => {
    for (const color in colors) {
      assertEquals(colors[color]?.name, color, `"colors.${color}.name"`);
    }
  });

  await t.step("HEX start with #", async (t) => {
    for (const color in colors) {
      const hex: string = colors[color]?.hex;
      assertEquals(
        hex,
        `#${hex.replace("#", "")}`,
        `"colors.${color}.hex"`,
      );
    }

    await t.step("HEX length = 7", async (t) => {
      for (const color in colors) {
        assertEquals(
          colors[color]?.hex?.length,
          7,
          `"colors.${color}.hex"`,
        );
      }

      await t.step("HEX correct", () => {
        for (const color in colors) {
          const hex: string = colors[color]?.hex;

          if (!/^#[0-9A-F]{6}$/i.test(hex)) {
            throw Error(
              `"colors.${color}.hex" contains incorrect characters`,
            );
          }
        }
      });
    });
  });

  await t.step("RGB equivalent to HEX", () => {
    function hexToRgb(hex: string): [number, number, number] {
      return [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
      ];
    }

    for (const color in colors) {
      assertEquals(
        hexToRgb(colors[color]?.hex),
        colors[color]?.rgb,
        `"colors.${color}.rgb"`,
      );
    }
  });

  await t.step("localization function correct", () => {
    for (const locale in locales) {
      for (const color in colors) {
        const localeFunction = colors[color]?.localize;

        if (!localeFunction) {
          throw Error(
            `"colors.${color}" does not have a localization function`,
          );
        }

        if (!localeFunction(locale)) {
          throw Error(
            `"${locale}" locale does not contain "${color}" color translation`,
          );
        }
      }
    }
  });

  await t.step("fields are in order", () => {
    for (const color in colors) {
      assertEquals(
        requiredFields,
        Object.keys(colors[color]),
        `"colors.${color}"`,
      );
    }
  });
});

Deno.test("number of colors corresponds to HTML color names", () => {
  assertEquals(Object.keys(originalColors).length, 148);
});
