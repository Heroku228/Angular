import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ApiUsersService } from '../../api/api-users.service'
import { USERS_ERRORS } from '../../static/errors/users.error'
import { IResponseUser } from '../../types/user.type'
import { PUBLIC_FILES } from '../../static/global.variables'

@Component({
	selector: 'app-profile-card',
	standalone: true,
	imports: [FormsModule, HttpClientModule, CommonModule],
	templateUrl: './all-users.component.html',
})

export class ProfileCardComponent implements OnInit {
	constructor(private readonly apiUsersService: ApiUsersService) { }

	defaultIcon: string = PUBLIC_FILES.DEFAULT_ICON 

	users: IResponseUser[] = []
	error: string | null = null


	onImgError(event: Event) {
		const target = event.target as HTMLImageElement
		target.src = this.defaultIcon
	}

	ngOnInit(): void {
		this.apiUsersService.getUsers().subscribe({
			next: res => {
				console.log('res ', res)
				this.users = res
			},
			error: err => {
				this.error = USERS_ERRORS.USERS_LOAD_ERRORS
				console.error('Ошибка при загрузке пользователей:', err)
			}
		})
	}
}
