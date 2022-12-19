export class Response<T> {
    status: number;
    message: string;
    data: T;

    constructor(s: number, m: string, d: T) {
        this.status = s;
        this.message = m;
        this.data = d;
    }
}