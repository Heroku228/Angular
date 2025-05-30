import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Router, RouterModule } from '@angular/router'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(private readonly router: Router) { }

	routes = [
		{ label: 'Home', path: '/' },
		{ label: 'News', path: '/news' },
		{ label: 'About', path: '/about' },
		{ label: 'Cart', path: '/cart' },
		{ label: 'Account', path: '/i' }
	];
}
