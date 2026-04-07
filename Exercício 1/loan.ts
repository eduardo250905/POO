import { BookItem } from './book-item';
import { Member } from './member';

export class Loan {
    returnedAt?: Date;

    constructor(
        public bookItem: BookItem,
        public member: Member,
        public borrowedAt: Date,
        public dueDate: Date,
    ) {}

    returnBook(date: Date) {
        this.returnedAt = date;
        this.bookItem.markAsAvailable();
    }

    isLate(currentDate: Date): boolean {
        return currentDate > this.dueDate && !this.returnedAt;
    }
}
