import { Component, OnInit } from '@angular/core';
import {DonateDialogComponent} from "./donate-dialog/donate-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    console.log('dd')
    this.dialog.open(DonateDialogComponent, {
      maxWidth: '600px',
      minWidth: '250px',
      maxHeight: '80%',
      minHeight: '445px',
    });
  }
}
