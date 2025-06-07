import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ApiUsersService } from '../../api/api-users.service'
import { USERS_ERRORS } from '../../static/errors/users.error'
import { IResponseUser } from '../../types/user.type'

@Component({
	selector: 'app-profile-card',
	standalone: true,
	imports: [FormsModule, HttpClientModule, CommonModule],
	templateUrl: './all-users.component.html',
})

export class ProfileCardComponent implements OnInit {
	constructor(private readonly apiUsersService: ApiUsersService) { }

	users: IResponseUser[] = []
	error: string | null = null

	ngOnInit(): void {
		this.apiUsersService.getUsers().subscribe({
			next: data => this.users = data,
			error: err => {
				this.error = USERS_ERRORS.USERS_LOAD_ERRORS
				console.error('Ошибка при загрузке пользователей:', err)
			}
		})
	}
}
