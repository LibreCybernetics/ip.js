export interface IPAddress<SpecificVersion> {
    toString(): string;

    isEqual(other: IPAddress<SpecificVersion>): boolean;
}