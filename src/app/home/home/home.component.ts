import { Component, HostListener, OnInit } from '@angular/core';
import { faArrowUp, faHeart } from '@fortawesome/free-solid-svg-icons';

declare var $:any;


@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ngOnInit() {
  $('#spanYear').text(new Date().getFullYear());
}

  title = 'GHS';
  isShow!: boolean;
  faArrowUp = faArrowUp;
  faHeart = faHeart
  topPosToStartShowing = 200;


  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
  } else {
    this.isShow = false;
  }

}

gotoTop() {
  window.scroll({ 
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });
}

}
