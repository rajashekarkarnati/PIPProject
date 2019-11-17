import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StudentdetailService } from 'src/app/services/studentdetail.service';
import {MatTableDataSource} from '@angular/material/table';
import { StudentDetail } from 'src/app/models/student-detail';
import { MatSort, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-managestudents',
  templateUrl: './managestudents.component.html',
  styleUrls: ['./managestudents.component.css']
})
export class ManagestudentsComponent implements OnInit {

  displayedColumns : string[] = ['studentname', 'age', 'address', 'email', 'Actions'];
  students : any;
  dataSource : MatTableDataSource<any>;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private studentservice : StudentdetailService) { }

  ngOnInit() {
    this.getdata();
  }

  getdata(){
    this.studentservice.GetAllStudents().subscribe(
      data => {
          this.dataSource = new MatTableDataSource(data as StudentDetail[]);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataSource.filterPredicate = (list, filter) => {
            console.log(typeof(list), filter);
             return this.displayedColumns.some(ele => {
               return ele != "Actions" && list[ele].toString().toLowerCase().indexOf(filter) != -1;
            }
            )
          };
       }
    )
  }

  applyFilter(searchValue : string){
    this.dataSource.filter = searchValue.trim().toLowerCase();
    
  }
}
