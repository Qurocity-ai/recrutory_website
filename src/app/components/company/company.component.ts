import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { CandidateService } from '../../services/candidate.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


interface Fruit {
  name: string;
}


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {

  name: string = '';
  contactno: string = '';
  companyName: string = '';
  email: string = '';
  language: string[] = [];
  additionalLanguage: any ;
  location: string = '';
  compensationBand: string = '';
  workingMode: string = '';
  roleType: string = '';
  hiringTimeline: string = '';
  communicationChannel: string = '';
  employementType: string = '';
  appointmentDate: Date = new Date();
  appointmentTime: string ='';
  
  // button for visibility
  showChipList = false;

// button for shwoing meeting box
meetOpen = false;
showMeeting(){
  this.meetOpen = !this.meetOpen;
}



// slots for meeting


isMeetingScheduled: boolean = false;

  scheduleMeeting() {
    this.isMeetingScheduled = true;
  }



// isMeetingScheduled: boolean = false;

//   constructor(private candidate: CandidateService) {}

//   async scheduleMeeting() {
//     // Simulating scheduling of the meeting
//     // Here, you can put your actual scheduling logic

//     // Call email service to send email
//     try {
//       await this.candidate.sendEmail();

//       // After email is sent, set the flag to true
//       this.isMeetingScheduled = true;
//     } catch (error) {
//       console.error('Failed to send email:', error);
//     }
//   }

// for input-grid to add new languages
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];
  announcer: any;
  selected: any;

 
  onDateSelected(selectedDate: Date) {
    this.selected = selectedDate;
  }
 

  constructor(public candidate: CandidateService, private _snackBar: MatSnackBar,public router:Router) { }


  ngOnInit(): void {
  }

  toggleChipList() {
    this.showChipList = !this.showChipList
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }



  // submit button function
  onSubmit() {
    const data = {
      name: this.name,
      contactno: this.contactno,
      companyName: this.companyName,
      email: this.email,
      language: this.language,
      additionalLanguage: this.fruits,
      location: this.location,
      compensationBand: this.compensationBand,
      workingMode: this.workingMode,
      roleType: this.roleType,
      hiringTimeline: this.hiringTimeline,
      communicationChannel: this.communicationChannel,
      employementType: this.employementType,
    }
    if(data.compensationBand){
      const config = new MatSnackBarConfig();
          config.duration = 1000;
          config.verticalPosition = 'top'; 
          config.panelClass = ['custom-snackbar']; 
          this._snackBar.open('Form Submitted Successfully', 'Close', config);
          setTimeout(() => {
            this.router.navigate(['']);
          }, 1500);

      this.candidate.companyForm(data).subscribe({
        next: (val: any) => {
          this._snackBar.open('Form Submitted Successfully', 'Close', {
            duration: 3000,
          });
          window.location.reload();
        },
        error: (err: any) => {
          
        }
      })
    }
    else{
      const config = new MatSnackBarConfig();
      config.duration = 1000;
      config.verticalPosition = 'top'; 
      config.panelClass = ['custom-snackbar']; 
      this._snackBar.open('Please Fill The Form', 'Close', config);
    }

  }







}


