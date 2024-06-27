import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/components/index/app.component';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { StudentService } from './app/services/student/student.service';
import { UserService } from './app/services/user/user.service';
import { AuthService } from './app/services/auth/auth.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, RouterModule, AppRoutingModule, FormsModule, ReactiveFormsModule, ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        })),
        AuthService, UserService, StudentService,
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
