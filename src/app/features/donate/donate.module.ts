import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonateComponent} from "./donate.component";
import {DonateDialogComponent} from "./donate-dialog/donate-dialog.component";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {
  MatLegacyDialogActions as MatDialogActions,
  MatLegacyDialogClose as MatDialogClose,
  MatLegacyDialogContent as MatDialogContent,
  MatLegacyDialogModule as MatDialogModule,
  MatLegacyDialogTitle as MatDialogTitle
} from "@angular/material/legacy-dialog";



@NgModule({
  declarations: [DonateComponent, DonateDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogModule
  ],
  exports:[DonateComponent]
})
export class DonateModule { }
