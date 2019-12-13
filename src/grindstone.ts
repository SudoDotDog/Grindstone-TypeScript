/**
 * @author WMXPY
 * @namespace Grindstone
 * @description Grindstone
 */

import { GrindStoneResult } from "./declare";

export class Grindstone {

    public static build(result: GrindStoneResult): Grindstone {

        const instance: Grindstone = new Grindstone(result.application, result.category, result.identifier);
        return instance;
    }

    private readonly _application: string;
    private readonly _category: string;
    private readonly _identifier: string;

    private _description?: string;
    private _date?: Date;
    private _highlights?: Record<string, any>;

    public get application(): string {
        return this._application;
    }
    public get category(): string {
        return this._category;
    }
    public get identifier(): string {
        return this._identifier;
    }
    public get description(): string | undefined {
        return this._description;
    }
    public get date(): Date | undefined {
        return this._date;
    }
    public get highlights(): Record<string, any> | undefined {
        return this._highlights;
    }

    private constructor(application: string, category: string, identifier: string) {

        this._application = application;
        this._category = category;
        this._identifier = identifier;
    }

    public setDescription(description: string): this {
        this._description = description;
        return this;
    }

    public setDate(date: Date): this {
        this._date = new Date(date);
        return this;
    }

    public setHighlights(highlights: Record<string, any>): this {
        this._highlights = highlights;
        return this;
    }

    public hash(): string {

        return `${this._application}:|>${this._category}:|>${this._identifier}`;
    }
}
