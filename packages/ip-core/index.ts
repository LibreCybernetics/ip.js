import { IPv4Address } from './src/IPv4Address.ts'

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
