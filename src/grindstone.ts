/**
 * @author WMXPY
 * @namespace Grindstone
 * @description Grindstone
 */

import { ObjectBuilder } from "./builder";
import { GrindStoneResult } from "./declare";

export class Grindstone {

    public static create(
        application: string,
        category: string,
        identifier: string,
    ): Grindstone {

        return new Grindstone(application, category, identifier);
    }

    public static build(result: GrindStoneResult): Grindstone {

        const instance: Grindstone = new Grindstone(
            result.application,
            result.category,
            result.identifier,
        );

        instance.setPriorityWeight(result.priorityWeight);
        return instance;
    }

    private readonly _application: string;
    private readonly _category: string;
    private readonly _identifier: string;

    private _priorityWeight: number = 0;

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

    private constructor(
        application: string,
        category: string,
        identifier: string,
    ) {

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
        this._highlights = { ...highlights };
        return this;
    }

    public setPriorityWeight(weight: number): this {
        this._priorityWeight = weight;
        return this;
    }

    public weight(): number {
        return this._priorityWeight;
    }

    public hash(): string {
        return `${this._application}|>${this._category}|>${this._identifier}`;
    }

    public result(): GrindStoneResult {

        const builder: ObjectBuilder<GrindStoneResult> = ObjectBuilder.create();
        builder.addIfExist('application', this._application);
        builder.addIfExist('category', this._category);
        builder.addIfExist('identifier', this._identifier);

        builder.addIfExist('priorityWeight', this._priorityWeight);
        builder.addIfExist('date', new Date(this._date));
        builder.addIfExist('description', this._description);
        builder.addIfExist('highlights', { ...this._highlights });

        return builder.build();
    }
}
