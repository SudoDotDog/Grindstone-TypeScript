/**
 * @author WMXPY
 * @namespace Search
 * @description Provider
 */

import { GrindstoneProvider } from "../common/provider";
import { GrindstoneSearchResult } from "./declare";
import { GrindstoneSearch } from "./search";

export class GrindstoneSearchProvider extends GrindstoneProvider<GrindstoneSearch> {

    public static from(application: string): GrindstoneSearchProvider {

        return new GrindstoneSearchProvider(application);
    }

    private constructor(application: string) {

        super(application);
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
