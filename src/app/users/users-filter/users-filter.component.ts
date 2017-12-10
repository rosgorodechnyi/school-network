import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ClassesService } from '../../shared/services/classes.service';

@Component({
  selector: 'sn-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss']
})
export class UsersFilterComponent implements OnInit {

  constructor(private classesService: ClassesService) { }

  @Output() filterByClass: EventEmitter<any> = new EventEmitter();

  classes: any[];

  ngOnInit() {
    this.getClasses();
  }

  getClasses() {
    this.classesService.getClasses().subscribe(classes => {
      this.classes = classes;
    });
  }

  filterHandler(id) {
    this.filterByClass.emit(id);
  }

}
