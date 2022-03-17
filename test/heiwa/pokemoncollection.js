'use strict';

const assert = require('./../assert');
const PokemonCollection = require('./../../.server-dist/chat-plugins/heiwa').PokemonCollection;

let collection = null;
const userid = 'hoeenhero';

describe("PokemonCollection Class", function () {
	this.afterEach(function () { collection = null; });
	it('should initialize objects', function () {
		collection = new PokemonCollection(userid);

		assert(collection instanceof PokemonCollection);
	});

	it('should intialize and unpack objects', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance]mudkip|5|1|');

		assert(collection instanceof PokemonCollection);
		assert.strictEqual(collection.collection.lotad[0].species, "lotad");
		assert.strictEqual(collection.collection.lotad[0].level, 5);
		assert.strictEqual(collection.collection.lotad[0].uid, 1);
		assert.strictEqual(collection.collection.lotad[0].unlockedMoves, ["teeterdance"]);
		assert.strictEqual(collection.collection.mudkip[0].species, "mudkip");
	});

	it('should be able to add pokemon to the collection', function () {
		collection = new PokemonCollection(userid);
		
		collection.addPokemon("mudkip", 10);
		assert.strictEqual(collection.collection.mudkip[0].species, "mudkip");

		collection.addPokemon("lotad", 5, ["teeterdance"]);
		assert.strictEqual(collection.collection.lotad[0].species, "lotad");
		assert.strictEqual(collection.collection.lotad[0].unlockedMoves, ["teeterdance"]);
	});

	it('should be able to remove pokemon from the collection', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance');

		assert(collection.removePokemon("lotad", 1));
		assert.strictEqual(collection.collection.lotad.length, 0);

	});

	it('should be able to get a pokemon by its species and UID', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance');

		const lotad = collection.getByUID("lotad", 1);
		assert.strictEqual(lotad.species, "lotad");
		assert.strictEqual(lotad.uid, 1);
	});

	it('should be able to get a pokemon\'s level', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance');
		
		const lvl = collection.getLevel("lotad", 1);
		assert.strictEqual(lvl, 5);
	});

	it('should be able to set a pokemon\'s level', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance');
		
		collection.setLevel("lotad", 1, 50);
		assert.strictEqual(collection.collection.lotad[0].level, 50);
	});

	it('should be able to level up a pokemon', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance');
		
		collection.levelUp("lotad", 1);
		assert.strictEqual(collection.collection.lotad[0].level, 6);
	});

	it('should be able to get a pokemon\'s unlocked moves', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance');
		
		assert.strictEqual(collection.getUnlockedMoves("lotad", 1), ["teeterdance"]);
	});

	it('should be able to set a pokemon\'s unlocked moves', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance');

		collection.setUnlockedMoves("lotad", 1, ["gigadrain"]);
		assert.strictEqual(collection.collection.lotad[0].unlockedMoves, ["gigadrain"]);
		
		collection.setUnlockedMoves("lotad", 1, []);
		assert.strictEqual(collection.collection.lotad[0].unlockedMoves, []);
	});

	it('should be able to get the userid for a collection', function () {
		collection = new PokemonCollection(userid);
		
		assert.strictEqual(collection.getTrainer(), userid);
	});

	it('should be able to generate a UID for a given species', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance');

		assert.strictEqual(collection.nextUID("lotad"), 2);		
	});

	it('should be able to get all pokemon of a given species', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance]lotad|10|2|]lotad|45|5|gigadrain]mudkip|5|1|');
		
		const res = collection.getBySpecies("lotad");
		assert.strictEqual(res.length, 3);
	});

	it('should be able to pack a collection', function () {
		collection = new PokemonCollection(userid, 'lotad|5|1|teeterdance]mudkip|5|1|');
		const packed = collection.packCollection();

		assert.strictEqual(packed, 'lotad|5|1|teeterdance]mudkip|5|1|');
	});

	it('should be able to unpack a collection', function () {
		collection = new PokemonCollection(userid);
		const output = collection.unpackCollection('lotad|5|1|teeterdance]mudkip|5|1|');

		assert.strictEqual(output.lotad[0].species, "lotad");
		assert.strictEqual(output.lotad[0].level, 5);
		assert.strictEqual(output.lotad[0].uid, 1);
		assert.strictEqual(output.lotad[0].unlockedMoves, ["teeterdance"]);
		assert.strictEqual(output.mudkip[0].species, "mudkip");
	});
});
