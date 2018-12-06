export class CounterService {
    counter = 0;
    increment() {
        console.log(this.counter++);
    }
}
