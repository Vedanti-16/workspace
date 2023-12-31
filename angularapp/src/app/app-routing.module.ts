import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetFormComponent } from './get-form/get-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { PostEmpComponent } from './post-emp/post-emp.component';
import { GetempbyidComponent } from './getempbyid/getempbyid.component';


const routes: Routes = [
  // {path:'',component:GetFormComponent},
  {path:'editlink/:employeeId',component:EditFormComponent},
  {path:'deletelink/:employeeId',component:DeleteEmpComponent},
  {path:'addemplink',component:PostEmpComponent},
  {path:'getbyid/:employeeId',component:GetempbyidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
