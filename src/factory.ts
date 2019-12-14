/**
 * @author WMXPY
 * @namespace Grindstone
 * @description Factory
 */

import { GrindstoneResult } from "./declare";
import { Grindstone } from "./grindstone";

export class GrindstoneFactory {

    public static from(application: string): GrindstoneFactory {

        return new GrindstoneFactory(application);
    }

    private readonly _application: string;
    private readonly _grindstones: Grindstone[];

    private constructor(application: string) {

        this._application = application;
        this._grindstones = [];
    }

    public createAndGet(category: string, identifier: string): Grindstone {

        const instance: Grindstone = Grindstone.create(this._application, category, identifier);
        this._grindstones.push(instance);

        return instance;
    }

    public results(): GrindstoneResult[] {

        return this._grindstones.map((each: Grindstone) => each.result());
    }
}
