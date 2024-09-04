import { describe, it, expect } from "vitest";
import { closest } from "./closest";

describe("closest", () => {
  it("should return 2 for input [-1, 2, 1, -4] with target 1", () => {
    expect(closest([-1, 2, 1, -4], 1)).toBe(2);
  });

  it("should return 0 for input [0, 0, 0] with target 1", () => {
    expect(closest([0, 0, 0], 1)).toBe(0);
  });

  it("should return 6 for input [1, 2, 3, 4] with target 6", () => {
    expect(closest([1, 2, 3, 4], 6)).toBe(6);
  });

  it("should return 8 for input [-1, 2, 1, -4, 5] with target 10", () => {
    expect(closest([-1, 2, 1, -4, 5], 10)).toBe(8);
  });

  it("should return 15 for input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] with target 15", () => {
    expect(closest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)).toBe(15);
  });

  it("should return -6 for input [-5, -3, -2, -1] with target -6", () => {
    expect(closest([-5, -3, -2, -1], -6)).toBe(-6);
  });

  it("should return 3 for input [1, 1, 1, 0] with target 100", () => {
    expect(closest([1, 1, 1, 0], 100)).toBe(3);
  });

  it("should return 0 for input [-1, 2, -3, 4] with target 0", () => {
    expect(closest([-1, 2, -3, 4], 0)).toBe(0);
  });

  it("should return the sum of all elements for input [1, 2, 3] with target 3", () => {
    expect(closest([1, 2, 3], 3)).toBe(6);
  });
});
