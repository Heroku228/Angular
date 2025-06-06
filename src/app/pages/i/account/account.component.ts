import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { ApiUsersService } from '../../../api/api-users.service'
import { WEB_ROUTE } from '../../../static/global.variables'
import { IResponseUser } from '../../../types/user.type'

@Component({
	selector: 'app-account',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './account.component.html',
})
export class AccountPageData implements OnInit {
	user: IResponseUser | null = null
	error: string | null = null

	constructor(
		private readonly apiUsersService: ApiUsersService,
		private readonly router: Router
	) { }

	ngOnInit(): void {
		this.apiUsersService.me().subscribe({
			next: data => this.user = data,
			error: () => this.router.navigate([WEB_ROUTE.AUTH])
		})
	}

	logout(): void {
		this.apiUsersService.logout().subscribe({
			next: () => {
				this.user = null
				this.router.navigate([WEB_ROUTE.AUTH])
			},
		})
	}
}
