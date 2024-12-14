import axios, { AxiosError } from "axios";

export class DoT {
  async isDomainAvailable(domain: string): Promise<boolean> {
    return await axios
      .head(`https://${domain}`)
      .then(() => false)
      .catch((error: AxiosError) => this.parseErrorAndGetAvailability(error));
  }

  private parseErrorAndGetAvailability(error: AxiosError): boolean {
    if (this.domainExistsWithServerError(error)) {
      return false;
    }

    if (this.domainDoesNotExist(error)) {
      return true;
    }

    throw new Error(error.message);
  }

  private domainExistsWithServerError(error: AxiosError): boolean {
    return Boolean(error.response);
  }

  private domainDoesNotExist(error: AxiosError): boolean {
    return error.code === "ENOTFOUND";
  }
}
