import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormsModule, NgForm } from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { ApiAuthService } from '../../api/api-auth.service'
import { WEB_ROUTE } from '../../static/global.variables'
import { TLoginPayload, TRegisterPayload } from '../../types/auth.type'

@Component({
	selector: 'app-auth',
	standalone: true,
	imports: [HttpClientModule, FormsModule, RouterModule, CommonModule],
	templateUrl: './auth.component.html',
})

export class AuthComponent {

	private selectedFile: File | null = null;
	errorMessage: string = ''

	constructor(
		private readonly apiAuthService: ApiAuthService,
		private readonly router: Router
	) { }

	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement

		if (input.files && input.files.length > 0)
			this.selectedFile = input.files[0]
	}

	register(form: NgForm): void {
		if (!this.selectedFile) {
			console.error('Файл не выбран')
			return
		}

		const payload: TRegisterPayload = {
			username: form.value.username,
			email: form.value.email,
			password: form.value.password,
			icon: this.selectedFile
		}

		this.apiAuthService.register(payload).subscribe({
			next: res => {
				this.router.navigate([WEB_ROUTE.ME])
				console.log('Успешная авторизация', res)
			},
			error: err => console.error('Ошибка регистрации', err)
		})
	}

	login(form: NgForm) {
		const payload: TLoginPayload = {
			username: form.value.username,
			password: form.value.password,
		}

		this.apiAuthService.login(payload).subscribe({
			next: res => {
				console.log('Успешная авторизация', res)
				this.router.navigate([WEB_ROUTE.ME])
			},
			error: err => {
				this.errorMessage = err.error.message
				console.error('Ошибка авторизации', err)
			}
		})
	}
}
