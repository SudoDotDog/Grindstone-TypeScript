/**
 * @author WMXPY
 * @namespace Common
 * @description Grindstone
 */

import { Grindstone } from "./grindstone";

export class GrindstoneProvider<T extends Grindstone> {

    protected readonly _application: string;
    protected readonly _grindstones: T[];

    protected constructor(application: string) {

        this._application = application;
        this._grindstones = [];
    }
}
