import { Result, Ok, Err } from '@thames/monads';

import * as ip_core_wasm from 'ip-core-wasm'

function validateOctet(octet: number): Result<number, string> {
  return (Number.isInteger(octet) && octet >= 0 && octet < 256) ? Ok(octet) : Err(`Not an octet: ${octet.toString()}`)
}

export class IPv4Address {
  private readonly ref: ip_core_wasm.__Internref4;

  private constructor(
    octet1: number,
    octet2: number,
    octet3: number,
    octet4: number
  ) {
    this.ref = ip_core_wasm.IPv4Address_constructor(octet1, octet2, octet3, octet4);
  }

  public static create(
    octet1: number,
    octet2: number,
    octet3: number,
    octet4: number
  ): Result<IPv4Address, string> {
    const validatedOctets = {
      octet1: validateOctet(octet1),
      octet2: validateOctet(octet2),
      octet3: validateOctet(octet3),
      octet4: validateOctet(octet4)
    };

    const errors = Object.entries(validatedOctets).filter(([_, result]) => result.isErr());

    if (errors.length === 0) return Ok(new IPv4Address(octet1, octet2, octet3, octet4))
    else return Err(JSON.stringify(errors))
  }

  toString(): string {
    return ip_core_wasm.IPv4Address_toString(this.ref)
  }

  isEqual(other: IPv4Address): boolean {
    return ip_core_wasm.IPv4Address_isEqual(this.ref, other.ref)
  }
}

const localhost = IPv4Address.create(127, 0, 0, 1)

localhost.match({
  ok: (addr: IPv4Address) => {
    console.log(addr.toString())
    console.log(addr.isEqual(addr))
    return {}
  },
  err: (err: string) => {
    console.error(err)
    return {}
  }
})
