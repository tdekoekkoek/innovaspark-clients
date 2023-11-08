import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';

export interface Slide {
	titleClass?: string;
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

	mainLogoUrl = '/assets/img/logo/logo-main.png';

	slides: Array<Slide> = [
		{
			caption: '',
			title: `<img src="${this.mainLogoUrl}" class="logo-main"/>`,
			titleClass: 'logo-slide-container',
			description: 'Custom Gardens and Landscaping',
			link: 'contact',
			imageUrl: 'assets/img/garden-images/garden-1.jpg'
		},
		{
			caption: 'Intimate Gardens',
			title: '<h1>The Kai <span>Garden Co.</span></h1>',
			description: 'Gardens, layout, planting, designing',
			link: 'contact',
			imageUrl: 'assets/img/garden-images/garden-2.jpg'
		},
		{
			caption: 'Intimate Gardens',
			title: '<h1>The Kai <span>Garden Co.</span></h1>',
			description: 'Gardens, layout, planting, designing',
			link: 'contact',
			imageUrl: 'assets/img/garden-images/garden-3.jpg'
		}
	]

	slides1: Array<Slide> = [
		{
			caption: '',
			title: `<img src="${this.mainLogoUrl}" class="logo-main"/>`,
			titleClass: 'logo-slide-container',
			description: 'Custom Gardens and Landscaping',
			link: 'contact',
			imageUrl: 'assets/img/garden-images/garden-1.jpg'
		},
		// {
		// 	caption: 'Intimate Gardens',
		// 	title: '<h1>The Kai <span>Garden Co.</span></h1>',
		// 	description: 'Gardens, layout, planting, designing',
		// 	link: 'contact',
		// 	imageUrl: 'assets/img/kai-garden/garden-01.jpg'
		// },
		// {
		// 	caption: 'Intimate Gardens',
		// 	title: '<h1>The Kai <span>Garden Co.</span></h1>',
		// 	description: 'Gardens, layout, planting, designing',
		// 	link: 'contact',
		// 	imageUrl: 'assets/img/kai-garden/garden-02.jpg'
		// },
		{
			caption: 'Intimate Gardens',
			title: '<h1>The Kai <span>Garden Co.</span></h1>',
			description: 'Gardens, layout, planting, designing',
			link: 'contact',
			imageUrl: 'assets/img/kai-garden/garden-03.jpg'
		},
		{
			caption: 'Intimate Gardens',
			title: '<h1>The Kai <span>Garden Co.</span></h1>',
			description: 'Gardens, layout, planting, designing',
			link: 'contact',
			imageUrl: 'assets/img/kai-garden/garden-04.jpg'
		},
		{
			caption: 'Intimate Gardens',
			title: '<h1>The Kai <span>Garden Co.</span></h1>',
			description: 'Gardens, layout, planting, designing',
			link: 'contact',
			imageUrl: 'assets/img/kai-garden/garden-05.jpg'
		},
		{
			caption: 'Intimate Gardens',
			title: '<h1>The Kai <span>Garden Co.</span></h1>',
			description: 'Gardens, layout, planting, designing',
			link: 'contact',
			imageUrl: 'assets/img/kai-garden/garden-06.jpg'
		},
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
