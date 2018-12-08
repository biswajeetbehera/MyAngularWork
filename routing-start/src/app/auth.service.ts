export class AuthService {
    loggedIn = false;

    LogIn() {
        this.loggedIn = true;
    }

    LogOut() {
        this.loggedIn = false;
    }

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });

        return promise;
    }
}
