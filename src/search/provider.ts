/**
 * @author WMXPY
 * @namespace Search
 * @description Provider
 */

import { GrindstoneSearchResult } from "./declare";
import { GrindstoneSearch } from "./search";

export class GrindstoneSearchProvider {

    public static from(application: string): GrindstoneSearchProvider {

        return new GrindstoneSearchProvider(application);
    }

    private readonly _application: string;
    private readonly _grindstones: GrindstoneSearch[];

    private constructor(application: string) {

        this._application = application;
        this._grindstones = [];
    }

    public createAndGet(category: string, identifier: string): GrindstoneSearch {

        const instance: GrindstoneSearch = GrindstoneSearch.create(this._application, category, identifier);
        this._grindstones.push(instance);

        return instance;
    }

    public results(): GrindstoneSearchResult[] {

        return this._grindstones.map((each: GrindstoneSearch) => each.result());
    }
}
