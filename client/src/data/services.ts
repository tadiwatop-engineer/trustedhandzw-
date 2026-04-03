import type { Service } from '../types';

export type ServiceCategory = 'All' | 'Welfare' | 'Errands' | 'Payments' | 'Property' | 'Custom';

export interface ServiceWithCategory extends Service {
  category: ServiceCategory;
}

export const services: ServiceWithCategory[] = [
  { id: 1,  title: 'Welfare Check',         category: 'Welfare',  description: 'We visit your loved one, confirm their wellbeing, and send you a full WhatsApp report with photos.',        price: 'From $10', icon: '👤' },
  { id: 2,  title: 'Hospital Visit',         category: 'Welfare',  description: 'We visit your loved one in hospital, provide companionship, and report back with photos and updates.',      price: 'From $20', icon: '🏥' },
  { id: 3,  title: 'Social Welfare Support', category: 'Welfare',  description: 'We liaise with social services on behalf of vulnerable family members who need assistance.',               price: 'From $20', icon: '🤝' },
  { id: 4,  title: 'Event Representation',   category: 'Welfare',  description: 'We attend events — funerals, graduations, weddings — on your behalf and provide a full update.',           price: 'From $30', icon: '🎖️' },
  { id: 5,  title: 'Grocery Delivery',       category: 'Errands',  description: 'We shop for and deliver groceries to your family anywhere in Zimbabwe.',                                    price: 'From $15', icon: '🛒' },
  { id: 6,  title: 'Medication Delivery',    category: 'Errands',  description: 'We collect prescriptions and deliver medication directly to your loved one\'s door.',                      price: 'From $15', icon: '💊' },
  { id: 7,  title: 'Gift Delivery',          category: 'Errands',  description: 'We purchase and hand-deliver gifts to your loved ones with a personalised message from you.',              price: 'From $20', icon: '🎁' },
  { id: 8,  title: 'Document Collection',    category: 'Errands',  description: 'We collect and courier important documents on your behalf anywhere in Zimbabwe.',                          price: 'From $15', icon: '📁' },
  { id: 9,  title: 'Airport Pickup',         category: 'Errands',  description: 'We arrange and confirm reliable transport for your family members from any major airport.',                price: 'From $30', icon: '✈️' },
  { id: 10, title: 'Bill Payments',          category: 'Payments', description: 'ZESA, water, DStv, school fees — we pay your bills and send you the receipts.',                           price: 'From $10', icon: '📄' },
  { id: 11, title: 'School Fees Payment',    category: 'Payments', description: 'We pay school fees directly to the institution and send you an official receipt.',                        price: 'From $10', icon: '🎓' },
  { id: 12, title: 'Business Errands',       category: 'Payments', description: 'Company registrations, bank runs, licensing — we handle your Zimbabwe business admin.',                   price: 'From $20', icon: '💼' },
  { id: 13, title: 'Property Check',         category: 'Property', description: 'We inspect your property, document its condition, and send a full photo report.',                         price: 'From $25', icon: '🏠' },
  { id: 14, title: 'Home Maintenance',       category: 'Property', description: 'We coordinate trusted tradespeople for repairs and maintenance at your property.',                        price: 'From $25', icon: '🔧' },
  { id: 15, title: 'Funeral Arrangements',   category: 'Property', description: 'We coordinate and support funeral logistics so your family is not alone during difficult times.',          price: 'Custom',   icon: '🕊️' },
  { id: 16, title: 'Custom Task',            category: 'Custom',   description: 'Have something specific in mind? Tell us what you need and we\'ll make it happen.',                       price: 'Custom',   icon: '⚙️' },
];

export const featuredServices = services.slice(0, 6);

export const categories: ServiceCategory[] = ['All', 'Welfare', 'Errands', 'Payments', 'Property', 'Custom'];