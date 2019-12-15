/**
 * @author WMXPY
 * @namespace Common
 * @description Grindstone
 */

export class Grindstone {

    protected readonly _application: string;
    protected readonly _category: string;
    protected readonly _identifier: string;

    protected constructor(application: string, category: string, identifier: string) {

        this._application = application;
        this._category = category;
        this._identifier = identifier;
    }

    public get application(): string {
        return this._application;
    }
    public get category(): string {
        return this._category;
    }
    public get identifier(): string {
        return this._identifier;
    }

    public hash(): string {
        return `${this._application}|>${this._category}|>${this._identifier}`;
    }
}
