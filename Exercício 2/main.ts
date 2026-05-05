import { PagamentoService } from './processar-pagamento.ts';
import { CartaoCredito } from './cartao-credito.ts';
import { Paypal } from './paypal.ts';
import { Pix } from './pix.ts';

const service = new PagamentoService();
const pagamento = new Pix();
service.processarPagamento(pagamento, 100);
