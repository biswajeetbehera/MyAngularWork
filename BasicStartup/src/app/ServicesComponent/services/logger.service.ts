export class LoggerService {
    log(message: string) {
        console.log('A server status changed, new status: ' + message);
    }
}
