import { IPNetwork } from "./IPNetwork.ts";
import { IPv4Address } from './IPv4Address'

@final
class IPv4Network implements IPNetwork<IPv4Network>{
  constructor(
    readonly address: IPv4Address,
    readonly prefixSize: u8
  ) {}

    toString(): string {
        return `${this.address.toString()}/${this.prefixSize}`
    }

    isEqual(other: IPv4Network): boolean {
      const samePrefix = this.prefixSize == other.prefixSize;
      const thisMasked  = this.address.address >> (32 - this.prefixSize);
      const otherMasked = other.address.address >> (32 - other.prefixSize);

      return samePrefix && thisMasked == otherMasked;
    }

    isSubnetOf(other: IPv4Network): boolean {
      const isSubnetPrefix = this.prefixSize < other.prefixSize;
      const thisMasked  = this.address.address >> (32 - this.prefixSize);
      const otherMasked = other.address.address >> (32 - other.prefixSize);

      return isSubnetPrefix && thisMasked == otherMasked;
    }
}

export function IPv4Network_constructor(
  address: IPv4Address,
  prefixSize: u8
): IPv4Network {
  return new IPv4Network(address, prefixSize)
}

export function IPv4Network_toString(network: IPv4Network): string {
  return network.toString()
}

export function IPv4Network_isEqual(a: IPv4Network, b: IPv4Network): boolean {
  return a.isEqual(b)
}

export function IPv4Network_isSubnetOf(a: IPv4Network, b: IPv4Network): boolean {
  return a.isSubnetOf(b)
}