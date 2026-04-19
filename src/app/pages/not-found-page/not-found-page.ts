import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelpItem } from '../../dto/HelpItem';

@Component({
  selector: 'app-not-found-page',
  imports: [],
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.scss',
})
export class NotFoundPage {
  helpItems: HelpItem[] = [
    { icon: '🏠', label: 'Home',      route: '/'          },
    { icon: '💰', label: 'Pricing',   route: '/#pricing'  },
    { icon: '🏪', label: 'About Us',  route: '/#about'    },
    { icon: '📊', label: 'Dashboard', route: '/dashboard' },
  ];
 
  constructor(private router: Router) {}
 
  goHome(): void {
    this.router.navigate(['/']);
  }
 
  goDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
 
  onHelpClick(route: string): void {
    this.router.navigateByUrl(route);
  }
}
