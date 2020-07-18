import { EventBus } from "./event-bus.js";
import { ObjectUtils } from "../utils/objectUtils.js";

interface IBlockProps {
    [prop: string]: any;
}

interface IBlockMeta<T> {
    tagName: string;
    props: T;
}

export abstract class Block<T extends IBlockProps> {
    abstract render(): string;

    private static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    private eventBus: () => EventBus;
    private _element: HTMLElement;
    private _meta: IBlockMeta<T>;

    protected props: T;

    constructor(tagName: string = "div", props: T) {
        this._meta = {
            tagName,
            props,
        };

        this.props = this._makePropsProxy(props);

        const eventBus = new EventBus();
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    private init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    private _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    private _componentDidUpdate(oldProps: any, newProps: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    private _render() {
        this._element.innerHTML = this.render();
    }

    private _makePropsProxy(props: T) {
        return new Proxy(props, {
            deleteProperty() {
                throw new Error("нет доступа");
            },
        });
    }

    private _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    protected componentDidUpdate(oldProps: T, newProps: T) {
        return !ObjectUtils.isEqual(oldProps, newProps);
    }

    protected componentDidMount() { }

    setProps = (nextProps: object) => {
        if (!nextProps) {
            return;
        }
        const oldProps = { ...this.props };
        Object.assign(this.props, nextProps);
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
    };

    get element() {
        return this._element;
    }

    getContent() {
        return this.element;
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}
