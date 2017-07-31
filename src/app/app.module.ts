import { NgModule } from '@angular/core'
import { ROUTES } from './routes/routes'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { AuthGuard } from './guards/auth.guard'
import { NgProgressModule } from 'ng2-progressbar'
import { AuthedGuard } from './guards/authed.guard'
import { UserService } from './services/user.service'
import { AuthService } from './services/auth.service'
import { LoginComponent } from './login/login.component'
import { FollowService } from './services/follow.service'
import { NotifyService } from './services/notify.service'
import { PrettyDatePipe } from './pipes/pretty-date.pipe'
import { BrowserModule } from '@angular/platform-browser'
import { NotifyComponent } from './notify/notify.component'
import { WallComponent } from './profile/wall/wall.component'
import { ProfileComponent } from './profile/profile.component'
import { RegisterComponent } from './register/register.component'
import { FollowComponent } from './profile/follow/follow.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    NotifyComponent,
    ProfileComponent,
    PrettyDatePipe,
    WallComponent,
    EditProfileComponent,
    FollowComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgProgressModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthedGuard,
    NotifyService,
    UserService,
    FollowService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
