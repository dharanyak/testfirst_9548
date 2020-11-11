import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestscreenComponent } from './testscreen.component';

@NgModule({
  imports: [
  CommonModule,
RouterModule,
FormsModule,
ReactiveFormsModule,
RouterModule.forChild([
            {path: '', component: TestscreenComponent}
          ])
],
  declarations: [
  TestscreenComponent
]
  
})
export class TestscreenModule { }