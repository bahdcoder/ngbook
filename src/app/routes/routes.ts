import { AuthGuard } from './../guards/auth.guard'
import { AuthedGuard } from './../guards/authed.guard'
import { HomeComponent } from './../home/home.component'
import { LoginComponent } from './../login/login.component'
import { WallComponent } from './../profile/wall/wall.component'
import { ProfileComponent } from './../profile/profile.component'
import { RegisterComponent } from './../register/register.component'
import { DashboardComponent } from './../dashboard/dashboard.component'
import { CreateJokeComponent } from './../create-joke/create-joke.component'
import { EditProfileComponent } from './../profile/edit-profile/edit-profile.component'

export const ROUTES = [
    {
        path: 'auth/register',
        component: RegisterComponent,
        canActivate: [AuthedGuard]
    },
    {
        path: '',
        component: HomeComponent,
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
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: WallComponent
            },
            {
                path: 'edit',
                component: EditProfileComponent 
            }
        ]
    },
    {
        path: 'create/joke',
        component: CreateJokeComponent
    }
]