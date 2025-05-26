import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ApiUsersService } from '../../../api/api-users.service'
import { IResponseUser } from '../../../types/user.type'

@Component({
	selector: 'app-account',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
	user: IResponseUser | null = null
	error: string | null = null

	constructor(private readonly apiUsersService: ApiUsersService) { }

	ngOnInit(): void {
		this.apiUsersService.me().subscribe({
			next: data => this.user = data,
			error: err => {
				this.error = 'Ошибка при загрузке данных пользователя'
				console.error(err)
			}
		})
	}
}
