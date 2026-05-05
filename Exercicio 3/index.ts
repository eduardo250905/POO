import { House } from './domain/House';
import { Apartment } from './domain/Apartment';
import { SharedRoom } from './domain/SharedRoom';
import { PlatformFee, ServiceFee } from './domain/Fee';
import { PricingService } from './application/PricingService';
import { Booking } from './Booking';

const house = new House(200);
const pricingService = new PricingService([
    new PlatformFee(),
    new ServiceFee(),
]);

const booking = new Booking(house, 3, pricingService);

console.log(`Base: ${booking.basePrice}`);
console.log(`Total: ${booking.totalPrice}`);
