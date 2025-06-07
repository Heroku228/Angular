import { Component } from '@angular/core'
import { HeaderComponent } from "../../../common-ui/header/header.component"
import { AdminService } from '../../../service/admin.service'

@Component({
	selector: 'app-admin',
	standalone: true,
	imports: [],
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
	constructor(private readonly adminService: AdminService) { }


	delteAllUsers() {
		this.adminService.deleteAllUsers().subscribe({
			next: res => {
				console.log('Все пользователи удалены', res)
			},
			error: err => console.error('Ошибка при удалении пользователей', err)
		})
	}

}
