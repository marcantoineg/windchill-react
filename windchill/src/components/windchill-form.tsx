import * as React from "react";
import Select from "react-select";
import { Speed, speedUnits } from "../models/speed";
import { Temperature, temperatureUnits } from "../models/temperature";
import { WindchillHttpService } from "../services/windchill-http-service";
import * as styles from "./windchill-form.module.css";

export class WindchillForm extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            windSpeed: 0.0,
            windSpeedUnit: speedUnits[0],
            temp: 0.0,
            tempUnit: temperatureUnits[0],
            windchillIndex: null
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSpeedUnitChange = this.handleSpeedUnitChange.bind(this);
        this.handleTempUnitChange = this.handleTempUnitChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render(): React.ReactNode {
        return (
            <div className={styles.container}>
                <form onSubmit={this.onSubmit} className={styles.formContainer} >
                    <div className={styles.unitContainer} >
                        <label className={styles.inputLabel} >Temperature:</label>
                        <input name="temp" type="number" value={this.state.temp} onChange={this.handleInputChange} className={styles.numericalInput} step={0.1} />
                        <Select options={temperatureUnits} value={this.state.tempUnit} onChange={this.handleTempUnitChange} className={styles.unitSelect} />
                    </div>

                    <div className={styles.unitContainer} >
                        <label className={styles.inputLabel}>Wind speed:</label>
                        <input name="windSpeed" type="number" value={this.state.windSpeed} onChange={this.handleInputChange} className={styles.numericalInput} min={0} />
                        <Select options={speedUnits} value={this.state.windSpeedUnit} onChange={this.handleSpeedUnitChange} className={styles.unitSelect} />
                    </div>

                    <button className={styles.submitButton} >get windchill index</button>
                </form>
                
                { this.state.windchillIndex != null ? (
                    <div className={styles.windchillIndexContainer}>
                        <label className={styles.windchillIndexLabel}>Windchill index:</label>
                        <p className={styles.windchillIndexValue}><span>{this.state.windchillIndex.Value.toFixed(2)}</span> <span className={styles.windchillIndexUnit}>˚{this.state.windchillIndex.Unit}</span></p>
                    </div>
                ) : '' }
            </div>
        )
    }

    private handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;

        if (!isNaN(value)) {
            this.setState({ [name]: Number(value) });
        }
    }

    private handleSpeedUnitChange(event: string) {
        this.setState({ 'windSpeedUnit': event })
    }

    private handleTempUnitChange(event: string) {
        this.setState({ 'tempUnit': event })
    }
    
    private onSubmit(event: any) {
        event.preventDefault();
    
        WindchillHttpService.instance().getWindchillIndex(
            new Temperature(this.state.temp, this.state.tempUnit.value),
            new Speed(this.state.windSpeed, this.state.windSpeedUnit.value)
        ).then((wci) => {
            this.setState({ 'windchillIndex': wci });
        });

        console.log('state:');
        console.log(this.state);
    }
}