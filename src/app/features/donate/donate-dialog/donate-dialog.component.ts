import { Component, OnInit } from '@angular/core';
import {MatLegacyDialogRef as MatDialogRef} from "@angular/material/legacy-dialog";

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
