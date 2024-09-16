export interface IPNetwork<SpecificVersion> {
    toString(): string;

    isEqual(other: SpecificVersion): boolean;
    isSubnetOf(other: SpecificVersion): boolean;
}