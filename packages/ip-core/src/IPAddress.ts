export interface IPAddress<SpecificVersion> {
  toString(): string

  isEqual(other: SpecificVersion): boolean
}
