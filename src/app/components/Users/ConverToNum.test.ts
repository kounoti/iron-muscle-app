import { expect, test } from "vitest";
import { ConvertToNum } from "./ConvertToNum";

test("数字の文字列の時の検証", () => {
  expect(ConvertToNum("1000")).toBe(1000);
  expect(ConvertToNum("0")).toBe(0);
});

test("数字以外の文字列の時の検証", () => {
  expect(ConvertToNum("kono")).toBe(0);
  expect(ConvertToNum("")).toBe(0);
});
