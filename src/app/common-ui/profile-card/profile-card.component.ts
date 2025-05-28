import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ApiUsersService } from '../../api/api-users.service'
import { IResponseUser } from '../../types/user.type'

@Component({
	selector: 'app-profile-card',
	standalone: true,
	imports: [FormsModule, HttpClientModule, CommonModule],
	templateUrl: './profile-card.component.html',
})

export class ProfileCardComponent implements OnInit {
	constructor(private readonly apiUsersService: ApiUsersService) { }

	users: IResponseUser[] = []
	error: string | null = null

	ngOnInit(): void {
		this.apiUsersService.getUsers().subscribe({
			next: data => {
				this.users = data
				console.log(data)
				console.log(this.users)
				return this.users
			},
			error: err => {
				this.error = 'Ошибка при загрузке данных пользователей'
				console.error(err)
			}
		})
	}
}
