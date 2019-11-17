import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatIconModule, MatSortModule, MatButtonModule, MatMenuModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatIconModule, MatSortModule, MatButtonModule, MatMenuModule],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatIconModule, MatSortModule, MatButtonModule, MatMenuModule],
})
export class MaterialModule { }