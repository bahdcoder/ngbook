import { NgModule } from '@angular/core'
import { ROUTES } from './routes/routes'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { AuthGuard } from './guards/auth.guard'
import { AuthedGuard } from './guards/authed.guard'
import { AuthService } from './services/auth.service'
import { LoginComponent } from './login/login.component'
import { BrowserModule } from '@angular/platform-browser'
import { RegisterComponent } from './register/register.component'
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent
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
    AuthedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
