import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { ApiUsersService } from '../../../api/api-users.service'
import { PUBLIC_FILES, WEB_ROUTE } from '../../../static/global.variables'
import { IResponseUser } from '../../../types/user.type'

@Component({
	selector: 'app-account',
	standalone: true,
	imports: [CommonModule, RouterModule, FormsModule],
	templateUrl: './account.component.html',
})
export class AccountPageData implements OnInit {
	user: IResponseUser | null = null
	error: string | null = null
	defaultIcon: string = PUBLIC_FILES.DEFAULT_ICON

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


	updateUserData(event: Event): void {
		const input = event.target as HTMLInputElement


		if (!input.files || input.files.length === 0) {
			console.log('нет файлов')
			return
		}

		const file = input.files[0]
		const formData = new FormData()
		formData.append('icon', file)

		this.apiUsersService.updateUserData(formData).subscribe({
			next: res => {
				console.log('response => ', res)
				const response = res as any

				if (!this.user) throw new Error('no user')

				this.user.pathToUserIcon = response.pathToUserIcon
				window.location.reload()
			},
			error: err => console.error('error => ', err)
		})
	}
}
