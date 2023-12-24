import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DonateComponent} from "./donate.component";
import {DonateDialogComponent} from "./donate-dialog/donate-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";





@NgModule({
  declarations: [DonateComponent, DonateDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
  ],
  exports:[DonateComponent]
})
export class DonateModule { }
