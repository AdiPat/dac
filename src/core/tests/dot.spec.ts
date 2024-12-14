import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { DoT } from "../dot";
import { DomainAvailabilityStatus } from "../../models";

describe("DoT", () => {
  let dot: DoT;

  beforeEach(() => {
    dot = new DoT();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("getDomainAvailabilityStatus", () => {
    it.each(["test.shop", "helloglobal.co", "helloworld.one"])(
      "returns 'AVAILABLE' for a domain (%s) that is available",
      async (domain) => {
        const result = await dot.getDomainAvailabilityStatus(domain);
        expect(result).toBe(DomainAvailabilityStatus.AVAILABLE);
      }
    );

    it.each(["google.com", "amazon.in", "meta.com", "socket.io", "tech.org"])(
      "returns 'NOT_AVAILABLE' for a domain (%s) that is not available",
      async (domain) => {
        const result = await dot.getDomainAvailabilityStatus(domain);
        expect(result).toBe(DomainAvailabilityStatus.NOT_AVAILABLE);
      }
    );
  });
});
