export interface Fee {
    calculate(amount: number): number;
}

export class PlatformFee implements Fee {
    calculate(amount: number): number {
        return amount * 0.0585;
    }
}

export class ServiceFee implements Fee {
    calculate(amount: number): number {
        return 30;
    }
}
