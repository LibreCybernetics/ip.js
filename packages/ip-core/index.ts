import * as ip_core_wasm from 'ip-core-wasm'

export type IPv4Error = "Octets must be [0, "

export class IPv4 {
  ref: ip_core_wasm.__Internref4;

  private constructor(
    octet1: number,
    octet2: number,
    octet3: number,
    octet4: number
  ) {
    this.ref = ip_core_wasm.newIPv4(octet1, octet2, octet3, octet4);
  }

  public static create(
    octet1: number,
    octet2: number,
    octet3: number,
    octet4: number
  ): IPv4 {
    return new IPv4(octet1, octet2, octet3, octet4)
  }

  toString(): string { return ip_core_wasm.IPv4ToString(this.ref); }
}

const localhost = IPv4.create(127, 0, 0, 1);
console.log(localhost.toString());
