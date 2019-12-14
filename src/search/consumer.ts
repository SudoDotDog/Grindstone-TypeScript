/**
 * @author WMXPY
 * @namespace Search
 * @description Consumer
 */

import { GrindstoneSearchResult } from "./declare";
import { GrindstoneSearch } from "./search";

export class GrindstoneSearchConsumer {

    public static rebuild(results: GrindstoneSearchResult[]): GrindstoneSearchConsumer {

        const dispatcher: GrindstoneSearchConsumer = new GrindstoneSearchConsumer();
        for (const result of results) {
            dispatcher.build(result);
        }
        return dispatcher;
    }

    private readonly _grindstones: GrindstoneSearch[];

    private constructor() {

        this._grindstones = [];
    }

    public get length(): number {
        return this._grindstones.length;
    }
    public get grindstones(): GrindstoneSearch[] {
        return this._grindstones;
    }

    public build(result: GrindstoneSearchResult): this {

        const grindstone: GrindstoneSearch = GrindstoneSearch.build(result);
        this._grindstones.push(grindstone);
        return this;
    }
}
