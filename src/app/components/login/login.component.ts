/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { ValidationService } from '../../services/config/config.service';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../services/config/config.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [routerTransition()],
    host: { '[@routerTransition]': '' },
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgIf]
})
export class LoginComponent implements OnInit {
	loginForm: UntypedFormGroup;
	constructor(private formBuilder: UntypedFormBuilder, private router: Router, private userService: UserService, private toastr: ToastrService) {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, ValidationService.emailValidator]],
			password: ['', [Validators.required, ValidationService.passwordValidator]]
		});
	}

	// Check if user already logged in
	ngOnInit() {
		if (localStorage.getItem('userData')) {
			this.router.navigate(['/']);
		}
	}

	// Initicate login
	doLogin() {
		const login = this.userService.doLogin(this.loginForm.value);
		this.success(login);
	}

	// Login success function
	success(data) {
		if (data.code === 200) {
			localStorage.setItem('userData', JSON.stringify(data.data));
			this.router.navigate(['/']);
			this.toastr.success('Success', 'Logged In Successfully');
		} else {
			this.toastr.error('Failed', 'Invalid Credentials');
		}
	}

}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
