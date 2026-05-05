import { Accommodation } from './Accommodation';

export class Apartment implements Accommodation {
    constructor(private pricePerDay: number) {}

    calculatePrice(days: number): number {
        const condoFee = 50;
        return this.pricePerDay * days + condoFee;
    }
}
