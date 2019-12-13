/**
 * @author WMXPY
 * @namespace Grindstone
 * @description Builder
 */

type ObjectRecord<T, K extends keyof T> = Record<K, T[K]>;

export class ObjectBuilder<T extends Record<string, any> = Record<string, any>> {

    public static create<T extends Record<string, any> = Record<string, any>>(): ObjectBuilder<T> {

        return new ObjectBuilder<T>();
    }

    private readonly _object: ObjectRecord<T, keyof T>;

    private constructor() {

        this._object = {} as T;
    }

    public addIfExist<K extends keyof T>(key: K, value: T[K]): this {

        if (value === undefined || value === null) {
            return this;
        }
        return this.add(key, value);
    }

    public add<K extends keyof T>(key: K, value: T[K]): this {

        this._object[key] = value;
        return this;
    }

    public build(): T {

        return this._object as T;
    }
}
