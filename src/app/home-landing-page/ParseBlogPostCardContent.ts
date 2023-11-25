import { BlogItem } from "src/assets/types";

function parseBlogPostCardContent(content: any[]) {
    const blogItems: BlogItem[] = [];

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

        blogItems.push(currItem);
    });

    return blogItems; 
}

export { parseBlogPostCardContent };
