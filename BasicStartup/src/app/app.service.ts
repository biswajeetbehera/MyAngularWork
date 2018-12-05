export class AppService {
    private _username: string[] = [
        'uday',
        'roshan'
    ];
    get username() {
        return this._username.slice();
    }
}
