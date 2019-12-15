/**
 * @author WMXPY
 * @namespace Search
 * @description Consumer
 */

import { GrindstoneConsumer } from "../common/consumer";
import { GrindstoneSearchResult } from "./declare";
import { GrindstoneSearch } from "./search";

export class GrindstoneSearchConsumer extends GrindstoneConsumer<GrindstoneSearch> {

    public static rebuild(results: GrindstoneSearchResult[]): GrindstoneSearchConsumer {

        const dispatcher: GrindstoneSearchConsumer = new GrindstoneSearchConsumer();
        for (const result of results) {
            dispatcher.build(result);
        }
        return dispatcher;
    }

    private constructor() {

        super();
    }

    public build(result: GrindstoneSearchResult): this {

        const grindstone: GrindstoneSearch = GrindstoneSearch.build(result);
        this._grindstones.push(grindstone);
        return this;
    }
}
