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
	private _blogItems: BlogItem[] = [];
	@Input() public imgPath: string = "./app/home-landing-page/images/";

	constructor() { 
		this.parseJSONData();
	}

	set blogItems(blogItems: BlogItem[]) {
		this._blogItems = blogItems;
	}

	get blogItems(): BlogItem[] {
		return this._blogItems;
	}

	parseJSONData() {
		this._blogItems = parseBlogPostCardContent(content as any[]);
	}

	redirectToExternalBlogLink(blogLinkStr: string) {
		window.open(blogLinkStr, "_blank _noopener _noreferrer");
	}
}
