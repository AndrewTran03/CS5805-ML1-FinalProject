import { Component, Input } from '@angular/core';
// How to Import Static JSON into TypeScript -
// Resource: https://reacthustle.com/blog/how-to-import-a-json-file-in-typescript
import content from "./content/blog-post-content.json";
import { BlogItem } from 'src/assets/types';

@Component({
    selector: 'app-home-landing-page',
    templateUrl: './home-landing-page.component.html',
    styleUrls: ['./home-landing-page.component.css'],
})
export class HomeLandingPageComponent {
	private blogItems: BlogItem[] = [];
	@Input() public imgPath: string = "./app/home-landing-page/images/"

	constructor() { }

	ngOnInit() {
		this.parseJSONData();
		console.log(this.blogItems);
	}

	get getBlogItems(): BlogItem[] {
		return this.blogItems;
	}

	set setBlogItems(newVal: BlogItem[]) {
		this.blogItems = newVal;
	}

	parseJSONData() {
		content.forEach((data: any) => {
			const currName = data.name as string;
			const currImgLink = data.imgLink as string;
			const currImgAltTag = data.imgAltTag as string;
			const currDescription = data.description as string;
			const currBlogPostUrl = data.blogPostUrl as string;

			const currItem: BlogItem = { 
				name: currName,
				imgLink: currImgLink,
				imgAltTag: currImgAltTag,
				description: currDescription,
				blogPostUrl: currBlogPostUrl
			};

			this.blogItems.push(currItem);
		});
	}

	redirectToExternalBlogLink(blogLinkStr: string): void {
		window.open(blogLinkStr, "_blank _noopener _noreferrer");
	}
}
