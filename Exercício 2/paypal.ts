import type { FormaPagamento } from './interface';

export class Paypal implements FormaPagamento {
    processar(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}
