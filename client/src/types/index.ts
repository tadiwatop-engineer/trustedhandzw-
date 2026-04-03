export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  rating: number;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}