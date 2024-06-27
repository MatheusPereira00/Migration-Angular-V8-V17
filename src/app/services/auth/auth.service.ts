/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService  {

	constructor(private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (localStorage.getItem('userData')) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
