// The entry file of your WebAssembly module.


class IPv4 {
  constructor(
    private readonly octet1: u8,
    private readonly octet2: u8,
    private readonly octet3: u8,
    private readonly octet4: u8
  ) {}

  toString(): string {
    return `${this.octet1.toString()}.${this.octet2.toString()}.${this.octet3.toString()}.${this.octet4.toString()}`
  }
};

export function newIPv4(
  octet1: u8,
  octet2: u8,
  octet3: u8,
  octet4: u8
): IPv4 {
  return new IPv4(octet1, octet2, octet3, octet4);
}

export function IPv4ToString(ipv4: IPv4): string {
  return ipv4.toString()
}
