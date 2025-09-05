import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";

expect.extend(matchers);
afterEach(() => cleanup());

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

import "fake-indexeddb/auto";

if (!("createObjectURL" in URL)) {
  // @ts-expect-error jsdom
  URL.createObjectURL = vi.fn(
    () => `blob:mock-${Math.random().toString(36).slice(2)}`,
  );
}
if (!("revokeObjectURL" in URL)) {
  // @ts-expect-error jsdom
  URL.revokeObjectURL = vi.fn();
}

import { apiMock } from "@/mocks/apiMock";
apiMock();
