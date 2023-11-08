import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import * as Masonry from 'masonry-layout';

type Photo = {
  imageUrl: string;
  alt: string;
  category: string;
}

type PhotoCategories = Array<String>;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  private grid: Element;
  private masonry: Masonry;

  photos: Array<Photo> = [
    {
      imageUrl: 'assets/img/kai-garden/garden-01.jpg',
      alt: 'Work Garden',
      category: 'Landscape'
    },
    {
      imageUrl: 'assets/img/kai-garden/garden-05.jpg',
      alt: 'Work Garden',
      category: 'Flowers'
    },
    {
      imageUrl: 'assets/img/kai-garden/garden-06.jpg',
      alt: 'Work Garden',
      category: 'Flowers'
    }
  ];

  categories: PhotoCategories = ['All', 'Landscape', 'Flowers'];
  currentCategory = this.categories[0];
  visiblePhotos: Array<Photo> = this.photos;

  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initGrid();
  }

  private initGrid() {
    this.grid = document.querySelector('.photo-grid');
    this.masonry = new Masonry(this.grid, {
      fitWidth: true,
      gutter: 10,
      itemSelector: '.single-work',
      transitionDuration: '0.8s'
    });
    this.resizeContainer();
  }

  private setInternalCategory(category: string) {
    this.currentCategory = category;
    if (category ==='All') {
      this.visiblePhotos = this.photos;
    } else {
      this.visiblePhotos = this.photos.filter(p => p.category === category);
    }
    setTimeout(() => {
      this.initGrid();
    }, 100);
  }

  setCategory(event: MouseEvent, category: string) {
    event.preventDefault();
    this.setInternalCategory('xxx');
    setTimeout(() => {
      this.setInternalCategory(category);
    }, 300);
  }

  resizeContainer() {
    setTimeout(() => {
      this.masonry.layout();
    }, 300);
  }

}
