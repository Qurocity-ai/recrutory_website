import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateformComponent } from './components/candidateform/candidateform.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { CompanyComponent } from './components/company/company.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SingleBlogComponent } from './components/single-blog/single-blog.component';
import { MeetTheTeamComponent } from './components/meet-the-team/meet-the-team.component';
import { GlobalInsightsComponent } from './components/global-insights/global-insights.component';
import { Verbi1Component } from './components/verbi1/verbi1.component';
import { Verbi2Component } from './components/verbi2/verbi2.component';
import { VerbiDemoComponent } from './components/verbi-demo/verbi-demo.component';
import { GlobalInsightsTab2Component } from './components/global-insights-tab2/global-insights-tab2.component';
import { GlobalInsightTab1Component } from './components/global-insight-tab1/global-insight-tab1.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'candidate',
    component: CandidateformComponent
  },
  {
    path: 'overlay',
    component: OverlayComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'blogs/:id',
    component: SingleBlogComponent
  },
  {
    path: 'team',
    component: MeetTheTeamComponent
  },
  {
    path: 'verbi1',
    component: Verbi1Component
  },
  {
    path: 'verbi2',
    component: Verbi2Component
  },
  {
    path: 'verbiq',
    component: VerbiDemoComponent
  },
  {
    path: 'insights',
    component: GlobalInsightsComponent
  },
  {
    path: 'trends',
    component: GlobalInsightTab1Component
  },
  {
    path: 'industries',
    component: GlobalInsightsTab2Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
