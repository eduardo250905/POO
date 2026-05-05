import type { FormaPagamento } from './interface';

export class Bitcoin implements FormaPagamento {
    processar(amount: number): void {
        console.log(`Processing bitcoin payment of $${amount}`);
    }
}
