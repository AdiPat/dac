import { DomainAvailabilityStatus } from "../models";
const whois = require("whois");

export class DoT {
  async getDomainAvailabilityStatus(
    domain: string
  ): Promise<DomainAvailabilityStatus> {
    const whoisData = await this.lookupWhois(domain);
    return this.isDomainAvailable(whoisData)
      ? DomainAvailabilityStatus.AVAILABLE
      : DomainAvailabilityStatus.NOT_AVAILABLE;
  }

  private lookupWhois(domain: string): Promise<string> {
    return new Promise((resolve, reject) => {
      whois.lookup(domain, (err: any, data: any) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }

  private isDomainAvailable(whoisData: string): boolean {
    return !(
      this.whoIsHasCreationDate(whoisData) &&
      this.whoIsHasRegistryDomainId(whoisData) &&
      this.whoIsHasRegistrar(whoisData) &&
      this.whoIsHasDomainName(whoisData)
    );
  }

  private hasFieldInWhoIsData(whoisData: string, field: string): boolean {
    return whoisData.includes(field);
  }

  private whoIsHasDomainName(whoisData: string): boolean {
    return this.hasFieldInWhoIsData(whoisData, "Domain Name:");
  }

  private whoIsHasRegistrar(whoisData: string): boolean {
    return this.hasFieldInWhoIsData(whoisData, "Registrar:");
  }

  private whoIsHasCreationDate(whoisData: string): boolean {
    return this.hasFieldInWhoIsData(whoisData, "Creation Date:");
  }

  private whoIsHasRegistryDomainId(whoisData: string): boolean {
    return this.hasFieldInWhoIsData(whoisData, "Registry Domain ID:");
  }
}
