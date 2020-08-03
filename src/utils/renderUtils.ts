import { Block } from "../modules/block";
import { Router } from "../routing/Router";

export function renderDOM<T>(query: string, block: Block<T>) {
    const root = document.querySelector(query);
    root?.appendChild(block.getContent());
}

export function handleLinkClick(e: any) {
    const href = (this as HTMLElement).getAttribute("href");
    const router = Router.getInstance();
    if (href && router.getRoute(href)) {
        Router.getInstance().go(href);
    } else {
        Router.getInstance().go("/error/404");
    }
    e.preventDefault();
}
