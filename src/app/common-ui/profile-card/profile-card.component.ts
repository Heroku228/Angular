import { HttpClientModule } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AvatarComponent } from "./avatar/avatar.component";

@Component({
	selector: 'app-profile-card',
	standalone: true,
	imports: [FormsModule, HttpClientModule, AvatarComponent],
	templateUrl: './profile-card.component.html',
	styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {

}
