export class ArrayUtils {
    static last<T>(list: T[]) {
        if (!list || list.length === 0) {
            return undefined;
        }

        return list[list.length - 1];
    }
    static first<T>(list: T[]) {
        if (!list || list.length === 0) {
            return undefined;
        }

        return list[0];
    }
    static range(start: number, end: number, step: number, isRight: boolean) {
        let startValue = 0;
        let endValue = 0;
        let count = start;
        const params = [start, end, step].filter(Number.isFinite);
        if (params.length > 0) {
            endValue = Number.isFinite(start) ? start : endValue;
        }
        if (params.length > 1) {
            startValue = Number.isFinite(start) ? start : startValue;
            endValue = Number.isFinite(end) ? end : endValue;
            count = endValue;
        }
        let stepValue = Math.sign(endValue - startValue);
        if (params.length > 2) {
            stepValue = Number.isFinite(step) ? step : stepValue;
            count =
                stepValue !== 0
                    ? Math.floor(endValue / stepValue)
                    : Math.abs(endValue) - startValue;
        }

        const result: number[] = [];
        let value = startValue;
        let i = 0;
        while (Math.abs(value) < Math.abs(endValue) && i++ < Math.abs(count)) {
            result.push(value);
            value += stepValue;
        }

        return isRight ? result.reverse() : result;
    }
    static rangeRight(start: number, end: number, step: number) {
        return ArrayUtils.range(start, end, step, true);
    }
    static isEmpty<T>(value: T) {
        if (value == null || value == undefined) {
            return true;
        }
        const valueType = typeof value;
        if (valueType === "object") {
            return Object.keys(value).length === 0;
        } else if (valueType === "string") {
            return !value;
        }
        return true;
    }
}
