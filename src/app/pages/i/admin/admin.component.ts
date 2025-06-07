import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { AdminService } from '../../../api/api-admin.service'
import { VALIDATE_ERRORS } from '../../../static/errors/validate.error'
import { WEB_ROUTE } from '../../../static/global.variables'

@Component({
	selector: 'app-admin',
	standalone: true,
	imports: [RouterModule, FormsModule, CommonModule],
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
	constructor(
		private readonly adminService: AdminService,
		private readonly router: Router
	) { }

	username: string = ''
	reason: string = ''
	duration: string = ''
	errorMessage: string = ''

	get isButtonDisabled(): boolean {
		return !this.username || !this.reason || !this.duration
	}

	deleteAllUsers() {
		this.adminService.deleteAllUsers().subscribe({
			next: res => {
				console.log('Все пользователи удалены', res)
				console.log('router => ', this.router.url)
				this.router.navigateByUrl(WEB_ROUTE.HOME, { skipLocationChange: true })
					.then(() => this.router.navigate([this.router.url]))
			},
			error: err => console.error('Ошибка при удалении пользователей', err)
		})
	}

	banUser() {
		if (!this.username || !this.duration || !this.reason) {
			this.errorMessage = VALIDATE_ERRORS.EMPTY_INPUT
		}

		console.table(
			{
				username: this.username,
				reason: this.reason,
				duration: this.duration
			}
		)

		this.errorMessage = ''

		this.adminService.banUser(this.username, this.reason, this.duration).subscribe({
			next: res => console.log('banUser response => ', res),
			error: err => console.error('banUser error => ', err)
		})
	}

	unbanUser() {
		this.adminService.unbanUser(this.username).subscribe({
			next: res => console.log('unban user repsonse => ', res),
			error: err => console.error('unban user error => ', err)
		})
	}

	deleteUser(username: string) {
		this.adminService.deleteUser(username).subscribe({
			next: res => console.log('delte user res => ', res),
			error: err => console.error('delette user error => ', err)
		})
	}

	addAdminRole(username: string) {
		this.adminService.addAdminRole(username).subscribe({
			next: res => console.log('add admin role res => ', res),
			error: err => console.error('add admin role error => ', err)
		})
	}

	deleteAdminRole(username: string) {
		this.adminService.deleteAdminRole(username).subscribe({
			next: res => console.log('delete admin role res => ', res),
			error: err => console.error('delete admin role err => ', err)
		})
	}

	showUserInfo(username: string) {
		this.adminService.showUserInfo(username).subscribe({
			next: res => console.log('show iuser info res => ', res),
			error: err => console.error('show user info err => ', err)
		})
	}

	changeUserStatus(username: string) {
		this.adminService.changeUserStatus(username).subscribe({
			next: res => console.log('change user status res => ', res),
			error: err => console.error('change user status err => ', err)
		})
	}
}
