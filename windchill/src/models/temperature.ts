export enum TemperatureUnit {
    Celsius = "C",
    Farenheit = "F",
    Kelvin = "K",
}

export const temperatureUnits = [
    {label: '°C', value: TemperatureUnit.Celsius},
    {label: '°F', value: TemperatureUnit.Farenheit},
    {label: '°K', value: TemperatureUnit.Kelvin},
];

export class Temperature {
    Value: number;
    Unit: TemperatureUnit;

    constructor(v: number, u: TemperatureUnit) {
        this.Value = v;
        this.Unit = u;
    }
}