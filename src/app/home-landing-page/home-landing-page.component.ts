import { Component, Input } from '@angular/core';
// How to Import Static JSON into TypeScript -
// Resource: https://reacthustle.com/blog/how-to-import-a-json-file-in-typescript
import content from "./content/blog-post-content.json";
import { parseBlogPostCardContent } from "./ParseBlogPostCardContent";
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

	set setBlogItems(blogItems: BlogItem[]) {
		this.blogItems = blogItems;
	}

	get getBlogItems(): BlogItem[] {
		return this.blogItems;
	}

	parseJSONData() {
		this.blogItems = parseBlogPostCardContent(content as any[]);
	}

	redirectToExternalBlogLink(blogLinkStr: string): void {
		window.open(blogLinkStr, "_blank _noopener _noreferrer");
	}
}
