import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';

// 1st, 2nd and 3rd select options
interface Lang {
  name: string;
  value: string;
}



@Component({
  selector: 'app-candidateform',
  templateUrl: './candidateform.component.html',
  styleUrl: './candidateform.component.css'
})
export class CandidateformComponent  implements OnInit{


  // 1st required value select option
  animalControl = new FormControl<Lang | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Lang[] = [
    {name: 'English', value: 'English'},
    {name: 'German', value: 'German'},
    {name: 'Spanish', value: 'Spanish'},
    {name: 'French', value: 'French'},
    {name: 'Japanese', value: 'Japanese'},
    {name: 'Mandarin', value: 'Mandarin'},
    {name: 'Portuguese', value: 'Portuguese'},
    {name: 'Dutch', value: 'Dutch'},
    {name: 'Korean', value: 'Korean'},
    {name: 'ISL', value: 'ISL'},
  ];

  formData: FormData = new FormData();


  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourFormGroup!: FormGroup;
  fiveFormGroup!: FormGroup;
  // formData: any;
  firstNext:boolean = false;
  secondNext:boolean = false;
  thirdNext:boolean = false;
  fourthNext:boolean = false;

  @ViewChild(MatStepper) stepper!: MatStepper;

  constructor(private _formBuilder: FormBuilder, public candidate: CandidateService, private _snackBar: MatSnackBar,public router:Router, ) {}



  ngOnInit(): void {
    
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      contactno: ['', Validators.required],
      email: ['', Validators.required],
      location: ['', Validators.required],
      companyName: ['', Validators.required],
      currRole: ['', Validators.required],
      lang1: ['', Validators.required],
      lang2:[''],
      lang3:[''],
      langKnow: [''],
      langQuali: ['', Validators.required],
      otherlangQuali: ['', Validators.required],
      proficiency: ['', Validators.required],
      formalAssesment: ['', Validators.required],
      otherPlatform: ['', Validators.required],
      ProficiencyResult: ['', Validators.required],
      dialects: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      supdatedLanguage: ['', Validators.required],
        sWorkshop: ['', Validators.required],
        sLangCommunity: ['', Validators.required],
        sLiterature: ['', Validators.required],
        sLangIntoWork: ['', Validators.required],
        sMethodLang: ['', Validators.required],
        sgramm: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      tTools: ['', Validators.required],
      totherTools: ['', Validators.required],
        tTranslation: ['', Validators.required],
        tdictionaries: ['', Validators.required],
        tdevelopedTool: ['', Validators.required],
        tgeneOutput: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      fproficient: ['', Validators.required],
        fFormalTrainer: ['', Validators.required],
        fworkExample: ['', Validators.required],
    });
    this.fiveFormGroup = this._formBuilder.group({
        fiInterpretation: ['', Validators.required],
        fichallenges: ['', Validators.required],
        fiLanguageSkills: ['', Validators.required],
    });
  }


  // toggling horizontal to vertical stepper
  // isVertical: boolean = false;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.formData.append('uploadPhoto', file);
    }
  }

  appendFormDataFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control && control.value != null) { // Ensure the control exists and has a non-null value
        if (control.value instanceof File) {
          this.formData.append(key, control.value, control.value.name); // Handle file data specially
        } else {
          this.formData.append(key, control.value); // Append non-file data as normal
        }
      }
    });
  }







  isLinear = false;

  candidateSubmit(){
    this.appendFormDataFields(this.firstFormGroup);
    this.appendFormDataFields(this.secondFormGroup);
    this.appendFormDataFields(this.thirdFormGroup);
    this.appendFormDataFields(this.fourFormGroup);
    this.appendFormDataFields(this.fiveFormGroup);
   
      if(this.formData.has('uploadPhoto')){
        const config = new MatSnackBarConfig();
            config.duration = 1000;
            config.verticalPosition = 'top';
            config.panelClass = ['custom-snackbar'];
            this._snackBar.open('Form Submitted Successfully', 'Close', config);
            setTimeout(() => {
              this.router.navigate(['']);
            }, 1500);
   
        this.candidate.candidateForm(this.formData).subscribe({
          next: (val: any) => {
            this._snackBar.open('Form Submitted Successfully', 'Close', {
              duration: 3000,
            });
            window.location.reload();
          },
          error: (err: any) => {
            console.log(err);
          }
        })
      }
      else{
        const config = new MatSnackBarConfig();
        config.duration = 1000;
        config.verticalPosition = 'top';
        config.panelClass = ['custom-snackbar'];
        this._snackBar.open('Please fill the form', 'Close', config);
      }
   
    }
  
  checkData1(){
    if(this.firstFormGroup.valid){
      this.firstNext = true;
      this.stepper.next();
      console.log("In first")
      // matStepperNext
    }else{
      const config = new MatSnackBarConfig();
      config.duration = 1000;
      config.verticalPosition = 'top'; 
      config.panelClass = ['custom-snackbar']; 
      this._snackBar.open('Please fill the current section', 'Close', config);
    }
  }
  checkData2(){
    if(this.secondFormGroup.valid){
      this.secondNext = true;
      this.stepper.next();
      // matStepperNext
    }else{
      const config = new MatSnackBarConfig();
      config.duration = 1000;
      config.verticalPosition = 'top'; 
      config.panelClass = ['custom-snackbar']; 
      this._snackBar.open('Please fill the current section', 'Close', config);
    }
  }
  checkData3(){
    if(this.thirdFormGroup.valid){
      this.thirdNext = true;
      this.stepper.next();
      // matStepperNext
    }else{
      const config = new MatSnackBarConfig();
      config.duration = 1000;
      config.verticalPosition = 'top'; 
      config.panelClass = ['custom-snackbar']; 
      this._snackBar.open('Please fill the current section', 'Close', config);
    }
  }
  checkData4(){
    if(this.fourFormGroup.valid){
      this.fourthNext = true;
      this.stepper.next();
      // matStepperNext
    }else{
      const config = new MatSnackBarConfig();
      config.duration = 1000;
      config.verticalPosition = 'top'; 
      config.panelClass = ['custom-snackbar']; 
      this._snackBar.open('Please fill the current section', 'Close', config);
    }
  }
  


}












  // onSubmit(){
  //   console.log(this.candidateForm.value)
  //   this.candidate.candidateForm(this.candidateForm.value).subscribe({
  //     next: (response) =>{
  //       this._snackBar.open('form successfully!', 'Close', {
  //         duration: 2000,
  //       });
  //     },
  //     error: (error) => { 
  //       console.log(error);
  //     }
  //   })
  // }