import { AuthGuard } from './../guards/auth.guard'
import { LoginComponent } from './../login/login.component'
import { RegisterComponent } from './../register/register.component'
import { DashboardComponent } from './../dashboard/dashboard.component'

export const ROUTES = [
    {
        path: 'auth/register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'auth/login',
        component: LoginComponent
    }
]