/**
 * @author WMXPY
 * @namespace Grindstone
 * @description Grindstone
 * @override Unit
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Grindstone } from '../../src';

describe('Given a {Grindstone} Class', (): void => {

    const chance: Chance.Chance = new Chance('grindstone-grindstone');

    it('should be able to create', (): void => {

        const application: string = chance.string();
        const category: string = chance.string();
        const identifier: string = chance.string();

        const grindstone: Grindstone = Grindstone.create(application, category, identifier);

        expect(grindstone.application).to.be.equal(application);
        expect(grindstone.category).to.be.equal(category);
        expect(grindstone.identifier).to.be.equal(identifier);
    });
});
