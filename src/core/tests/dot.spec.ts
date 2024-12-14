import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { DoT } from "../dot";

describe("DoT", () => {
  let dot: DoT;

  beforeEach(() => {
    dot = new DoT();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("isDomainAvailable", () => {
    it("is defined", () => {
      expect(dot.isDomainAvailable).toBeDefined();
    });

    it("accepts a domain string and returns a boolean", async () => {
      const result = await dot.isDomainAvailable("example.com");
      expect(typeof result).toBe("boolean");
    });

    it.each([
      "somerandomdomainthatisavailable.com",
      "zizihihi.com",
      "samplah.io",
      "anarbitrarylongdomainthatisavailable.org",
      "youreavailable.net",
    ])("returns true for a domain (%s) that is available", async (domain) => {
      const result = await dot.isDomainAvailable(domain);
      expect(result).toBe(true);
    });

    it.each(["google.com", "amazon.in", "meta.com", "socket.io", "tech.org"])(
      "returns true for a domain (%s) that is available",
      async (domain) => {
        const result = await dot.isDomainAvailable(domain);
        expect(result).toBe(false);
      }
    );
  });
});
