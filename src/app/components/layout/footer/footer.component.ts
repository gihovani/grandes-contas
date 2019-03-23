import {Component, OnInit} from '@angular/core';
import {BannerService} from '../../../services/banner.service';
import {Banner} from '../../../models/banner';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  slideConfig = {
    slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true, autoplay: true,
    nextArrow: '<span class="nextArrow">›</span>',
    prevArrow: '<span class="prevArrow">‹</span>'
  };
  banners: Banner[] = null;

  constructor(private bannerHttp: BannerService) {
  }

  ngOnInit() {
    this.bannerHttp.list().subscribe(banners => this.banners = banners);
  }

}
