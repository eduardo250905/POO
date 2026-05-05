import { Accommodation } from './Accommodation';

export class SharedRoom implements Accommodation {
    constructor(private pricePerDay: number) {}

    calculatePrice(days: number): number {
        return this.pricePerDay * days;
    }
}
