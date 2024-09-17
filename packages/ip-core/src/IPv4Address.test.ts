import { test, fc } from '@fast-check/jest';
import { expect } from '@jest/globals';
import { IPv4Address } from "./IPv4Address";

test.prop({
    octets: fc.uint8Array({minLength: 4, maxLength: 4})
})('valid octets shouldn\'t error', ({ octets }) => {
    const ip = IPv4Address.create(octets[0], octets[1], octets[2], octets[3]);
    expect(ip.isOk()).toBe(true);
});

test.prop({
    octets: fc
        .int16Array({minLength: 4, maxLength: 4})
        .filter( (octets) =>
            octets[0] < 0 || octets[0] > 255 || octets[1] < 0 || octets[1] > 255 ||
            octets[2] < 0 || octets[2] > 255 || octets[3] < 0 || octets[3] > 255
        )
})('invalid octets should error', ({ octets }) => {
    const ip = IPv4Address.create(octets[0], octets[1], octets[2], octets[3]);
    expect(ip.isErr()).toBe(true);
});
