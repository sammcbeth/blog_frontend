import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorAdminComponent } from './author-admin.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [AuthorAdminComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthorAdminModule { }
