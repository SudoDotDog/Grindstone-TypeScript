/**
 * @author WMXPY
 * @namespace Search
 * @description Declare
 */

import { GrindstoneCommon } from "../common/declare";

export type GrindstoneSearchResult = {

    readonly priorityWeight: number;
    readonly preferenceWeight: number;

    readonly description?: string;
    readonly date?: Date;
    readonly highlights?: Record<string, any>;
} & GrindstoneCommon;
