import { RegisterComponent } from './../register/register.component'
import { DashboardComponent } from './../dashboard/dashboard.component'

export const ROUTES = [
    {
        path: 'auth/register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
]