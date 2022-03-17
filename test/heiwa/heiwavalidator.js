'use strict';

const assert = require('./../assert');
const HeiwaValidator = require('./../../.server-dist/chat-plugins/heiwa').HeiwaVlidator;

describe("HeiwaValidator Class", function () {
	it('should validate species', function () {
		// A valid species is one that exists and is in the heiwa pokedex
		// Doesn't exist
		assert(!HeiwaValidator.validateSpecies("HoeenHero"));
		// Not in pokedex
		assert(!HeiwaValidator.validateSpecies("Shiftry"));
		// In Pokedex (valid)
		assert(HeiwaValidator.validateSpecies("Ludicolo"));
	});

	it('should validate an array of moves exists', function () {
		// All invalid
		assert(!HeiwaValidator.validateMoves(["Not", "A", "Thing"]));
		// Some invalid
		assert(!HeiwaValidator.validateMoves(["Hydro Pump", "Hydro Flamethrower"]));
		// All valid
		assert(HeiwaValidator.validateMoves(["Giga Drain", "Blizzard", "Focus Blast", "Stone Edge"]));
	});

	it('should validate a location exists', function () {
		// Doesn't exist
		assert(!HeiwaValidator.validateLocation("HoeenHero's House"));
		// Exists
		assert(HeiwaValidator.validateLocation("Elurte Town"));
		// Not a valid starter location
		// TODO add other locations
		//assert(!HeiwaValidator.validateLocation("", true));
		// Valid starter location
		assert(HeiwaValidator.validateLocation("Elurte Town", true));
	});
});
