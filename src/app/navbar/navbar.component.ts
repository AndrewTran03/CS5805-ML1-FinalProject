import { Component, HostListener } from '@angular/core';
import { personalGitHubUrlLink, personalLinkedInUrlLink } from "src/assets/links";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	private _navTitleText = "CS 5805 (Machine Learning I) Blog Posts";
	private _gitHubButtonText = "GitHub";
	private _linkedInButtonText = "LinkedIn";
	private isSmallScreen = false;

	constructor() {
		this.checkWindowWidthSize();
	}

	@HostListener('window:resize', ['$event'])
	onResize(_: any) {
		this.checkWindowWidthSize();
	}

	private checkWindowWidthSize() {
		this.isSmallScreen = window.innerWidth <= 767;
	
		if (this.isSmallScreen) {
			this._navTitleText = "CS 5805";
			this._gitHubButtonText = "";
			this._linkedInButtonText = "";
		} else {
			this._navTitleText = "CS 5805 (Machine Learning I) Blog Posts";
			this._gitHubButtonText = "GitHub";
			this._linkedInButtonText = "LinkedIn";
		}
	}

	checkWindowWidthSizeIsSmall(): boolean {
		return window.innerWidth <= 767;
	}

	set navTitleText(navTitleText: string) {
		this._navTitleText = navTitleText;
	}

	get navTitleText() {
		return this._navTitleText;
	}

	set gitHubButtonText(gitHubButtonText: string) {
		this._gitHubButtonText = gitHubButtonText;
	}

	get gitHubButtonText() {
		return this._gitHubButtonText;
	}

	set linkedInButtonText(linkedInButtonText: string) {
		this._linkedInButtonText = linkedInButtonText;
	}

	get linkedInButtonText() {
		return this._linkedInButtonText;
	}

	redirectToExternalGitHubLink() {
		window.open(personalGitHubUrlLink, "_blank _noopener _noreferrer");
	}

	redirectToExternalLinkedInLink() {
		window.open(personalLinkedInUrlLink, "_blank _noopener _noreferrer");
	}
}
