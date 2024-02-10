import { describe, it, expect } from "vitest";

import carrouselImageHandler from ".";

describe("carrouselImageHandler Unit Test Suites", () => {
  const ITEMS = [0, 1, 2, 3];

  it("should return something", () => {
    expect(carrouselImageHandler(ITEMS.length, 1, "next")).toBeDefined();
  });

  it("should return a number", () => {
    expect(typeof carrouselImageHandler(ITEMS.length, 0, "next")).toBe(
      "number"
    );
  });

  it("should return the next index - 1 if currentIndex is 0", () => {
    expect(carrouselImageHandler(ITEMS.length, 0, "next")).toBe(1);
  });

  it("should return the previous index - 2 if currentIndex is 3", () => {
    expect(carrouselImageHandler(ITEMS.length, 3, "previous")).toBe(2);
  });

  it("should return the start index if the array is at the end", () => {
    expect(carrouselImageHandler(ITEMS.length, 3, "next")).toBe(0);
  });

  it("should return the the end infex if the array is at the beginning", () => {
    expect(carrouselImageHandler(ITEMS.length, 0, "previous")).toBe(3);
  });
});
