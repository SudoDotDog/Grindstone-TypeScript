/**
 * @author WMXPY
 * @namespace Grindstone
 * @description Declare
 */

export type GrindStoneResult = {

    readonly priorityWeight: number;

    readonly application: string;
    readonly category: string;
    readonly identifier: string;

    readonly description?: string;
    readonly date?: Date;
    readonly highlights?: Record<string, any>;
};
