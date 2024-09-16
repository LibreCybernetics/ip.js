import { IPNetwork } from "./IPNetwork.ts";
import { IPv6Address } from './IPv6Address'

@final
export class IPv6Network implements IPNetwork<IPv6Network> {
    constructor(
        readonly address: IPv6Address,
        readonly prefixSize: u8
    ) {}

    toString(): string {
        return `${this.address.toString()}/${this.prefixSize}`
    }

    isEqual(other: IPv6Network): boolean {
        const samePrefix = this.prefixSize == other.prefixSize;
        const thisMasked1 = this.address.address1 >> min(64 - this.prefixSize, 0);
        const otherMasked1 = other.address.address1 >> min(64 - other.prefixSize, 0);
        const thisMasked2 = this.address.address2 >> max(128 - this.prefixSize, 64);
        const otherMasked2 = other.address.address2 >> max(128 - other.prefixSize, 64);

        return samePrefix && thisMasked1 == otherMasked1 && thisMasked2 == otherMasked2;
    }

    isSubnetOf(other: IPv6Network): boolean {
        const isSubnetPrefix = this.prefixSize < other.prefixSize;
        const thisMasked1 = this.address.address1 >> min(64 - this.prefixSize, 0);
        const otherMasked1 = other.address.address1 >> min(64 - other.prefixSize, 0);
        const thisMasked2 = this.address.address2 >> max(128 - this.prefixSize, 64);
        const otherMasked2 = other.address.address2 >> max(128 - other.prefixSize, 64);

        return isSubnetPrefix && thisMasked1 == otherMasked1 && thisMasked2 == otherMasked2;
    }
}

export function IPv6Network_constructor(
    address: IPv6Address,
    prefixSize: u8
): IPv6Network {
    return new IPv6Network(address, prefixSize)
}

export function IPv6Network_toString(network: IPv6Network): string {
    return network.toString()
}

export function IPv6Network_isEqual(a: IPv6Network, b: IPv6Network): boolean {
    return a.isEqual(b)
}

export function IPv6Network_isSubnetOf(a: IPv6Network, b: IPv6Network): boolean {
    return a.isSubnetOf(b)
}