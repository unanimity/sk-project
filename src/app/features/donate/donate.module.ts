import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonateComponent} from "./donate.component";
import {DonateDialogComponent} from "./donate-dialog/donate-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "@angular/material/dialog";



@NgModule({
  declarations: [DonateComponent, DonateDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogModule
  ],
  exports:[DonateComponent]
})
export class DonateModule { }
