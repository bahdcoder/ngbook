import { NgModule } from '@angular/core'
import { ROUTES } from './routes/routes'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { AuthGuard } from './guards/auth.guard'
import { AuthedGuard } from './guards/authed.guard'
import { UserService } from './services/user.service'
import { AuthService } from './services/auth.service'
import { LoginComponent } from './login/login.component'
import { NotifyService } from './services/notify.service'
import { BrowserModule } from '@angular/platform-browser'
import { NotifyComponent } from './notify/notify.component'
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    NotifyComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthedGuard,
    NotifyService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
