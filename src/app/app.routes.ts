import { Routes } from '@angular/router'
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component'
import { AuthComponent } from './pages/auth/auth.component'
import { AccountComponent } from './pages/i/account/account.component'

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
		component: AccountComponent
	}
]
