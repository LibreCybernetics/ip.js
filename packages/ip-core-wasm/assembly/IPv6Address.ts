import { IPAddress } from "./IPAddress.ts";

@final
export class IPv6Address implements IPAddress<IPv6Address> {
    readonly address1: u64;
    readonly address2: u64;

    constructor(
        hextet1: u16,
        hextet2: u16,
        hextet3: u16,
        hextet4: u16,
        hextet5: u16,
        hextet6: u16,
        hextet7: u16,
        hextet8: u16
    ) {
        this.address1 = (u64(hextet1) << 48) + (u64(hextet2) << 32) +
            (u64(hextet3) << 16) + u64(hextet4)
        this.address2 = (u64(hextet5) << 48) + (u64(hextet6) << 32) +
            (u64(hextet7) << 16) + u64(hextet8)
    }

    toString(): string {
        const hextet1: u16 = (this.address1 >> 48) as u16
        const hextet2: u16 = (this.address1 >> 32) as u16
        const hextet3: u16 = (this.address1 >> 16) as u16
        const hextet4: u16 = (this.address1) as u16
        const hextet5: u16 = (this.address2 >> 48) as u16
        const hextet6: u16 = (this.address2 >> 32) as u16
        const hextet7: u16 = (this.address2 >> 16) as u16
        const hextet8: u16 = (this.address2) as u16

        return `${hextet1.toString(16)}:${hextet2.toString(16)}:${hextet3.toString(16)}:${hextet4.toString(16)}` +
            `:${hextet5.toString(16)}:${hextet6.toString(16)}:${hextet7.toString(16)}:${hextet8.toString(16)}`
    }

    isEqual(other: IPv6Address): boolean {
        return this.address1 == other.address1 && this.address2 == other.address2
    }
}

export function IPv6Address_constructor(
    hextet1: u16,
    hextet2: u16,
    hextet3: u16,
    hextet4: u16,
    hextet5: u16,
    hextet6: u16,
    hextet7: u16,
    hextet8: u16
): IPv6Address {
    return new IPv6Address(hextet1, hextet2, hextet3, hextet4, hextet5, hextet6, hextet7, hextet8);
}

export function IPv6Address_toString(ipv6: IPv6Address): string {
    return ipv6.toString()
}

export function IPv6Address_isEqual(a: IPv6Address, b: IPv6Address): boolean {
    return a.isEqual(b)
}