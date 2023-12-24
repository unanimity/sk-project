import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DonateDialogComponent} from "./donate-dialog/donate-dialog.component";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DonateDialogComponent, {
      width: '250px',
    });
  }
}
