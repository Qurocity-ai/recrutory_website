import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateformComponent } from './components/candidateform/candidateform.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CompanyComponent } from './components/company/company.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatSelectModule} from '@angular/material/select';
import {NgIf} from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormBuilder, Validators} from '@angular/forms';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons'
import { GlobalInsightsComponent } from './components/global-insights/global-insights.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Verbi1Component } from './components/verbi1/verbi1.component';
import { Verbi2Component } from './components/verbi2/verbi2.component';
import { VerbiDemoComponent } from './components/verbi-demo/verbi-demo.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GlobalInsightsTab2Component } from './components/global-insights-tab2/global-insights-tab2.component';
import { GlobalInsightTab1Component } from './components/global-insight-tab1/global-insight-tab1.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CandidateformComponent,
    OverlayComponent,
    CompanyComponent,
    BlogsComponent,
    SingleBlogComponent,
    MeetTheTeamComponent,
    GlobalInsightsComponent,
    Verbi1Component,
    Verbi2Component,
    VerbiDemoComponent,
    GlobalInsightsTab2Component,
    GlobalInsightTab1Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    NgFor, 
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    NgIf,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
    MatProgressSpinnerModule,
    SlickCarouselModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
