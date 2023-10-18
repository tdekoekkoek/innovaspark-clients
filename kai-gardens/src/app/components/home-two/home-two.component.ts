import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';

export interface Slide {
	link: string;
	description: string;
	title: string;
	caption: string;
	imageUrl: string;
}

@Component({
    selector: 'app-home-two',
    templateUrl: './home-two.component.html',
    styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {

	slides: Array<Slide> = [
		{
			caption: '',
			title: '<h1>Kai <span>Gardens</span></h1>',
			description: 'Custom Gardens and Landscaping',
			link: 'work',
			imageUrl: 'assets/img/garden-images/garden-1.jpg'
		},
		{
			caption: 'Intimate Gardens',
			title: '<h1>Kai <span>Gardens</span></h1>',
			description: 'Gardens, layout, planting, designing',
			link: 'work',
			imageUrl: 'assets/img/garden-images/garden-2.jpg'
		}
	]

    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
    }

    homeSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: false,
		items: 1,
		autoHeight: true,
		// smartSpeed: 1250,
		autoplay: true,
		autoplaySpeed: 1500,
		autoplayTimeout: 8000,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		]
    }

}
