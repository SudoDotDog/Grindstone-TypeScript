/**
 * @author WMXPY
 * @namespace Search
 * @description Search
 */

import { ObjectBuffer } from "@sudoo/buffer";
import { Grindstone } from "../common/grindstone";
import { GrindstoneSearchResult } from "./declare";

export class GrindstoneSearch extends Grindstone {

    public static create(application: string, category: string, identifier: string): GrindstoneSearch {

        return new GrindstoneSearch(application, category, identifier);
    }

    public static build(result: GrindstoneSearchResult): GrindstoneSearch {

        const instance: GrindstoneSearch = new GrindstoneSearch(
            result.application,
            result.category,
            result.identifier,
        );

        instance.setPriorityWeight(result.priorityWeight);
        instance.setPreferenceWeight(result.preferenceWeight);
        return instance;
    }

    private _priorityWeight: number = 0;
    private _preferenceWeight: number = 0;

    private _description?: string;
    private _date?: Date;
    private _highlights?: Record<string, any>;

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

        super(application, category, identifier);
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
        this._priorityWeight = Number(weight);
        return this;
    }
    public increasePriorityWeight(amount: number): this {
        return this.setPriorityWeight(this._priorityWeight + Number(amount));
    }
    public decreasePriorityWeight(amount: number): this {
        return this.setPriorityWeight(this._priorityWeight - Number(amount));
    }

    public setPreferenceWeight(weight: number): this {
        this._preferenceWeight = Number(weight);
        return this;
    }
    public increasePreferenceWeight(amount: number): this {
        return this.setPreferenceWeight(this._preferenceWeight + Number(amount));
    }
    public decreasePreferenceWeight(amount: number): this {
        return this.setPreferenceWeight(this._preferenceWeight - Number(amount));
    }

    public weight(): number {
        return this._priorityWeight + this._preferenceWeight;
    }

    public result(): GrindstoneSearchResult {

        const buffer: ObjectBuffer<GrindstoneSearchResult> = ObjectBuffer.create();
        buffer.addIfExist('application', this._application);
        buffer.addIfExist('category', this._category);
        buffer.addIfExist('identifier', this._identifier);

        buffer.addIfExist('priorityWeight', this._priorityWeight);
        buffer.addIfExist('date', this._date);
        buffer.addIfExist('description', this._description);
        buffer.addIfExist('highlights', this._highlights);

        return buffer.build();
    }
}
