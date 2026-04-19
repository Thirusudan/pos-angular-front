import { Feature } from "./Feature";

export interface Plan {
  icon: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: Feature[];
  cta: string;
  featured: boolean;
}