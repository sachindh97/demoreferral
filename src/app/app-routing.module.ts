import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'add-form',component:AddFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
