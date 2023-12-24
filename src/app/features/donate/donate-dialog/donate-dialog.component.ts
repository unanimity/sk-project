import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-donate-dialog',
  templateUrl: './donate-dialog.component.html',
  styleUrls: ['./donate-dialog.component.scss']
})
export class DonateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DonateDialogComponent>) {}

  ngOnInit(): void {
  }

}
