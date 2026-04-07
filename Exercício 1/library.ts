import { BookItem } from './book-item';
import { Loan } from './loan';
import { Member } from './member';

export class Library {
    bookItems: BookItem[] = [];
    loans: Loan[] = [];

    addBookItem(item: BookItem) {
        this.bookItems.push(item);
    }

    borrowBook(bookId: string, member: Member): Loan {
        if (!member.canBorrow()) {
            throw new Error('Member is blocked');
        }

        if (member.getLoans().length >= 3) {
            throw new Error("Member can't borrow more than 3 books");
        }

        const copies = this.bookItems.filter((bi) => bi.book.id === bookId);

        if (copies.length === 0) {
            throw new Error(
                'Library does not contain a book item for this title',
            );
        }

        const availableCopy = copies.find((c) => c.isAvailable());

        if (!availableCopy) {
            throw new Error('No available copy');
        }

        const now = new Date();
        const dueDate = new Date(now);
        if (member.type === 'REGULAR') {
            dueDate.setDate(dueDate.getDate() + 14);
        } else {
            dueDate.setDate(dueDate.getDate() + 30);
        }

        const loan = new Loan(availableCopy, member, now, dueDate);

        availableCopy.markAsLoaned();
        member.addLoan(loan);
        this.loans.push(loan);

        return loan;
    }

    returnBook(loan: Loan) {
        const now = new Date();

        loan.returnBook(now);
        loan.member.removeLoan(loan);

        if (now > loan.dueDate) {
            const daysLate = Math.ceil(
                (now.getTime() - loan.dueDate.getTime()) /
                    (1000 * 60 * 60 * 24),
            );

            if (loan.member.type === 'REGULAR') {
                const blockUntil = new Date(now);
                blockUntil.setDate(blockUntil.getDate() + daysLate);
                loan.member.blockUntil(blockUntil);
            } else if (loan.member.type === 'PREMIUM' && daysLate > 3) {
                const blockUntil = new Date(now);
                blockUntil.setDate(blockUntil.getDate() + daysLate - 3);
                loan.member.blockUntil(blockUntil);
            }
        }
    }
}
