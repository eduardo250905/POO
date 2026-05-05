import type { FormaPagamento } from './interface';

export class Pix implements FormaPagamento {
    processar(amount: number): void {
        console.log(`Processing Pix payment of $${amount}`);
    }
}
