import EventBus from "./event-bus.js";
import ObjectUtils from "../utils/objectUtils.js";

// Нельзя создавать экземпляр данного класса
interface IBlockProps {
    [prop: string]: any;
}
interface IBlockMeta {
    tagName: string;
    props: IBlockProps;
}
export default abstract class Block {
    abstract componentDidMount(): void;
    abstract render(): string;

    private static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    private eventBus: () => EventBus;
    private _element: HTMLElement;
    private _meta: IBlockMeta;

    props: IBlockProps;

    constructor(tagName: string = "div", props: IBlockProps = {}) {
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

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidUpdate(oldProps: any, newProps: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps: IBlockProps, newProps: IBlockProps) {
        return !ObjectUtils.isEqual(oldProps, newProps);
    }

    setProps = (nextProps: undefined) => {
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

    _render() {
        const block = this.render();
        this._element.innerHTML = block;
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: IBlockProps) {
        return new Proxy(props, {
            deleteProperty() {
                throw new Error("нет доступа");
            },
        });
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}
