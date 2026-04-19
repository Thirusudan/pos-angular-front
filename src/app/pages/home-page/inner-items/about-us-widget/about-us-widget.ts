import { Component } from '@angular/core';
import { TeamMember } from '../../../../dto/teammember';
import { Value } from '../../../../dto/value';

@Component({
  selector: 'app-about-us-widget',
  imports: [],
  templateUrl: './about-us-widget.html',
  styleUrl: './about-us-widget.scss',
})
export class AboutUsWidget {
  values: Value[] = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      desc: 'Process transactions in under 2 seconds. No lag, no freezes, no lost sales.',
    },
    {
      icon: '🔒',
      title: 'Bank-Grade Security',
      desc: 'PCI DSS compliant with end-to-end encryption on every payment.',
    },
    {
      icon: '📊',
      title: 'Real-Time Insights',
      desc: 'Live dashboards that give you the data you need, exactly when you need it.',
    },
    {
      icon: '🌐',
      title: 'Cloud Synced',
      desc: 'Access your business data from anywhere, on any device, at any time.',
    },
  ];
 
  team: TeamMember[] = [
    { name: 'Alice Fernando',  initials: 'AF' },
    { name: 'Banu Perera',     initials: 'BP' },
    { name: 'Chamath Silva',   initials: 'CS' },
    { name: 'Dilani Mendis',   initials: 'DM' },
    { name: 'Eranga Jayasin',  initials: 'EJ' },
    { name: 'Fathima Rizwan',  initials: 'FR' },
  ];
 
  onMeetTeam(): void {
    console.log('Navigate to team page');
  }
}
