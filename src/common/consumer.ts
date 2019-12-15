/**
 * @author WMXPY
 * @namespace Common
 * @description Consumer
 */

import { Grindstone } from "./grindstone";

export class GrindstoneConsumer<T extends Grindstone> {

    protected readonly _grindstones: T[];

    protected constructor() {

        this._grindstones = [];
    }

    public get length(): number {
        return this._grindstones.length;
    }
    public get grindstones(): T[] {
        return this._grindstones;
    }
}
