import { Component } from '@angular/core';
import { personalGitHubUrlLink, personalLinkedInUrlLink } from "src/assets/links";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	private navTitleText = "CS 5805 (Machine Learning I) Blog Posts";
	private gitHubButtonText = "GitHub";
	private linkedInButtonText = "LinkedIn";

	constructor() {}

	// constructor() {
	// 	this.navTitleText = (this.checkWindowWidthSizeIsSmall()) ? "CS 5805" : 
	// 		"CS 5805 (Machine Learning I) Blog Posts";
	// 	this.gitHubButtonText = (this.checkWindowWidthSizeIsSmall()) ? "" : "GitHub";
	// 	this.linkedInButtonText = (this.checkWindowWidthSizeIsSmall()) ? "" : "LinkedIn";
	// }

	// ngOnInit() {
	// 	this.navTitleText = (this.checkWindowWidthSizeIsSmall()) ? "CS 5805" : 
	// 		"CS 5805 (Machine Learning I) Blog Posts";
	// 	this.gitHubButtonText = (this.checkWindowWidthSizeIsSmall()) ? "" : "GitHub";
	// 	this.linkedInButtonText = (this.checkWindowWidthSizeIsSmall()) ? "" : "LinkedIn";
	// }

	// ngOnChange() {
	// 	this.navTitleText = (this.checkWindowWidthSizeIsSmall()) ? "CS 5805" : 
	// 		"CS 5805 (Machine Learning I) Blog Posts";
	// 	this.gitHubButtonText = (this.checkWindowWidthSizeIsSmall()) ? "" : "GitHub";
	// 	this.linkedInButtonText = (this.checkWindowWidthSizeIsSmall()) ? "" : "LinkedIn";
	// }

	checkWindowWidthSizeIsSmall(): boolean {
		return window.innerWidth <= 767;
	}

	set setNavTitleText(navTitleText: string) {
		this.navTitleText = navTitleText;
	}

	get getNavTitleText() {
		return this.navTitleText;
	}

	set setGitHubButtonText(gitHubButtonText: string) {
		this.gitHubButtonText = gitHubButtonText;
	}

	get getGitHubButtonText() {
		return this.gitHubButtonText;
	}

	set setLinkedInButtonText(linkedInButtonText: string) {
		this.linkedInButtonText = linkedInButtonText;
	}

	get getLinkedInButtonText() {
		return this.linkedInButtonText;
	}

	redirectToExternalGitHubLink() {
		window.open(personalGitHubUrlLink, "_blank _noopener _noreferrer");
	}

	redirectToExternalLinkedInLink() {
		window.open(personalLinkedInUrlLink, "_blank _noopener _noreferrer");
	}
}
