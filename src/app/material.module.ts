import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

@NgModule({
  imports: [MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  exports: [MatButtonModule,
    MatFormFieldModule,
    MatInputModule],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})

export class MaterialModule { }
