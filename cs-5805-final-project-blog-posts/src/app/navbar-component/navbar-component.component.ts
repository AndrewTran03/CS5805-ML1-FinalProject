import { Component } from '@angular/core';
import { personalGitHubUrlLink, personalLinkedInUrlLink } from "src/assets/links";

@Component({
	selector: 'app-navbar-component',
	templateUrl: './navbar-component.component.html',
	styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {

	redirectToExternalGitHubLink() {
		window.open(personalGitHubUrlLink, "_blank _noopener _noreferrer");
	}

	redirectToExternalLinkedInLink() {
		window.open(personalLinkedInUrlLink, "_blank _noopener _noreferrer");
	}
}
