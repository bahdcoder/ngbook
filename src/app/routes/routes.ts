import { AuthGuard } from './../guards/auth.guard'
import { AuthedGuard } from './../guards/authed.guard'
import { LoginComponent } from './../login/login.component'
import { ProfileComponent } from './../profile/profile.component'
import { RegisterComponent } from './../register/register.component'
import { DashboardComponent } from './../dashboard/dashboard.component'

export const ROUTES = [
    {
        path: 'auth/register',
        component: RegisterComponent,
        canActivate: [AuthedGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'auth/login',
        component: LoginComponent,
        canActivate: [AuthedGuard]
    },
    {
        path: 'user/profile/:id',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }
]