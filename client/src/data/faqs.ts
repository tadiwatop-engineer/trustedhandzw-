export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    category: 'Getting Started',
    question: 'How do I place an order or request a service?',
    answer: 'Simply WhatsApp us on +263 711 410 889 or fill in the Request a Quote form on our website. Tell us what you need, where in Zimbabwe, and we\'ll confirm availability and pricing within a few hours.',
  },
  {
    id: 2,
    category: 'Getting Started',
    question: 'How much do your services cost?',
    answer: 'Our services start from as little as $10 depending on the task. Simple errands like bill payments or welfare checks begin at $10, while more involved tasks like airport pickups or event representation start from $30. Custom tasks are quoted individually — contact us for a personalised quote.',
  },
  {
    id: 3,
    category: 'Getting Started',
    question: 'Which areas of Zimbabwe do you cover?',
    answer: 'We operate nationwide across Zimbabwe, with strong coverage in Harare, Bulawayo, Mutare, Gweru, and surrounding areas. For remote locations, please contact us first so we can confirm availability and any additional travel costs.',
  },
  {
    id: 4,
    category: 'Getting Started',
    question: 'How quickly can you carry out a task?',
    answer: 'Most tasks are carried out within 24–48 hours of confirmation and payment. Urgent tasks can often be accommodated same-day — WhatsApp us directly for urgent requests and we\'ll do our best.',
  },
  {
    id: 5,
    category: 'Trust & Transparency',
    question: 'How do I know the task has actually been completed?',
    answer: 'We send you photo proof and a full WhatsApp update the moment a task is completed. For payments, we always send an official receipt. You will never be left wondering — updates are sent before, during, and after every task.',
  },
  {
    id: 6,
    category: 'Trust & Transparency',
    question: 'What if I\'m not satisfied with the service?',
    answer: 'Your satisfaction is our priority. If you\'re not happy with how a task was handled, contact us immediately via WhatsApp and we will work to resolve it. We have a zero unresolved complaints policy.',
  },
  {
    id: 7,
    category: 'Trust & Transparency',
    question: 'Are your agents vetted and trustworthy?',
    answer: 'Yes. All our on-the-ground operators are personally vetted by our management team. We only work with people we trust — many of whom have been with us since we launched. Your family\'s safety and security is never compromised.',
  },
  {
    id: 8,
    category: 'Trust & Transparency',
    question: 'Will you spend more than the agreed amount?',
    answer: 'Never. We always agree on the cost upfront before carrying out any task. If unexpected costs arise during a job, we will contact you first for approval before spending anything extra.',
  },
  {
    id: 9,
    category: 'Payments',
    question: 'How do I pay for services?',
    answer: 'We accept payments via EcoCash, bank transfer, Mukuru, WorldRemit, and direct USD/ZAR/GBP transfers. Payment is required upfront before we begin any task. We will confirm your preferred payment method when you place your order.',
  },
  {
    id: 10,
    category: 'Payments',
    question: 'Do you offer receipts for payments made on my behalf?',
    answer: 'Yes — always. Every payment we make on your behalf (school fees, bills, groceries, etc.) comes with an official receipt sent directly to you via WhatsApp. This is a core part of our service and non-negotiable.',
  },
  {
    id: 11,
    category: 'Payments',
    question: 'Can I pay in foreign currency?',
    answer: 'Yes. We accept USD, GBP, ZAR, and other major currencies. We will confirm the exchange rate and final amount in your currency when you place your order so there are no surprises.',
  },
  {
    id: 12,
    category: 'Services',
    question: 'Can you handle tasks not listed on your website?',
    answer: 'Absolutely. Our Custom Task service means we\'re open to almost anything reasonable. WhatsApp us with your request and we\'ll let you know within a few hours whether we can help and what it will cost.',
  },
  {
    id: 13,
    category: 'Services',
    question: 'Can you deliver groceries to a specific person at a specific address?',
    answer: 'Yes. Just provide us with the recipient\'s name, address, and a list of items (or a budget). We\'ll shop, deliver, and send you photos of the delivery and a receipt for everything purchased.',
  },
  {
    id: 14,
    category: 'Services',
    question: 'Can you help with funeral arrangements?',
    answer: 'Yes. We understand how difficult it is to manage funeral logistics from abroad. We can coordinate with funeral homes, liaise with family on the ground, arrange transport, and keep you updated throughout. Contact us directly for sensitive matters like this.',
  },
  {
    id: 15,
    category: 'Services',
    question: 'Do you help with business-related tasks?',
    answer: 'Yes. We handle business errands including company registrations, bank runs, document submissions, licensing visits, and more. If your Zimbabwe business needs a reliable local presence, we can help.',
  },
];

export const faqCategories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];