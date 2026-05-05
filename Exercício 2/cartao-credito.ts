import type { FormaPagamento } from './interface';

export class CartaoCredito implements FormaPagamento {
    processar(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}
