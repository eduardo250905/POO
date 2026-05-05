import { Fee } from '../domain/Fee';

export class PricingService {
    constructor(private fees: Fee[]) {}

    applyFees(basePrice: number): number {
        const totalFees = this.fees.reduce(
            (sum, fee) => sum + fee.calculate(basePrice),
            0,
        );

        return basePrice + totalFees;
    }
}
