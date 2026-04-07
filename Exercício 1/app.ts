import { Book } from './book';
import { BookItem } from './book-item';
import { Member } from './member';
import { Library } from './library';

const livro1 = new Book('54321', 'Andrzej Sapkowski', 'Tempo de desprezo');
const copia1l1 = new BookItem('42432', livro1);
const copia2l1 = new BookItem('38290', livro1);
const membro = new Member('84392', 'Eduardo', 'PREMIUM');
const biblioteca = new Library();

biblioteca.addBookItem(copia1l1);
console.log(
    `Adicionado cópia do livro: ${copia1l1.book.title} de ${copia1l1.book.author}`,
);
biblioteca.addBookItem(copia2l1);
console.log(
    `Adicionando cópia do livro: ${copia2l1.book.title} de ${copia1l1.book.author}`,
);

const emprestimo1 = biblioteca.borrowBook('54321', membro);
console.log(
    `Empréstimo realizado do livro ${emprestimo1.bookItem.book.title}. Status do livro: ${emprestimo1.bookItem.status}`,
);
biblioteca.returnBook(emprestimo1);
console.log(
    `Livro ${emprestimo1.bookItem.book.title} devolvido. Status do livro: ${emprestimo1.bookItem.status}`,
);

const livro2 = new Book(
    '28203',
    'Machado de Assis',
    'Memórias Póstumas de Brás Cubas',
);

const livro3 = new Book(
    '10234',
    'Lewis Carroll',
    'As Aventuras de Alice no País das Maravilhas',
);

const livro4 = new Book('75204', 'William Shakespeare', 'Rei Lear');

const copia1l2 = new BookItem('20132', livro2);
const copia1l3 = new BookItem('03253', livro3);
const copia1l4 = new BookItem('48392', livro4);

biblioteca.addBookItem(copia1l2);
biblioteca.addBookItem(copia1l3);
biblioteca.addBookItem(copia1l4);

// Parte 1
// biblioteca.borrowBook('54321', membro);
// biblioteca.borrowBook('28203', membro);
// biblioteca.borrowBook('10234', membro);
// biblioteca.borrowBook('75204', membro);

// console.log(membro.getLoans());
