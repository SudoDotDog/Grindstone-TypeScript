/**
 * @author WMXPY
 * @namespace Grindstone
 * @description Dispatcher
 */

import { GrindstoneResult } from "./declare";
import { Grindstone } from "./grindstone";

export class GrindstoneDispatcher {

    public static rebuild(results: GrindstoneResult[]): GrindstoneDispatcher {

        const dispatcher: GrindstoneDispatcher = new GrindstoneDispatcher();
        for (const result of results) {
            dispatcher.build(result);
        }
        return dispatcher;
    }

    private readonly _grindstones: Grindstone[];

    private constructor() {

        this._grindstones = [];
    }

    public get length(): number {
        return this._grindstones.length;
    }
    public get grindstones(): Grindstone[] {
        return this._grindstones;
    }

    public build(result: GrindstoneResult): this {

        const grindstone: Grindstone = Grindstone.build(result);
        this._grindstones.push(grindstone);
        return this;
    }
}
