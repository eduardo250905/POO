import type { FormaPagamento } from './interface';

export class PagamentoService {
    processarPagamento(forma: FormaPagamento, amount: number): void {
        forma.processar(amount);
    }
}
