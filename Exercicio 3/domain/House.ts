import { Accommodation } from './Accommodation';

export class House implements Accommodation {
    constructor(private pricePerDay: number) {}

    calculatePrice(days: number): number {
        const cleaningFee = 100;
        return this.pricePerDay * days + cleaningFee;
    }
}
