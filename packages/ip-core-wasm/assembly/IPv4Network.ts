import { IPv4Address } from './IPv4Address'

@final
class IPv4Network {
  constructor(
    readonly address: IPv4Address,
    readonly prefixSize: u8
  ) {}
}

export function IPv4Network_constructor(
  address: IPv4Address,
  prefixSize: u8
): IPv4Network {
  return new IPv4Network(address, prefixSize)
}
