import { NgModule } from '@angular/core'
import { ROUTES } from './routes/routes'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
