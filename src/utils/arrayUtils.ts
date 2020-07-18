export class ArrayUtils {
    static last<T>(list: T[]) {
        if (ArrayUtils.isEmpty(list)) {
            return undefined;
        }

        return list[list.length - 1];
    }
    static first<T>(list: T[]) {
        if (ArrayUtils.isEmpty(list)) {
            return undefined;
        }

        return list[0];
    }
    static range(start: number, end?: number, step?: number, isReversed?: boolean) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        step = step !== undefined ? step : (start < end ? 1 : -1);

        let count = Math.max(Math.ceil((end - start) / (step || 1)), 0);
        const result: number[] = [];
        while (count--) {
            result.push(start);
            start += step
          }

        return isReversed ? result.reverse() : result;
    }
    static rangeRight(start: number, end?: number, step?: number) {
        return ArrayUtils.range(start, end, step, true);
    }
    static isEmpty<T>(value: T) {
        if (value == null || value == undefined) {
            return true;
        }

        if (typeof value === "object") {
            return Object.keys(value).length === 0;
        }
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        return !value;
    }
}
