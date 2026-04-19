import { Component } from '@angular/core';
import { PricingWidget } from "./inner-items/pricing-widget/pricing-widget";
import { AboutUsWidget } from "./inner-items/about-us-widget/about-us-widget";
import { HeroWidget } from "./inner-items/hero-widget/hero-widget";

@Component({
  selector: 'app-home-page',
  imports: [PricingWidget, AboutUsWidget, HeroWidget],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
