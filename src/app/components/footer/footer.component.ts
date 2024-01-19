import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {


constructor(private router: Router, private viewportScroller: ViewportScroller) {}

scrollToTop() {
  const targetElement = document.getElementById('banner1');

  if (targetElement) {
    const targetPosition = targetElement.offsetTop;
    const currentPosition = this.viewportScroller.getScrollPosition()[1];

    const distance = targetPosition - currentPosition;
    const startTime = performance.now();
    const duration = 1000;

    function scrollStep(timestamp: number) {
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, currentPosition + distance * progress);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(scrollStep);
      }
    }

    window.requestAnimationFrame(scrollStep);
  }
}

mostraPannello: boolean = false;

mostraPannelloCookie() {
  this.mostraPannello = !this.mostraPannello;
}

essentialCookies: boolean = true;
analyticsCookies: boolean = false;

salvaImpostazioni() {
  // Aggiungi qui la logica per salvare le impostazioni dei cookie
  console.log('Impostazioni cookie salvate');
}

}
