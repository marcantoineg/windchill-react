export enum SpeedUnit {
    KPH = "kph",
    MPH = "mph",
}

export const speedUnits = [
    {label: 'km/h', value: SpeedUnit.KPH},
    {label: 'mph', value: SpeedUnit.MPH},
];

export class Speed {
    Value: number;
    Unit: SpeedUnit;

    constructor(v: number, u: SpeedUnit) {
        this.Value = v;
        this.Unit = u;
    }
}