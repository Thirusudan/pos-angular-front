import { Component } from '@angular/core';
import { Plan } from '../../../../dto/Plan';

@Component({
  selector: 'app-pricing-widget',
  imports: [],
  templateUrl: './pricing-widget.html',
  styleUrl: './pricing-widget.scss',
})
export class PricingWidget {
   isAnnual = false;
 
  plans: Plan[] = [
    {
      icon: '🌱',
      name: 'Starter',
      description: 'Perfect for new businesses',
      monthlyPrice: 29,
      annualPrice: 23,
      cta: 'Start Free Trial',
      featured: false,
      features: [
        { text: '1 Register / Terminal',  included: true  },
        { text: 'Up to 500 products',     included: true  },
        { text: 'Basic sales reports',    included: true  },
        { text: 'Email support',          included: true  },
        { text: 'Multi-branch support',   included: false },
        { text: 'Advanced analytics',     included: false },
        { text: 'Inventory alerts',       included: false },
      ],
    },
    {
      icon: '🚀',
      name: 'Growth',
      description: 'For scaling businesses',
      monthlyPrice: 79,
      annualPrice: 63,
      cta: 'Get Started',
      featured: true,
      features: [
        { text: 'Up to 5 Registers',      included: true  },
        { text: 'Unlimited products',      included: true  },
        { text: 'Advanced analytics',      included: true  },
        { text: 'Priority support',        included: true  },
        { text: 'Multi-branch (up to 3)', included: true  },
        { text: 'Inventory alerts',        included: true  },
        { text: 'Custom branding',         included: false },
      ],
    },
    {
      icon: '🏢',
      name: 'Enterprise',
      description: 'For large-scale operations',
      monthlyPrice: 199,
      annualPrice: 159,
      cta: 'Contact Sales',
      featured: false,
      features: [
        { text: 'Unlimited Registers',    included: true },
        { text: 'Unlimited products',     included: true },
        { text: 'Full analytics suite',   included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'Unlimited branches',     included: true },
        { text: 'Inventory alerts',       included: true },
        { text: 'Custom branding & API',  included: true },
      ],
    },
  ];
 
  toggleBilling(): void {
    this.isAnnual = !this.isAnnual;
  }
 
  onSelectPlan(plan: Plan): void {
    console.log('Selected plan:', plan.name);
  }
}
