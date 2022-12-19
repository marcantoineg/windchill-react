import type { Speed } from "../models/speed";
import { Temperature, TemperatureUnit } from "../models/temperature";
import { HttpService } from "./http-service";

export class WindchillHttpService extends HttpService {
    private readonly url: string = "http://localhost:1313/windchill";

    private static m_instance: WindchillHttpService | null = null;

    static instance(): WindchillHttpService {
        if (WindchillHttpService.m_instance == null) {
            WindchillHttpService.m_instance = new WindchillHttpService();
        }
        return WindchillHttpService.m_instance;
    }
    
    public async getWindchillIndex(temp: Temperature, windSpeed: Speed): Promise<Temperature> {
        return this.postData<Temperature>(
            this.url,
            { temperature: temp, windSpeed: windSpeed },
        ).then((res) => {
            console.log('http answer:')
            console.log(res);
            return res.data;
        });
    }
}