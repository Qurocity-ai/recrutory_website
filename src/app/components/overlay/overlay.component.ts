import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-overlay',
    templateUrl: './overlay.component.html',
    styleUrl: './overlay.component.css'
})


export class OverlayComponent {
    @ViewChild('scrollingWrapper') scrollingWrapper!: ElementRef;
    colors: string[] = ['#FF5733', '#33FFA8', '#3355FF', '#FF33E9', '#FFE333'];
  
    constructor(public dialogRef: MatDialogRef<OverlayComponent>) {}
  
    onVerticalScroll(event: WheelEvent) {
      const scrollingWrapperElement = this.scrollingWrapper.nativeElement as HTMLElement;
      if (event.deltaY > 0) {
        scrollingWrapperElement.scrollLeft += 100; // Adjust the scroll distance as needed
      } else {
        scrollingWrapperElement.scrollLeft -= 100; // Adjust the scroll distance as needed
      }
      event.preventDefault();
    }

    onClose(): void {
      this.dialogRef.close();
    }

}