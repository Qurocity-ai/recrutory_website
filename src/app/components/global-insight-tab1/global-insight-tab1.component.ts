import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-global-insight-tab1',
  templateUrl: './global-insight-tab1.component.html',
  styleUrls: ['./global-insight-tab1.component.css'],
})
export class GlobalInsightTab1Component {

	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
















// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-global-insight-tab1',
//   templateUrl: './global-insight-tab1.component.html',
//   styleUrls: ['./global-insight-tab1.component.css'],
// })
// export class GlobalInsightTab1Component implements OnInit {
//   slides: NodeListOf<HTMLElement> | null = null;
//   currentIndex: number = 0;

//   ngOnInit(): void {
//     this.slides = document.querySelectorAll(".carousel__slide") as NodeListOf<HTMLElement>;
//     if (this.slides?.length) {
//       this.showSlide(this.currentIndex);

//       // Automatically slide the carousel every few seconds
//       setInterval(() => {
//         this.currentIndex = (this.currentIndex === this.slides!.length - 1) ? 0 : this.currentIndex + 1;
//         this.showSlide(this.currentIndex);
//       }, 5000); // Change the interval time (in milliseconds) as needed
//     }
//   }

//   showSlide(index: number): void {
//     this.slides?.forEach(slide => {
//       slide.classList.remove("current-slide");
//     });
//     this.slides?.[index]?.classList.add("current-slide");
//   }

//   nextSlide(): void {
//     if (this.slides) {
//       this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
//       this.showSlide(this.currentIndex);
//     }
//   }

//   prevSlide(): void {
//     if (this.slides) {
//       this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
//       this.showSlide(this.currentIndex);
//     }
//   }
// }










  // ngOnInit(): void {
  //   const track = document.querySelector('.carousel__track') as HTMLElement; //ul
  //   const slides = Array.from(track.children) as HTMLElement[]; //li items
  //   const nextButton = document.querySelector(
  //     '.carousel__button--right'
  //   ) as HTMLButtonElement;
  //   const prevButton = document.querySelector(
  //     '.carousel__button--left'
  //   ) as HTMLButtonElement;
  //   const dotsNav = document.querySelector('.carousel__nav') as HTMLElement;
  //   const dots = Array.from(dotsNav.children) as HTMLElement[];


  //   const slideWidth = slides[0].getBoundingClientRect().width + 10;
  //   const setSlidePosition = (slide: HTMLElement, index: number) => {
  //     slide.style.left = slideWidth * index + 'em';
  //   };
  //   slides.forEach(setSlidePosition);

  //   const moveToSlide = (
  //     track: HTMLElement,
  //     currentSlide: HTMLElement,
  //     targetSlide: HTMLElement
  //   ) => {
  //     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  //     currentSlide.classList.remove('current-slide');
  //     targetSlide.classList.add('current-slide');
  //   };

  //   const hideShowArrows = (
  //     slides: HTMLElement[],
  //     prevButton: HTMLButtonElement,
  //     nextButton: HTMLButtonElement,
  //     targetIndex: number
  //   ) => {
  //     console.log('Entered into hideshowarrows');
  //     if (targetIndex === 0) {
  //       prevButton.classList.add('is-hidden');
  //       nextButton.classList.remove('is-hidden');
  //     } else if (targetIndex === slides.length - 1) {
  //       prevButton.classList.remove('is-hidden');
  //       nextButton.classList.add('is-hidden');
  //     } else {
  //       prevButton.classList.remove('is-hidden');
  //       nextButton.classList.remove('is-hidden');
  //     }
  //   };

  //   const updateDots = (currentDot: HTMLElement, targetDot: HTMLElement) => {
  //     currentDot.classList.remove('current-slide');
  //     targetDot.classList.add('current-slide');
  //   };

  //   nextButton.addEventListener('click', () => {
  //     const currentSlide = track.querySelector('.current-slide') as HTMLElement;
  //     const nextSlide = currentSlide.nextElementSibling as HTMLElement;
  //     const currentDot = dotsNav.querySelector('.current-slide') as HTMLElement;
  //     const nextDot = currentDot.nextElementSibling as HTMLElement;
  //     const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  //     moveToSlide(track, currentSlide, nextSlide);
  //     updateDots(currentDot, nextDot);
  //     hideShowArrows(slides, prevButton, nextButton, nextIndex);
  //   });

  //   prevButton.addEventListener('click', () => {
  //     const currentSlide = track.querySelector('.current-slide') as HTMLElement;
  //     const prevSlide = currentSlide.previousElementSibling as HTMLElement;
  //     const currentDot = dotsNav.querySelector('.current-slide') as HTMLElement;
  //     const prevDot = currentDot.previousElementSibling as HTMLElement;
  //     const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  //     moveToSlide(track, currentSlide, prevSlide);
  //     updateDots(currentDot, prevDot);
  //     hideShowArrows(slides, prevButton, nextButton, prevIndex);
  //   });

  //   dotsNav.addEventListener('click', (e) => {
  //     if (!(e.target instanceof HTMLElement)) return; // Check if e.target is an HTMLElement
  //     const targetDot = e.target.closest('button') as HTMLElement | null;
  //     if (!targetDot) return;
  //     const currentSlide = track.querySelector('.current-slide') as HTMLElement;
  //     const currentDot = dotsNav.querySelector('.current-slide') as HTMLElement;
  //     const targetIndex = dots.findIndex((dot) => dot === targetDot);
  //     const targetSlide = slides[targetIndex];
  //     moveToSlide(track, currentSlide, targetSlide);
  //     updateDots(currentDot, targetDot);
  //     hideShowArrows(slides, prevButton, nextButton, targetIndex);
  //   });
  // }


