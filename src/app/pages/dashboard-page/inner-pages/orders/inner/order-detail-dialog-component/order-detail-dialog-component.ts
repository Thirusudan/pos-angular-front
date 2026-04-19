import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Order } from '../../../../../../dto/Order';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe, DatePipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-order-detail-dialog-component',
  imports: [MatIcon, DatePipe, CurrencyPipe, NgForOf],
  templateUrl: './order-detail-dialog-component.html',
  styleUrl: './order-detail-dialog-component.scss',
})
export class OrderDetailDialogComponent {
   constructor(
    private dialogRef: MatDialogRef<OrderDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
