import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionComponent } from './pages/user/instruction/instruction.component';
import { StartComponent } from './pages/user/start/start.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { AdminSignUpComponent } from './pages/signup/admin-sign-up/admin-sign-up.component';
import { UserSignUpComponent } from './pages/signup/user-sign-up/user-sign-up.component';

const routes: Routes = [
  
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'user-signup',
    component:UserSignUpComponent,
    pathMatch:'full',
  },
  {
    path:'admin-signup',
    component:AdminSignUpComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component: DashboardComponent,
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-category',
        component:AddCategoriesComponent,
      },
      {
        path:'quizzes',
        component:ViewQuizesComponent,
      },
      {
        path:'add-quiz',
        component:AddQuizComponent,
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent,
      },
      {
        path:'view-question/:qid/:title',
        component:ViewQuizQuestionsComponent,
      },
      {
        path:'add-question/:qid/:title',
        component:AddQuestionComponent,
      },
      {
        path:'question/:quesid',
        component:UpdateQuestionComponent,
      },
      

    ],
    
     canActivate:[adminGuard],
    
    
  },
  {
    path:'user-dashboard',
    component : UserDashboardComponent,
    
    canActivate:[normalGuard],
    children:[
      {
        path:':catId',
        component:LoadQuizComponent,
      },
      {
        path:':instructions/:qid',
        component:InstructionComponent,
      },
      

    ]
  },
  {
    canActivate:[normalGuard],
    path:'start/:qid',
    component:StartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
