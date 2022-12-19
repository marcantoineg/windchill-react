import { Response } from "../models/response";

export class HttpService {
    protected async getData<T>(url: string = ''): Promise<Response<T>> {
        const response = await fetch(url, {
          method: 'GET',
        });
        return response.json();
    }

    protected async postData<T>(url: string = '', data: any = {}): Promise<Response<T>> {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(data)
        });
        return response.json();
    }
}