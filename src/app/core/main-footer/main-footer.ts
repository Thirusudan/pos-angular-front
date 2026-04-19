import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Social } from '../../dto/Social';
import { FooterColumn } from '../../dto/FooterColumn';
import { ContactItem } from '../../dto/contactitem';
import { NavLink } from '../../dto/NavLink';


@Component({
  selector: 'app-main-footer',
  imports: [FormsModule],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.scss',
})
export class MainFooter {
   currentYear = new Date().getFullYear();
  email = '';
  subscribed = false;
  inputFocused = false;
 
  socials: Social[] = [
    { icon: '𝕏',  label: 'Twitter / X', href: '#' },
    { icon: 'in', label: 'LinkedIn',     href: '#' },
    { icon: '▶',  label: 'YouTube',      href: '#' },
    { icon: '💬', label: 'Discord',      href: '#' },
  ];
 
  columns: FooterColumn[] = [
    {
      heading: 'Product',
      links: [
        { label: 'Features',     href: '#' },
        { label: 'Pricing',      href: '#' },
        { label: 'Integrations', href: '#' },
        { label: 'Changelog',    href: '#' },
        { label: 'Roadmap',      href: '#' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us',  href: '#' },
        { label: 'Careers',   href: '#' },
        { label: 'Blog',      href: '#' },
        { label: 'Press Kit', href: '#' },
        { label: 'Contact',   href: '#' },
      ],
    },
  ];
 
  contactItems: ContactItem[] = [
    { icon: '📍', label: '123 Commerce St, Colombo 03' },
    { icon: '📞', label: '+94 11 234 5678'             },
    { icon: '✉️', label: 'hello@swiftpos.lk'           },
  ];
 
  bottomLinks: NavLink[] = [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy',    href: '#' },
  ];
 
  subscribe(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(this.email)) {
      this.subscribed = true;
    }
  }
}
