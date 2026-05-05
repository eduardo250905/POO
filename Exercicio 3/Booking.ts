import { Accommodation } from './domain/Accommodation';
import { PricingService } from './application/PricingService';

export class Booking {
    basePrice: number;
    totalPrice: number;

    constructor(
        private accomodation: Accommodation,
        private days: number,
        private pricingService: PricingService,
    ) {
        this.basePrice = this.accomodation.calculatePrice(days);
        this.totalPrice = this.pricingService.applyFees(this.basePrice);
    }
}
