import { Component } from '@angular/core';
import { MaterialModule } from '../material-module';
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { logo } from '../../shared/globals'
@Component({
  selector: 'app-header',
  imports: [MaterialModule, RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
mobileMenuOpen = false;
logo = logo;
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  constructor(private router: Router) {}
   navigateToFragment(fragment: string) {
    if (this.router.url.startsWith('/home')) {
      // Already on home, manually scroll
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home with fragment
      this.router.navigate(['/home'], { fragment });
    }
    this.mobileMenuOpen = false; // Close mobile menu if open
  }

    navigateToHome() {
    if (this.router.url.startsWith('/home')) {
      // ✅ Already on home page → just scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // ✅ Navigate to home route
      this.router.navigate(['/home']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
        this.mobileMenuOpen = false; // Close mobile menu if open
  }
}
