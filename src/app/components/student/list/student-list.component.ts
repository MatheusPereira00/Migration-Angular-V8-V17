/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

// Services
import { StudentService } from '../../../services/student/student.service';
import { routerTransition } from '../../../services/config/config.service';
import { PhonePipe } from '../../../pipes/phone.pipe';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { HighlightStudentDirective } from '../../../directives/highlight-student.directive';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' },
    standalone: true,
    imports: [NgIf, RouterLink, FormsModule, NgFor, HighlightStudentDirective, FilterPipe, PhonePipe]
})

export class StudentListComponent implements OnInit {
	studentList: any;
	studentListData: any;
  filterData: string; // Declaração da propriedade filterData
	constructor(private studentService: StudentService, private toastr: ToastrService) { }
	// Call student list function on page load
	ngOnInit() {
		this.getStudentList();
	}

	// Get student list from services
	getStudentList() {
		const studentList = this.studentService.getAllStudents();
		this.success(studentList);
	}

	// Get student list success
	success(data) {
		this.studentListData = data.data;
		for (let i = 0; i < this.studentListData.length; i++) {
			this.studentListData[i].name = this.studentListData[i].first_name + ' ' + this.studentListData[i].last_name;
		}
	}

	// Delete a student with its index
	deleteStudent(index: number) {
		// get confirm box for confirmation
		const r = confirm('Are you sure?');
		if (r === true) {
			const studentDelete = this.studentService.deleteStudent(index);
			if (studentDelete) {
				this.toastr.success('Success', 'Student Deleted');
			}
			this.getStudentList();
		}
	}
}
/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
