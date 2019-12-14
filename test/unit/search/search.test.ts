/**
 * @author WMXPY
 * @namespace Search
 * @description Search
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { GrindstoneSearch } from '../../../src';

describe('Given a {GrindstoneSearch} Class', (): void => {

    const chance: Chance.Chance = new Chance('grindstone-search-search');

    it('should be able to create', (): void => {

        const application: string = chance.string();
        const category: string = chance.string();
        const identifier: string = chance.string();

        const grindstone: GrindstoneSearch = GrindstoneSearch.create(application, category, identifier);

        expect(grindstone.application).to.be.equal(application);
        expect(grindstone.category).to.be.equal(category);
        expect(grindstone.identifier).to.be.equal(identifier);
    });

    it('should be able to calculate weight', (): void => {

        const application: string = chance.string();
        const category: string = chance.string();
        const identifier: string = chance.string();

        const grindstone: GrindstoneSearch = GrindstoneSearch.create(application, category, identifier);

        const priorityWeight: number = chance.integer();
        const preferenceWeight: number = chance.integer();

        grindstone.increasePriorityWeight(priorityWeight);
        grindstone.increasePreferenceWeight(preferenceWeight);

        expect(grindstone.weight()).to.be.equal(priorityWeight + preferenceWeight);
    });
});
