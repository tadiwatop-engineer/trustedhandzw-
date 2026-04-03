export interface Testimonial {
  id: number;
  name: string;
  location: string;
  country: string;
  flag: string;
  service: string;
  message: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Tendai M.',
    location: 'London, UK',
    country: 'United Kingdom',
    flag: '🇬🇧',
    service: 'Welfare Check',
    rating: 5,
    date: 'March 2025',
    message: 'I was so worried about my mother who lives alone in Harare. TrustedHandZW visited her within 24 hours, sent me photos and a full WhatsApp report. She was so happy to have visitors. I cried with relief. I use them every month now.',
  },
  {
    id: 2,
    name: 'Rutendo K.',
    location: 'Johannesburg, SA',
    country: 'South Africa',
    flag: '🇿🇦',
    service: 'Grocery Delivery',
    rating: 5,
    date: 'February 2025',
    message: 'Sent groceries to my grandmother in Bulawayo. They shopped, delivered, and sent me every single receipt plus photos of the delivery. My gogo was so happy. The team was professional and fast. Highly recommend.',
  },
  {
    id: 3,
    name: 'Farai N.',
    location: 'Toronto, Canada',
    country: 'Canada',
    flag: '🇨🇦',
    service: 'School Fees Payment',
    rating: 5,
    date: 'January 2025',
    message: 'Used TrustedHandZW to pay my nephew\'s school fees in Gweru. They paid, got the official receipt, and WhatsApped it to me within the same day. No stress, no middlemen taking cuts. Will use again.',
  },
  {
    id: 4,
    name: 'Chipo D.',
    location: 'Manchester, UK',
    country: 'United Kingdom',
    flag: '🇬🇧',
    service: 'Hospital Visit',
    rating: 5,
    date: 'December 2024',
    message: 'My father was hospitalised in Harare and I couldn\'t fly back immediately. TrustedHandZW visited him, sat with him, brought him food, and kept me updated throughout. They treated him like family. Forever grateful.',
  },
  {
    id: 5,
    name: 'Blessing T.',
    location: 'Melbourne, Australia',
    country: 'Australia',
    flag: '🇦🇺',
    service: 'Property Check',
    rating: 5,
    date: 'November 2024',
    message: 'I own a property in Harare that I haven\'t been able to visit in two years. TrustedHandZW did a full inspection — photos of every room, the garden, the gate. The report was thorough and professional. Peace of mind is priceless.',
  },
  {
    id: 6,
    name: 'Munashe C.',
    location: 'Dubai, UAE',
    country: 'UAE',
    flag: '🇦🇪',
    service: 'Bill Payments',
    rating: 5,
    date: 'October 2024',
    message: 'Paying ZESA and water bills from Dubai was always a nightmare. TrustedHandZW handles all my bills monthly — they pay, send receipts, and I\'m done. Simple, reliable, and affordable. Best service for the diaspora.',
  },
  {
    id: 7,
    name: 'Nyasha P.',
    location: 'New York, USA',
    country: 'United States',
    flag: '🇺🇸',
    service: 'Funeral Arrangements',
    rating: 5,
    date: 'September 2024',
    message: 'Losing a parent from thousands of miles away is devastating. TrustedHandZW coordinated everything on the ground — the funeral home, transport, and family communication. They were compassionate and efficient at the hardest time of my life.',
  },
  {
    id: 8,
    name: 'Tatenda R.',
    location: 'Cape Town, SA',
    country: 'South Africa',
    flag: '🇿🇦',
    service: 'Document Collection',
    rating: 4,
    date: 'August 2024',
    message: 'Needed important documents collected from a government office in Harare. They handled the queues, got everything stamped and couriered to me in Cape Town. Took a bit longer than expected but they kept me informed throughout.',
  },
];