import { Ok, Err } from '@thames/monads';
import * as ip_core_wasm from 'ip-core-wasm';
function validateOctet(octet) {
    return (Number.isInteger(octet) && octet >= 0 && octet < 256) ? Ok(octet) : Err(`Not an octet: ${octet.toString()}`);
}
export class IPv4Address {
    ref;
    constructor(octet1, octet2, octet3, octet4) {
        this.ref = ip_core_wasm.IPv4Address_constructor(octet1, octet2, octet3, octet4);
    }
    static create(octet1, octet2, octet3, octet4) {
        const validatedOctets = {
            octet1: validateOctet(octet1),
            octet2: validateOctet(octet2),
            octet3: validateOctet(octet3),
            octet4: validateOctet(octet4)
        };
        const errors = Object.entries(validatedOctets).filter(([_, result]) => result.isErr());
        if (errors.length === 0)
            return Ok(new IPv4Address(octet1, octet2, octet3, octet4));
        else
            return Err(JSON.stringify(errors));
    }
    toString() {
        return ip_core_wasm.IPv4Address_toString(this.ref);
    }
    isEqual(other) {
        return ip_core_wasm.IPv4Address_isEqual(this.ref, other.ref);
    }
}
