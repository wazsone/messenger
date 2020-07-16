import Block from "../modules/block.js";

export function renderDOM<T>(query: string, block: Block<T>) {
    const root = document.querySelector(query);
    root?.appendChild(block.getContent());
}
