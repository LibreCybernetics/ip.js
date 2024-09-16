import { IPAddress } from "./IPAddress";

@final
export class IPv4Address implements IPAddress<IPv4Address> {
  readonly address: u32;

  constructor(
    octet1: u8,
    octet2: u8,
    octet3: u8,
    octet4: u8
  ) {
    this.address = (u32(octet1) << 24) + (u32(octet2) << 16) +
      (u32(octet3) << 8) + u32(octet4)
  }

  toString(): string {
    const octet1: u8 = (this.address >> 24) as u8
    const octet2: u8 = (this.address >> 16) as u8
    const octet3: u8 = (this.address >> 8) as u8
    const octet4: u8 = (this.address) as u8

    return `${octet1.toString()}.${octet2.toString()}.${octet3.toString()}.${octet4.toString()}`
  }

  isEqual(other: IPv4Address): boolean {
    return this.address == other.address
  }
}

export function IPv4Address_constructor(
  octet1: u8,
  octet2: u8,
  octet3: u8,
  octet4: u8
): IPv4Address {
  return new IPv4Address(octet1, octet2, octet3, octet4);
}

export function IPv4Address_toString(ipv4: IPv4Address): string {
  return ipv4.toString()
}

export function IPv4Address_isEqual(a: IPv4Address, b: IPv4Address): boolean {
  return a.isEqual(b)
}
