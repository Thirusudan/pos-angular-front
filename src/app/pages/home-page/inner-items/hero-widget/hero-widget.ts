import { Component, OnInit } from '@angular/core';
import { Stat } from '../../../../dto/stat';


@Component({
  selector: 'app-hero-widget',
  imports: [],
  templateUrl: './hero-widget.html',
  styleUrl: './hero-widget.scss',
})
export class HeroWidget implements OnInit {
 
  /** Drives the animated inventory low-stock bar (0 → 18 on load) */
  barWidth = 0;
 
  stats: Stat[] = [
    { value: '10K+', label: 'Businesses' },
    { value: '$2M+', label: 'Processed'  },
    { value: '99.9%', label: 'Uptime'    },
  ];
 
  chartBars: number[] = [40, 65, 50, 80, 55, 90, 70, 95, 60, 85, 75, 100];
 
  ngOnInit(): void {
    // Animate inventory bar from 0 → 18 on load
    setTimeout(() => (this.barWidth = 18), 300);
  }
 
  onGetStarted(): void {
    console.log('Navigate to sign-up');
  }
 
  onWatchDemo(): void {
    console.log('Open demo modal');
  }
}