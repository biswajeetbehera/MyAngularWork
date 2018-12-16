export class ServerHttp {
    public id: number;
    constructor (public name: string, public capacity: number) {
        this.id = this.generateId();
    }

    private generateId() {
        return Math.round(Math.random() * 10000);
    }
}
