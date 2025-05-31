import { Routes } from '@angular/router'
import { ProfileCardComponent } from './pages/all-users/all-users.component'
import { AuthComponent } from './pages/auth/auth.component'
import { AccountPageData } from './pages/i/account/account.component'

export const routes: Routes = [
	{
		path: '',
		component: ProfileCardComponent,
	},
	{
		path: 'auth',
		component: AuthComponent
	},
	{
		path: 'i',
		component: AccountPageData
	}
]
