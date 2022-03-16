/**
 * Pokemon Heiwa - Core File
 * This file handles commands, chat pages, and
 * various useful interfaces and classes.
 * 
 * Comissioned by Petuh
 * @author HoeenHero
 * @license MIT
 */

import {FS} from '../../lib/fs';
import { ErrorMessage } from '../chat';

/**
 * Represents a single player's information
 */
export interface HeiwaPlayerData {
	userid: ID,
	// Registration feilds
	trainerName: string, // A name for their trainer that isn't their username
	pokecommunityUsername: string, // Pokecommunity username
	// Game records
	money: number,
	collection: PokemonCollection,
	location: string,
}

/**
 * Represents a single Pokemon's information in a PokemonCollection
 */
export interface HeiwaPokemon {
	species: string,
	level: number,
	unlockedMoves: string[],
	trainer: string, // userid
	sid: number, // Unique ID for this species and trainer
}

const HeiwaPSDex = Dex;//.mod('heiwa');

/**
 * Useful static validation helper methods
 */
export class HeiwaValidator {
	static readonly pokedex: string[] = [
		"chikorita", "bayleef", "meganium",
		"cyndaquil", "quilava", "typhlosion",
		"totodile", "croconaw", "feraligatr",
		"zigzagoon", "linoone",
		"surskit", "masquerain",
		"wingull", "pelipper",
		"taillow", "swellow",
		"lotad", "lombre", "ludicolo",
		"sewaddle", "swadloon", "leavanny",
		"ekans", "arbok",
		"wurmple", "silcoon", "beautifly", "cascoon", "dustox",
		"pidgey", "pidgeotto", "pidgeot",
		"oddish", "gloom", "vileplume", "bellossom",
		"flabebe", "floette", "florges",
		"goldeen", "seaking",
		"carvanha", "sharpedo",
		"lapras",
		"electrike", "manectric",
		"shroomish", "breloom",
		"nincada", "ninjask", "shedinja",
		"heracross",
		"slakoth", "vigoroth", "slaking",
		"gastly", "haunter", "gengar",
		"emolga",
		"torkoal",
		"numel", "camerupt",
		"swablu", "altaria",
		"lunatone",
		"solrock",
		"roggenrola", "boldore", "gigalith",
		"zubat", "golbat", "crobat",
		"sableye",
		"mawile",
		"croagunk", "toxicroak",
		"solosis", "duosion", "reuniclus",
		"ralts", "kirlia", "gardevoir", "gallade",
		"pichu", "pikachu", "raichu",
		"duskull", "dusclops", "dusknoir",
		"vanillite", "vanillish", "vanilluxe",
		"chatot",
		"munchlax", "snorlax",
		"luvdisc",
		"tentacool", "tentacruel",
		"combee", "vespiquen",
		"buneary", "lopunny",
		"mienfoo", "mienshao",
		"timburr", "gurdurr", "conkeldurr",
		"mareep", "flaaffy", "ampharos",
		"miltank",
		"bouffalant",
		"ponyta", "rapidash",
		"spoink", "grumpig",
		"murkrow", "honchkrow",
		"smeargle",
		"natu", "xatu",
		"mimejr", "mrmime",
		"misdreavus", "mismagius",
		"aipom", "ambipom",
		"carnivine",
		"yanma", "yanmega",
		"tropius",
		"snorunt", "glalie", "froslass",
		"corphish", "crawdaunt",
		"feebas", "milotic",
		"magikarp", "gyarados",
		"staryu", "starmie",
		"azurill", "marill", "azumarill",
		"kecleon",
		"larvesta", "volcarona",
		"corsola",
		"fletchling", "fletchinder", "talonflame",
		"spheal", "sealeo", "walrein",
		"tirtouga", "carracosta",
		"skrelp", "dragalge",
		"trapinch", "vibrava", "flygon",
		"chingling", "chimecho",
		"budew", "roselia", "roserade",
		"petilil", "lilligant",
		"bronzor", "bronzong",
		"gothita", "gothorita", "gothitelle",
		"togepi", "togetic", "togekiss",
		"audino",
		"lileep", "cradily",
		"anorith", "armaldo",
		"omanyte", "omastar",
		"kabuto", "kabutops",
		"aerodactyl",
		"dratini", "dragonair", "dragonite",
		"phione",
		"manaphy",
		"articuno",
		"zapdos",
		"moltres",
		"lugia",
		"hooh",
		"shaymin", "shayminsky"
	];

	static readonly startingLocations = {
		"elurtetown": "Elurte Town",
		"sumenditown": "Sumendi Town",
		"vittoriacity": "Vittoria City",
		"oheacity": "Ohea City",
		"portpiccolo": "Port Piccolo",
		"primariacity": "Primaria City",
		"ombratown": "Ombra Town",
		"solitariotown": "Solitario Town",
		"portfortuna": "Port Fortuna",
		"itsasotown": "Itsaso Town",
		"loreakcity": "Loreak City",
		"vivrecity": "Vivre City"
	}

	static readonly otherLocations: string[] = [

	];

	static validSpecies(species: string): boolean {
		species = toID(species);
		const psEntry = HeiwaPSDex.getSpecies(species);
		if (!psEntry.exists) return false;

		if (!this.pokedex.includes(species)) return false;

		return true;
	}

	static validMoves(moves: string[]): string | undefined {
		for (const move of moves) {
			const psMove = HeiwaPSDex.getMove(move);
			if (!psMove.exists) return `"${move}" does not exist.`;
		}

		// TODO more validation for things like:
		// Can a species learn these?
		// Can they learn these by level up?
		// maybe more - Pre-Req: proper data file
		
		return;
	}

	static validLocation(location: string, startingOnly?: true): boolean {
		location = toID(location);
		if (startingOnly) return location in this.startingLocations;
		return location in this.startingLocations || location in this.otherLocations;
	}

	static uniqueRegistration(userid: string, pokecommunityid: string): string | undefined {
		userid = toID(userid);
		pokecommunityid = toID(pokecommunityid);
		if (userid in heiwaPlayers) return "This PS Username is already registered.";
		for (const id in heiwaPlayers) {
			if (toID(heiwaPlayers[userid].pokecommunityUsername) === pokecommunityid) return "This Pokecommunity Username is already registered.";
		}
	}
}

/**
 * A collection of pokemon owned by a player.
 * Methods provided to add, remove, and manipulate the pokemon in the collection.
 * 
 * Each instance is for a specific player.
 */
export class PokemonCollection {
	private readonly userid: string;
	private collection: {[species: string]: HeiwaPokemon[]};

	constructor(userid: string, packedCollection?: string) {
		this.userid = userid;

		if (packedCollection && packedCollection !== "") {
			this.collection = this.unpackCollection(packedCollection);
		} else {
			this.collection = {};
		}
	}

	addPokemon(species: string, level: number, unlockedMoves?: string[]): string | undefined {
		species = toID(species);
		if (!HeiwaValidator.validSpecies(species)) return `"${species}" is not in the Heiwa Pokedex.`;
		if (level < 1 || level > 100) return "Level must be between 1 and 100.";
		if (unlockedMoves) {
			const err = HeiwaValidator.validMoves(unlockedMoves);
			if (err) return err;
		}

		// Valid
		if (!this.collection[species]) this.collection[species] = [];
		if (!unlockedMoves) unlockedMoves = [];
		this.collection[species].push({
			species,
			trainer: this.userid,
			sid: this.nextSID(species),
			unlockedMoves,
			level,
		});

		writeHeiwaPlayerData();
	}

	removePokemon(species: string, sid: number): string | undefined {
		species = toID(species);
		if (!HeiwaValidator.validSpecies(species)) return `"${species}" is not in the Heiwa Pokedex.`;
		if (!this.collection[species]) return `${this.userid} has no ${species}`;

		// Try to remove
		for (let i = 0; i < this.collection[species].length; i++) {
			if (this.collection[species][i].sid === sid) {
				// Remove
				this.collection[species].splice(i, 1);
				writeHeiwaPlayerData();
				return;
			}
		}

		return `Could not find a ${species} owned by ${this.userid} with an SID of ${sid}`;
	}

	getBySID(species: string, sid: number): HeiwaPokemon | undefined {
		species = toID(species);
		if (!HeiwaValidator.validSpecies(species)) return;
		if (!this.collection[species]) return;

		for (let i = 0; i < this.collection[species].length; i++) {
			if (this.collection[species][i].sid === sid) {
				return this.collection[species][i];
			}
		}
	}

	getLevel(species: string, sid: number): number | undefined {
		species = toID(species);
		if (!HeiwaValidator.validSpecies(species)) return;
		if (!this.collection[species]) return;

		const target = this.getBySID(species, sid);
		if (target) return target.level;
	}

	setLevel(species: string, sid: number, level: number): string | undefined {
		species = toID(species);
		if (!HeiwaValidator.validSpecies(species)) return `"${species}" is not in the Heiwa Pokedex.`;
		if (!this.collection[species]) return `${this.userid} has no ${species}`;
		if (level < 1 || level > 100) return "Level must be between 1 and 100.";

		// Try to modify
		for (let i = 0; i < this.collection[species].length; i++) {
			if (this.collection[species][i].sid === sid) {
				// Modify
				this.collection[species][i].level = level;
				writeHeiwaPlayerData();
				return;
			}
		}

		return `Could not find a ${species} owned by ${this.userid} with an SID of ${sid}`;
	}

	levelUp(species: string, sid: number): string | undefined {
		const lvl = this.getLevel(species, sid);
		if (!lvl) return `Failed to find the pokemon to level up.`;
		return this.setLevel(species, sid, lvl + 1);
	}

	getUnlockedMoves(species: string, sid: number): string[] | undefined {
		species = toID(species);
		if (!HeiwaValidator.validSpecies(species)) return;
		if (!this.collection[species]) return;

		const target = this.getBySID(species, sid);
		if (target) return target.unlockedMoves;
	}

	setUnlockedMoves(species: string, sid: number, unlockedMoves: string[]): string | undefined {
		species = toID(species);
		if (!HeiwaValidator.validSpecies(species)) return `"${species}" is not in the Heiwa Pokedex.`;
		if (!this.collection[species]) return `${this.userid} has no ${species}`;
		const err = HeiwaValidator.validMoves(unlockedMoves);
		if (err) return err;

		// Try to modify
		for (let i = 0; i < this.collection[species].length; i++) {
			if (this.collection[species][i].sid === sid) {
				// Modify
				this.collection[species][i].unlockedMoves = unlockedMoves;
				writeHeiwaPlayerData();
				return;
			}
		}

		return `Could not find a ${species} owned by ${this.userid} with an SID of ${sid}`;
	}

	getTrainer(): string {
		return this.userid;
	}

	getBySpecies(species: string): HeiwaPokemon[] {
		species = toID(species);
		if (!HeiwaValidator.validSpecies(species)) return [];
		if (!this.collection[species]) return [];

		return this.collection[species];
	}

	getSpeciesKeys(sort?: 'alpha' | 'dex'): string[] {
		let keys = Object.keys(this.collection);
		if (sort === 'alpha') {
			keys = keys.sort();
		} else {
			keys = keys.sort((a: string, b: string): number => {
				const aDexIndex = HeiwaValidator.pokedex.indexOf(toID(a));
				const bDexIndex = HeiwaValidator.pokedex.indexOf(toID(b));

				return aDexIndex - bDexIndex;
			});
		}

		return keys;
	}

	nextSID(species: string): number {
		species = toID(species);
		if (!this.collection[species]) throw new Error(`Cannot generate SID for species with no collection entry (userid: ${this.userid}, species: ${species})`);
		let max = 0;
		for (const entry of this.collection[species]) {
			if (entry.sid > max) max = entry.sid;
		}

		return max + 1;
	}

	// AKA toString, used for JSON packing
	packCollection(): string {
		let packedString = "";
		for (let species in this.collection) {
			for (let current of this.collection[species]) {
				packedString += `${current.species}|${current.level}|${current.sid}|${current.unlockedMoves.join(',')}]`;
			}
		}
		return packedString.slice(0, -1);
	}

	// Note: called by constructor, be cautious when changing to not break initalization
	unpackCollection(packedCollection: string): {[species: string]: HeiwaPokemon[]} {
		let unpacked: {[species: string]: HeiwaPokemon[]} = {};

		let entries = packedCollection.split(']');
		for (let entry of entries) {
			// species|level|sid|move1,move2,moveN
			// TODO consider validating? Its technically user input
			const parts = entry.split('|');
			const species = toID(parts[0]);
			const level = parseInt(parts[1]);
			const sid = parseInt(parts[2]);
			const unlockedMoves = parts[3].split(',').map(v => toID(v));
			
			if (isNaN(level) || isNaN(sid)) {
				console.log(`Error when unpacking JSON for entry: ${entry} on user ${this.userid}: level or sid was NaN. DISCARDING.`);
				continue;
			}

			if (!unpacked[species]) unpacked[species] = [];
			unpacked[species].push({
				species,
				level,
				unlockedMoves,
				trainer: this.userid,
				sid,
			});
		}

		return unpacked;
	}
}

const HEIWA_PLAYER_JSON = 'config/chat-plugins/heiwa_players.json';
type HeiwaJSONBlob = {[userid: string]: HeiwaPlayerData};
export let heiwaPlayers: HeiwaJSONBlob = {};

try {
	const playerData: HeiwaJSONBlob = JSON.parse(FS(HEIWA_PLAYER_JSON).readSync());
	
	for (let userid in playerData) {
		let entry = playerData[userid];
		// @ts-ignore entry.collection IS a string until we parse it here for performance reasons
		entry.collection = new PokemonCollection(userid, entry.collection);
	}

	heiwaPlayers = playerData;
} catch (e: any) {
	if (e.code !== 'ENOENT') throw e;
}

export function writeHeiwaPlayerData() {
	FS(HEIWA_PLAYER_JSON).writeUpdate(
		() => JSON.stringify(heiwaPlayers, (key, value) => {
			// Pack collections
			if (value instanceof PokemonCollection) return value.packCollection();
			return value;
		})
	);
}

export const pages: PageTable = {
	heiwa: {
		players(query, user, connection) {
			// View a list players & registation details
			// Requires ~
			if (!user.named) return Rooms.RETRY_AFTER_LOGIN;
			this.title = "Registered Players";
			this.checkCan('lockdown');
			let buf = `<div class="pad ladder"><br/>`;
			buf += `<table style="margin-left: auto; margin-right: auto"><tbody><tr><th colspan="6"><h2 style="margin: 5px auto">Heiwa Players</h1></th></tr>`;
			buf += `<tr><th>PS Name</th><th>PC Name</th><th>Trainer Name</th><th>Money</th><th>Location</th><th>Collection</th></tr>`;
			
			for (let userid in heiwaPlayers) {
				const player = heiwaPlayers[userid];
				buf += `<tr><td>${player.userid}</td><td>${player.pokecommunityUsername}</td><td>${player.trainerName}</td><td>${player.money}</td><td>${player.location}</td><td><a class="button" href="/view-heiwa-collection-${player.userid}">View Collection</a></td></tr>`;
			}
			return buf + `</div>`;
		},

		collection(query, user, connection) {
			// View a player's collection
			// Can always view self
			// Requires ~ for others
			if (!user.named) return Rooms.RETRY_AFTER_LOGIN;
			this.title = "View Collection";
			let player: HeiwaPlayerData;
			if (toID(query[0])) {
				if (!user.can('lockdown')) return "<div class=\"pad ladder\">Access Denied for viewing other's collections.</div>";
				if (!heiwaPlayers[toID(query[0])]) return `<div class="pad ladder">The user "${toID(query[0])}" is not registered for Pokemon Heiwa.</div>`;
				player = heiwaPlayers[toID(query[0])];
			} else {
				if (!heiwaPlayers[user.id]) return `<div class="pad ladder">You need to register for Pokemon Heiwa first. Contact an Administrator to do so.</div>`;
				player = heiwaPlayers[user.id];
			}
			let sortType: 'alpha' | 'dex' = (toID(query[1]) === 'alpha' ? 'alpha' : 'dex');
			let buf = `<div class="pad ladder">`;
			if (sortType === 'dex') {
				buf += `<button class="button disabled" style="float:left"><i class="fa fa-th-list"></i> Pokedex Sort</button> ` +
				`<a class="button" style="float:right" href="/view-heiwa-collection-${player.userid}-alpha" target="replace"><i class="fa fa-sort"></i> Alphabetical Sort</a> `;
			} else {
				buf += `<a class="button" style="float:left" href="/view-heiwa-collection-${player.userid}-dex" target="replace"><i class="fa fa-th-list"></i> Pokedex Sort</a> ` +
				`<button class="button disabled" style="float:right"><i class="fa fa-sort"></i> Alphabetical Sort</button> `;
			}
			buf += `<br /><br />`;
			buf += `<table style="margin-left: auto; margin-right: auto"><tbody><tr><th colspan="5"><h2 style="margin: 5px auto">${player.userid}'s collection</h1></th></tr>`;
			buf += `<tr><th>Species</th><th>Dex No.</th><th>Level</th><th>Special Moves</th><th>SID</th></tr>`;

			let keys = player.collection.getSpeciesKeys(sortType);
			for (const species of keys) {
				const pokemon = player.collection.getBySpecies(species);
				const dexNo = HeiwaValidator.pokedex.indexOf(species) + 1;
				for (const current of pokemon) {
					buf += `<tr><td>${current.species}</td><td>${dexNo}</td><td>${current.level}</td><td>${current.unlockedMoves.join(', ')}</td><td>${current.sid}</td></tr>`;
				}
			}

			return buf + "</div>";
		}

		// TODO UI for locations and other info
	}
};

export const commands: ChatCommands = {
	heiwa: {
		register(target, room, user) {
			this.checkCan('lockdown');
			let parts = this.splitTarget(target).split(',');
			if (parts.length !== 4) return this.parse('/help heiwa register');
			if (!this.targetUser) throw new ErrorMessage(`The user "${this.inputUsername}" was not found.`);
			const pokecommunityUsername = toID(parts[0]);
			let res = HeiwaValidator.uniqueRegistration(this.targetUser.id, pokecommunityUsername);
			if (res) throw new ErrorMessage(res);
			const trainerName = parts[1].trim();
			const location = toID(parts[2]);
			if (!HeiwaValidator.validLocation(location, true)) throw new ErrorMessage(`"${location}" is not a valid starting location.`);
			const starter = toID(parts[3]);
			if (!HeiwaValidator.validSpecies(starter)) throw new ErrorMessage(`"${starter}" is not a valid starter pokemon.`);

			const registration: HeiwaPlayerData = {
				userid: this.targetUser.id,
				pokecommunityUsername,
				trainerName,
				money: 3000,
				collection: new PokemonCollection(this.targetUser.id),
				location,
			};
			registration.collection.addPokemon(starter, 5);

			heiwaPlayers[this.targetUser.id] = registration;
			writeHeiwaPlayerData();
			this.sendReply(`${this.targetUser.name} has been registered in ${registration.location} with a starter of ${starter}.`);
		},
		registerhelp: [
			"/heiwa register [PS Username], [PokeCommunity Username], [Trainer Name], [Starting Location], [Starter Pokemon]",
			"Registers a user for Pokemon Heiwa.",
			"[PS! Username] is the user's username on showdown.",
			"[PokeCommunity Username] is the user's username of PokeCommunity.",
			"[Trainer Name] is the name for this player's trainer (not their username).",
			"[Starting Location] is a city or town in Heiwa for the player to start in.",
			"[Starter Pokemon] is a 1st stage pokemon for the player to start with.",
			"Requires: ~"
		],

		collection(target, room, user) {
			this.parse(`/join view-heiwa-collection${toID(target) ? `-${toID(target)}` : ''}`);
		},
		collectionhelp: [
			"/heiwa collection [PS Username] - View a user's collection. Requires ~ to view other's collections."
		],

		players(target, room, user) {
			this.parse(`/join view-heiwa-players`);
		},
		playershelp: [
			"/heiwa players - View registration info for players. Requires ~"
		],

		takemoney: 'givemoney',
		givemoney(target, room, user, connection, cmd) {
			this.checkCan('lockdown');
			if (!toID(target)) return this.parse('/help heiwa givemoney');
			target = this.splitTarget(target);
			if (!this.targetUser) throw new ErrorMessage(`The user "${this.targetUsername}" was not found.`);
			const player = heiwaPlayers[this.targetUser.id];
			if (!player) throw new ErrorMessage(`${this.targetUser.name} is not registered for Pokemon Heiwa.`);
			let amount = parseInt(target);
			if (isNaN(amount)) throw new ErrorMessage(`"${target}" is not a valid amount of money to ${cmd === 'givemoney' ? 'give' : 'take'}. (Must be an integer).`);
			if (amount < 1) throw new ErrorMessage(`The amount of money to ${cmd === 'givemoney' ? 'give' : 'take'} must be > 0.`);

			if (cmd === 'givemoney') {
				player.money += amount;
			} else {
				if (player.money - amount < 0) throw new ErrorMessage(`${this.targetUser.id} only has ${player.money} money. You cannot take more than that.`);
				player.money -= amount;
			}
			writeHeiwaPlayerData();

			this.sendReply(`${cmd === 'givemoney' ? 'Gave' : 'Took'} ${amount} money ${cmd === 'givemoney' ? 'to' : 'from'} ${this.targetUser.name}.`);
		},
		givemoneyhelp: [
			"/heiwa givemoney [user], [amount] - Gives the user [amount] money. Requires ~",
			"/heiwa takemoney [user], [amount] - Takes [amount] money from the user. Cannot be more money than the user has. Requires ~"
		],

		givepokemon(target, room, user) {
			this.checkCan('lockdown');
			if (!toID(target)) return this.parse('/help heiwa givepokemon');
			let args = this.splitTarget(target).split(',');
			if (!this.targetUser) throw new ErrorMessage(`The user "${this.targetUsername}" was not found.`);
			const player = heiwaPlayers[this.targetUser.id];
			if (!player) throw new ErrorMessage(`${this.targetUser.name} is not registered for Pokemon Heiwa.`);
			const species = toID(args[0]);
			if (!HeiwaValidator.validSpecies(species)) throw new ErrorMessage(`"${species}" is not a valid pokemon species.`);
			let level = parseInt(args[1]);
			if (isNaN(level)) throw new ErrorMessage(`${args[1]} is not a valid argument for level. (Must be an integer).`);
			if (level < 1 || level > 100) throw new ErrorMessage(`The level must be between 1 and 100 inclusive.`);
			const unlockingMoves = args.slice(2).map(m => toID(m));
			let error = HeiwaValidator.validMoves(unlockingMoves);
			if (error) throw new ErrorMessage(error);

			error = player.collection.addPokemon(species, level, unlockingMoves);
			if (error) throw new ErrorMessage(error);
			writeHeiwaPlayerData();

			this.sendReply(`${this.targetUser} was given a level ${level} ${species}${unlockingMoves.length ? `with the following moves unlocked: ${unlockingMoves.join(', ')}` : ''}.`);
		},
		givepokemonhelp: [
			"/heiwa givepokemon [user], [species], [level], [special moves] - Give a new pokemon to [user].",
			"[species] is the species to give.",
			"[level] is the level of the pokemon.",
			"[special moves] is a comma seperated list of TMs/TRs/Tutor Moves/Egg Moves to allow on this pokemon.",
			"Requires ~"
		],

		takepokemon(target, room, user) {
			this.checkCan('lockdown');
			if (!toID(target)) return this.parse('/help heiwa takepokemon');
			let args = this.splitTarget(target).split(',');
			if (!this.targetUser) throw new ErrorMessage(`The user "${this.targetUsername}" was not found.`);
			const player = heiwaPlayers[this.targetUser.id];
			if (!player) throw new ErrorMessage(`${this.targetUser.name} is not registered for Pokemon Heiwa.`);
			const species = toID(args[0]);
			if (!HeiwaValidator.validSpecies(species)) throw new ErrorMessage(`"${species}" is not a valid pokemon species.`);
			let sid = parseInt(args[1]);
			if (isNaN(sid)) throw new ErrorMessage(`${args[1]} is not a valid SID. (Must be an integer).`);

			let error = player.collection.removePokemon(species, sid);
			if (error) throw new ErrorMessage(error);
			writeHeiwaPlayerData();

			this.sendReply(`Removed ${this.targetUser.name}'s ${species} with an SID of ${sid}.`);
		},
		takepokemonhelp: [
			"/heiwa takepokemon [user], [species], [SID] - Takes a pokemon from the user (and deletes it).",
			"[species] is the species of the pokemon to take.",
			"[SID] is the unique species identifier of the pokemon you are taking.",
			"Use /heiwa collection [user] to view this user's collection and find the SID of the pokemon you are taking.",
			"Requires ~"
		]
	},

	// Redirect /heiwa and /heiwa help to /help heiwa
	'': 'help',
	help() {
		this.parse("/help heiwa");
	},
	heiwahelp: [
		"Pokemon Heiwa Commands.",
		"Most Heiwa commands have more detailed help information than provided here.",
		"Use /help heiwa [command] to access that more detailed help.",
		"/heiwa register [PS Username], [PokeCommunity Username], [Trainer Name], [Starting Location], [Starter Pokemon] Requires ~",
		"/heiwa collection [PS Username] - View a user's collection. Requires ~ to view other's collections.",
		"/heiwa players - View registration info for players. Requires ~",
		"/heiwa givemoney [user], [amount] - Gives the user [amount] money. Requires ~",
		"/heiwa takemoney [user], [amount] - Takes [amount] money from the user. Cannot be more money than the user has. Requires ~",
		"/heiwa givepokemon [user], [species], [level], [special moves] - Give a new pokemon to [user]. Requires ~",
		"/heiwa takepokemon [user], [species], [SID] - Takes a pokemon from the user (and deletes it). Requires ~"
	],
};
