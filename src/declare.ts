/**
 * @author WMXPY
 * @namespace Grindstone
 * @description Declare
 */

export type GrindStoneResult = {

    readonly priorityWeight: number;
    readonly preferenceWeight: number;

    readonly description?: string;
    readonly date?: Date;
    readonly highlights?: Record<string, any>;
} & GrindstoneCommon;

export type GrindstoneCommon = {

    readonly application: string;
    readonly category: string;
    readonly identifier: string;
};
