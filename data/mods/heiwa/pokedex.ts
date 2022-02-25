export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	chikorita: {
		num: 1,
		name: "Chikorita",
		types: ["Grass"],
		baseStats: {hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45},
		abilities: {0: "Overgrow"},
	},
	bayleef: {
		num: 2,
		name: "Bayleef",
		types: ["Grass"],
		baseStats: {hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60},
		abilities: {0: "Overgrow"},
		prevo: "Chikorita",
	},
	meganium: {
		num: 3,
		name: "Meganium",
		types: ["Grass"],
		baseStats: {hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80},
		abilities: {0: "Overgrow"},
		prevo: "Bayleef",
	},
	cyndaquil: {
		num: 4,
		name: "Cyndaquil",
		types: ["Fire"],
		baseStats: {hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65},
		abilities: {0: "Blaze"},
	},
	quilava: {
		num: 5,
		name: "Quilava",
		types: ["Fire"],
		baseStats: {hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80},
		abilities: {0: "Blaze"},
		prevo: "Cyndaquil",
	},
	typhlosion: {
		num: 6,
		name: "Typhlosion",
		types: ["Fire"],
		baseStats: {hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100},
		abilities: {0: "Blaze"},
		prevo: "Quilava",
	},
	totodile: {
		num: 7,
		name: "Totodile",
		types: ["Water"],
		baseStats: {hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43},
		abilities: {0: "Torrent"},
	},
	croconaw: {
		num: 8,
		name: "Croconaw",
		types: ["Water"],
		baseStats: {hp: 65, atk: 80, def: 80, spa: 59, spd: 63, spe: 58},
		abilities: {0: "Torrent"},
		prevo: "Totodile",
	},
	feraligatr: {
		num: 9,
		name: "Feraligatr",
		types: ["Water"],
		baseStats: {hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78},
		abilities: {0: "Torrent"},
		prevo: "Croconaw",
	},
	zigzagoon: {
		num: 10,
		name: "Zigzagoon",
		types: ["Normal"],
		baseStats: {hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60},
		abilities: {0: "Pickup", 1: "Quick Feet"},
	},
	linoone: {
		num: 11,
		name: "Linoone",
		types: ["Normal"],
		baseStats: {hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100},
		abilities: {0: "Pickup", 1: "Quick Feet"},
		prevo: "Zigzagoon",
	},
	surskit: {
		num: 12,
		name: "Surskit",
		types: ["Bug", "Water"],
		baseStats: {hp: 40, atk: 30, def: 32, spa: 50, spd: 52, spe: 65},
		abilities: {0: "Swift Swim"},
	},
	masquerain: {
		num: 13,
		name: "Masquerain",
		types: ["Bug", "Flying"],
		baseStats: {hp: 70, atk: 60, def: 62, spa: 80, spd: 82, spe: 60},
		abilities: {0: "Intimidate"},
		prevo: "Surskit",
	},
	wingull: {
		num: 14,
		name: "Wingull",
		types: ["Water", "Flying"],
		baseStats: {hp: 40, atk: 30, def: 30, spa: 55, spd: 30, spe: 85},
		abilities: {0: "Keen Eye"},
	},
	pelipper: {
		num: 15,
		name: "Pelipper",
		types: ["Water", "Flying"],
		baseStats: {hp: 60, atk: 50, def: 100, spa: 85, spd: 70, spe: 65},
		abilities: {0: "Keen Eye"},
		prevo: "Wingull",
	},
	taillow: {
		num: 16,
		name: "Taillow",
		types: ["Normal", "Flying"],
		baseStats: {hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 85},
		abilities: {0: "Guts", 1: "Scrappy"},
	},
	swellow: {
		num: 17,
		name: "Swellow",
		types: ["Normal", "Flying"],
		baseStats: {hp: 60, atk: 85, def: 60, spa: 50, spd: 50, spe: 125},
		abilities: {0: "Guts", 1: "Scrappy"},
		prevo: "Taillow",
	},
	lotad: {
		num: 18,
		name: "Lotad",
		types: ["Water", "Grass"],
		baseStats: {hp: 40, atk: 30, def: 30, spa: 40, spd: 50, spe: 30},
		abilities: {0: "Swift Swim", 1: "Rain Dish"},
	},
	lombre: {
		num: 19,
		name: "Lombre",
		types: ["Water", "Grass"],
		baseStats: {hp: 60, atk: 50, def: 50, spa: 60, spd: 70, spe: 50},
		abilities: {0: "Swift Swim", 1: "Rain Dish"},
		prevo: "Lotad",
	},
	ludicolo: {
		num: 20,
		name: "Ludicolo",
		types: ["Water", "Grass"],
		baseStats: {hp: 80, atk: 70, def: 70, spa: 90, spd: 100, spe: 70},
		abilities: {0: "Swift Swim", 1: "Rain Dish"},
		prevo: "Lombre",
	},
	sewaddle: {
		num: 21,
		name: "Sewaddle",
		types: ["Bug", "Grass"],
		baseStats: {hp: 45, atk: 53, def: 70, spa: 40, spd: 60, spe: 42},
		abilities: {0: "Swarm", 1: "Chlorophyll"},
	},
	swadloon: {
		num: 22,
		name: "Swadloon",
		types: ["Bug", "Grass"],
		baseStats: {hp: 55, atk: 63, def: 90, spa: 50, spd: 80, spe: 42},
		abilities: {0: "Overcoat", 1: "Chlorophyll"},
		prevo: "Sewaddle",
	},
	leavanny: {
		num: 23,
		name: "Leavanny",
		types: ["Bug", "Grass"],
		baseStats: {hp: 75, atk: 103, def: 80, spa: 70, spd: 80, spe: 92},
		abilities: {0: "Swarm", 1: "Chlorophyll"},
		prevo: "Swadloon",
	},
	ekans: {
		num: 24,
		name: "Ekans",
		types: ["Poison"],
		baseStats: {hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55},
		abilities: {0: "Intimidate", 1: "Shed Skin"},
	},
	arbok: {
		num: 25,
		name: "Arbok",
		types: ["Poison"],
		baseStats: {hp: 60, atk: 85, def: 69, spa: 65, spd: 79, spe: 80},
		abilities: {0: "Intimidate", 1: "Shed Skin"},
		prevo: "Ekans",
	},
	wurmple: {
		num: 26,
		name: "Wurmple",
		types: ["Bug"],
		baseStats: {hp: 45, atk: 45, def: 35, spa: 20, spd: 30, spe: 20},
		abilities: {0: "Shield Dust", 1: "Shield Dust"},
	},
	silcoon: {
		num: 27,
		name: "Silcoon",
		types: ["Bug"],
		baseStats: {hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15},
		abilities: {0: "Shed Skin", 1: "Shed Skin"},
		prevo: "Wurmple",
	},
	beautifly: {
		num: 28,
		name: "Beautifly",
		types: ["Bug", "Flying"],
		baseStats: {hp: 60, atk: 70, def: 50, spa: 90, spd: 50, spe: 65},
		abilities: {0: "Swarm", 1: "Rivalry"},
		prevo: "Silcoon",
	},
	cascoon: {
		num: 29,
		name: "Cascoon",
		types: ["Bug"],
		baseStats: {hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15},
		abilities: {0: "Shed Skin", 1: "Shed Skin"},
		prevo: "Wurmple",
	},
	dustox: {
		num: 30,
		name: "Dustox",
		types: ["Bug", "Poison"],
		baseStats: {hp: 60, atk: 50, def: 70, spa: 50, spd: 90, spe: 65},
		abilities: {0: "Shield Dust", 1: "Compound Eyes"},
		prevo: "Cascoon",
	},
	pidgey: {
		num: 31,
		name: "Pidgey",
		types: ["Normal", "Flying"],
		baseStats: {hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56},
		abilities: {0: "Keen Eye", 1: "Big Pecks"},
	},
	pidgeotto: {
		num: 32,
		name: "Pidgeotto",
		types: ["Normal", "Flying"],
		baseStats: {hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71},
		abilities: {0: "Keen Eye", 1: "Big Pecks"},
		prevo: "Pidgey",
	},
	pidgeot: {
		num: 33,
		name: "Pidgeot",
		types: ["Normal", "Flying"],
		baseStats: {hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91},
		abilities: {0: "Keen Eye", 1: "Big Pecks"},
		prevo: "Pidgeotto",
	},
	oddish: {
		num: 34,
		name: "Oddish",
		types: ["Grass", "Poison"],
		baseStats: {hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30},
		abilities: {0: "Chlorophyll", 1: "Run Away"},
	},
	gloom: {
		num: 35,
		name: "Gloom",
		types: ["Grass", "Poison"],
		baseStats: {hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40},
		abilities: {0: "Chlorophyll", 1: "Stench"},
		prevo: "Oddish",
	},
	vileplume: {
		num: 36,
		name: "Vileplume",
		types: ["Grass", "Poison"],
		baseStats: {hp: 75, atk: 80, def: 85, spa: 100, spd: 90, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Effect Spore"},
		prevo: "Gloom",
	},
	bellossom: {
		num: 37,
		name: "Bellossom",
		types: ["Grass"],
		baseStats: {hp: 75, atk: 80, def: 85, spa: 90, spd: 100, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Healer"},
		prevo: "Gloom",
	},
	flabebe: {
		num: 38,
		name: "Flabébé",
		types: ["Fairy"],
		baseStats: {hp: 44, atk: 38, def: 39, spa: 61, spd: 79, spe: 42},
		abilities: {0: "Synchronize"},
	},
	floette: {
		num: 39,
		name: "Floette",
		types: ["Fairy"],
		baseStats: {hp: 54, atk: 45, def: 47, spa: 75, spd: 98, spe: 52},
		abilities: {0: "Synchronize"},
		prevo: "Flabébé",
	},
	florges: {
		num: 40,
		name: "Florges",
		types: ["Fairy"],
		baseStats: {hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75},
		abilities: {0: "Synchronize"},
		prevo: "Floette",
	},
	goldeen: {
		num: 41,
		name: "Goldeen",
		types: ["Water"],
		baseStats: {hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63},
		abilities: {0: "Swift Swim", 1: "Water Veil"},
	},
	seaking: {
		num: 42,
		name: "Seaking",
		types: ["Water"],
		baseStats: {hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68},
		abilities: {0: "Swift Swim", 1: "Water Veil"},
		prevo: "Goldeen",
	},
	carvanha: {
		num: 43,
		name: "Carvanha",
		types: ["Water", "Dark"],
		baseStats: {hp: 45, atk: 90, def: 20, spa: 65, spd: 20, spe: 65},
		abilities: {0: "Rough Skin", 1: "Speed Boost"},
	},
	sharpedo: {
		num: 44,
		name: "Sharpedo",
		types: ["Water", "Dark"],
		baseStats: {hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95},
		abilities: {0: "Rough Skin", 1: "Speed Boost"},
		prevo: "Carvanha",
	},
	lapras: {
		num: 45,
		name: "Lapras",
		types: ["Water", "Ice"],
		baseStats: {hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60},
		abilities: {0: "Water Absorb", 1: "Shell Armor"},
	},
	electrike: {
		num: 46,
		name: "Electrike",
		types: ["Electric"],
		baseStats: {hp: 40, atk: 45, def: 40, spa: 65, spd: 40, spe: 65},
		abilities: {0: "Static", 1: "Lightning Rod"},
	},
	manectric: {
		num: 47,
		name: "Manectric",
		types: ["Electric"],
		baseStats: {hp: 70, atk: 75, def: 60, spa: 105, spd: 60, spe: 105},
		abilities: {0: "Static", 1: "Lightning Rod"},
		prevo: "Electrike",
	},
	shroomish: {
		num: 48,
		name: "Shroomish",
		types: ["Grass"],
		baseStats: {hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35},
		abilities: {0: "Effect Spore", 1: "Quick Feet"},
	},
	breloom: {
		num: 49,
		name: "Breloom",
		types: ["Grass", "Fighting"],
		baseStats: {hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70},
		abilities: {0: "Poison Heal", 1: "Technician"},
		prevo: "Shroomish",
	},
	nincada: {
		num: 50,
		name: "Nincada",
		types: ["Bug", "Ground"],
		baseStats: {hp: 31, atk: 45, def: 90, spa: 30, spd: 30, spe: 40},
		abilities: {0: "Compound Eyes"},
	},
	ninjask: {
		num: 51,
		name: "Ninjask",
		types: ["Bug", "Flying"],
		baseStats: {hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160},
		abilities: {0: "Speed Boost"},
		prevo: "Nincada",
	},
	shedinja: {
		num: 52,
		name: "Shedinja",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40},
		abilities: {0: "Wonder Guard"},
		prevo: "Nincada",
	},
	heracross: {
		num: 53,
		name: "Heracross",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85},
		abilities: {0: "Swarm", 1: "Guts"},
	},
	slakoth: {
		num: 54,
		name: "Slakoth",
		types: ["Normal"],
		baseStats: {hp: 60, atk: 60, def: 60, spa: 35, spd: 35, spe: 30},
		abilities: {0: "Truant"},
	},
	vigoroth: {
		num: 55,
		name: "Vigoroth",
		types: ["Normal"],
		baseStats: {hp: 80, atk: 80, def: 80, spa: 55, spd: 55, spe: 90},
		abilities: {0: "Vital Spirit"},
		prevo: "Slakoth",
	},
	slaking: {
		num: 56,
		name: "Slaking",
		types: ["Normal"],
		baseStats: {hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100},
		abilities: {0: "Truant"},
		prevo: "Vigoroth",
	},
	gastly: {
		num: 57,
		name: "Gastly",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80},
		abilities: {0: "Levitate"},
	},
	haunter: {
		num: 58,
		name: "Haunter",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95},
		abilities: {0: "Levitate"},
		prevo: "Gastly",
	},
	gengar: {
		num: 59,
		name: "Gengar",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110},
		abilities: {0: "Levitate"},
		prevo: "Haunter",
	},
	emolga: {
		num: 60,
		name: "Emolga",
		types: ["Electric", "Flying"],
		baseStats: {hp: 55, atk: 75, def: 60, spa: 75, spd: 60, spe: 103},
		abilities: {0: "Static"},
	},
	torkoal: {
		num: 61,
		name: "Torkoal",
		types: ["Fire"],
		baseStats: {hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20},
		abilities: {0: "White Smoke"},
	},
	numel: {
		num: 62,
		name: "Numel",
		types: ["Fire", "Ground"],
		baseStats: {hp: 60, atk: 60, def: 40, spa: 65, spd: 45, spe: 35},
		abilities: {0: "Oblivious", 1: "Own Tempo"},
	},
	camerupt: {
		num: 63,
		name: "Camerupt",
		types: ["Fire", "Ground"],
		baseStats: {hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40},
		abilities: {0: "Magma Armor", 1: "Solid Rock"},
		prevo: "Numel",
	},
	swablu: {
		num: 64,
		name: "Swablu",
		types: ["Normal", "Flying"],
		baseStats: {hp: 45, atk: 40, def: 60, spa: 40, spd: 75, spe: 50},
		abilities: {0: "Natural Cure", 1: "Cloud Nine"},
	},
	altaria: {
		num: 65,
		name: "Altaria",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80},
		abilities: {0: "Natural Cure", 1: "Cloud Nine"},
		prevo: "Swablu",
	},
	lunatone: {
		num: 66,
		name: "Lunatone",
		types: ["Rock", "Psychic"],
		baseStats: {hp: 70, atk: 55, def: 65, spa: 95, spd: 85, spe: 70},
		abilities: {0: "Levitate"},
	},
	solrock: {
		num: 67,
		name: "Solrock",
		types: ["Rock", "Psychic"],
		baseStats: {hp: 70, atk: 95, def: 85, spa: 55, spd: 65, spe: 70},
		abilities: {0: "Levitate"},
	},
	roggenrola: {
		num: 68,
		name: "Roggenrola",
		types: ["Rock"],
		baseStats: {hp: 55, atk: 75, def: 85, spa: 25, spd: 25, spe: 15},
		abilities: {0: "Sturdy", 1: "Sand Force"},
	},
	boldore: {
		num: 69,
		name: "Boldore",
		types: ["Rock"],
		baseStats: {hp: 70, atk: 105, def: 105, spa: 50, spd: 40, spe: 20},
		abilities: {0: "Sturdy", 1: "Sand Force"},
		prevo: "Roggenrola",
	},
	gigalith: {
		num: 70,
		name: "Gigalith",
		types: ["Rock"],
		baseStats: {hp: 85, atk: 135, def: 130, spa: 60, spd: 70, spe: 25},
		abilities: {0: "Sturdy", 1: "Sand Force"},
		prevo: "Boldore",
	},
	zubat: {
		num: 71,
		name: "Zubat",
		types: ["Poison", "Flying"],
		baseStats: {hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55},
		abilities: {0: "Inner Focus", 1: "Infiltrator"},
	},
	golbat: {
		num: 72,
		name: "Golbat",
		types: ["Poison", "Flying"],
		baseStats: {hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90},
		abilities: {0: "Inner Focus", 1: "Infiltrator"},
		prevo: "Zubat",
	},
	crobat: {
		num: 73,
		name: "Crobat",
		types: ["Poison", "Flying"],
		baseStats: {hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130},
		abilities: {0: "Inner Focus", 1: "Infiltrator"},
		prevo: "Golbat",
	},
	sableye: {
		num: 74,
		name: "Sableye",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 50, atk: 75, def: 75, spa: 65, spd: 65, spe: 50},
		abilities: {0: "Keen Eye", 1: "Prankster"},
	},
	mawile: {
		num: 75,
		name: "Mawile",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 50, atk: 85, def: 85, spa: 55, spd: 55, spe: 50},
		abilities: {0: "Hyper Cutter", 1: "Intimidate"},
	},
	croagunk: {
		num: 76,
		name: "Croagunk",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 48, atk: 61, def: 40, spa: 61, spd: 40, spe: 50},
		abilities: {0: "Dry Skin"},
	},
	toxicroak: {
		num: 77,
		name: "Toxicroak",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 83, atk: 106, def: 65, spa: 86, spd: 65, spe: 85},
		abilities: {0: "Dry Skin"},
		prevo: "Croagunk",
	},
	solosis: {
		num: 78,
		name: "Solosis",
		types: ["Psychic"],
		baseStats: {hp: 45, atk: 30, def: 40, spa: 105, spd: 50, spe: 20},
		abilities: {0: "Overcoat", 1: "Regenerator"},
	},
	duosion: {
		num: 79,
		name: "Duosion",
		types: ["Psychic"],
		baseStats: {hp: 65, atk: 40, def: 50, spa: 125, spd: 60, spe: 30},
		abilities: {0: "Overcoat", 1: "Regenerator"},
		prevo: "Solosis",
	},
	reuniclus: {
		num: 80,
		name: "Reuniclus",
		types: ["Psychic"],
		baseStats: {hp: 110, atk: 65, def: 75, spa: 125, spd: 85, spe: 30},
		abilities: {0: "Overcoat", 1: "Regenerator"},
		prevo: "Duosion",
	},
	ralts: {
		num: 81,
		name: "Ralts",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 28, atk: 25, def: 25, spa: 45, spd: 35, spe: 40},
		abilities: {0: "Synchronize", 1: "Trace"},
	},
	kirlia: {
		num: 82,
		name: "Kirlia",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 38, atk: 35, def: 35, spa: 65, spd: 55, spe: 50},
		abilities: {0: "Synchronize", 1: "Trace"},
		prevo: "Ralts",
	},
	gardevoir: {
		num: 83,
		name: "Gardevoir",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80},
		abilities: {0: "Synchronize", 1: "Trace"},
		prevo: "Kirlia",
	},
	gallade: {
		num: 84,
		name: "Gallade",
		types: ["Water", "Psychic"],
		baseStats: {hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30},
		abilities: {0: "Own Tempo", 1: "Regenerator"},
		prevo: "Kirlia",
	},
	pichu: {
		num: 85,
		name: "Pichu",
		types: ["Electric"],
		baseStats: {hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60},
		abilities: {0: "Static"},
	},
	pikachu: {
		num: 86,
		name: "Pikachu",
		types: ["Electric"],
		baseStats: {hp: 35, atk: 55, def: 30, spa: 50, spd: 40, spe: 90},
		abilities: {0: "Static"},
		prevo: "Pichu",
	},
	raichu: {
		num: 87,
		name: "Raichu",
		types: ["Electric"],
		baseStats: {hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 100},
		abilities: {0: "Static"},
		prevo: "Pikachu",
	},
	duskull: {
		num: 88,
		name: "Duskull",
		types: ["Ghost"],
		baseStats: {hp: 20, atk: 40, def: 90, spa: 30, spd: 90, spe: 25},
		abilities: {0: "Levitate"},
	},
	dusclops: {
		num: 89,
		name: "Dusclops",
		types: ["Ghost"],
		baseStats: {hp: 40, atk: 70, def: 130, spa: 60, spd: 130, spe: 25},
		abilities: {0: "Pressure"},
		prevo: "Duskull",
	},
	dusknoir: {
		num: 90,
		name: "Dusknoir",
		types: ["Bug", "Poison"],
		baseStats: {hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 30},
		abilities: {0: "Swarm", 1: "Insomnia"},
		prevo: "Dusclops",
	},
	vanillite: {
		num: 91,
		name: "Vanillite",
		types: ["Ice"],
		baseStats: {hp: 36, atk: 50, def: 50, spa: 65, spd: 60, spe: 44},
		abilities: {0: "Ice Body"},
	},
	vanillish: {
		num: 92,
		name: "Vanillish",
		types: ["Normal", "Flying"],
		baseStats: {hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75},
		abilities: {0: "Run Away", 1: "Early Bird"},
		prevo: "Vanillite",
	},
	vanilluxe: {
		num: 93,
		name: "Vanilluxe",
		types: ["Normal", "Flying"],
		baseStats: {hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100},
		abilities: {0: "Run Away", 1: "Early Bird"},
		prevo: "Vanillish",
	},
	chatot: {
		num: 94,
		name: "Chatot",
		types: ["Normal", "Flying"],
		baseStats: {hp: 76, atk: 65, def: 45, spa: 92, spd: 42, spe: 91},
		abilities: {0: "Keen Eye", 1: "Tangled Feet"},
	},
	munchlax: {
		num: 95,
		name: "Munchlax",
		types: ["Ice", "Psychic"],
		baseStats: {hp: 45, atk: 30, def: 15, spa: 85, spd: 65, spe: 65},
		abilities: {0: "Oblivious", 1: "Hydration"},
	},
	snorlax: {
		num: 96,
		name: "Snorlax",
		types: ["Normal"],
		baseStats: {hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30},
		abilities: {0: "Immunity", 1: "Thick Fat"},
		prevo: "Munchlax",
	},
	luvdisc: {
		num: 97,
		name: "Luvdisc",
		types: ["Water"],
		baseStats: {hp: 43, atk: 30, def: 55, spa: 40, spd: 65, spe: 97},
		abilities: {0: "Swift Swim", 1: "Hydration"},
	},
	tentacool: {
		num: 98,
		name: "Tentacool",
		types: ["Water", "Poison"],
		baseStats: {hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70},
		abilities: {0: "Clear Body", 1: "Liquid Ooze"},
	},
	tentacruel: {
		num: 99,
		name: "Tentacruel",
		types: ["Water", "Poison"],
		baseStats: {hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100},
		abilities: {0: "Clear Body", 1: "Liquid Ooze"},
		prevo: "Tentacool",
	},
	combee: {
		num: 100,
		name: "Combee",
		types: ["Bug", "Flying"],
		baseStats: {hp: 30, atk: 30, def: 42, spa: 30, spd: 42, spe: 70},
		abilities: {0: "Hustle"},
	},
	vespiquen: {
		num: 101,
		name: "Vespiquen",
		types: ["Bug", "Flying"],
		baseStats: {hp: 70, atk: 80, def: 102, spa: 80, spd: 102, spe: 40},
		abilities: {0: "Pressure"},
		prevo: "Combee",
	},
	buneary: {
		num: 102,
		name: "Buneary",
		types: ["Normal"],
		baseStats: {hp: 55, atk: 66, def: 44, spa: 44, spd: 56, spe: 85},
		abilities: {0: "Run Away", 1: "Limber"},
	},
	lopunny: {
		num: 103,
		name: "Lopunny",
		types: ["Normal"],
		baseStats: {hp: 65, atk: 76, def: 84, spa: 54, spd: 96, spe: 105},
		abilities: {0: "Cute Charm", 1: "Limber"},
		prevo: "Buneary",
	},
	mienfoo: {
		num: 104,
		name: "Mienfoo",
		types: ["Fighting"],
		baseStats: {hp: 45, atk: 85, def: 50, spa: 55, spd: 50, spe: 65},
		abilities: {0: "Inner Focus", 1: "Regenerator"},
	},
	mienshao: {
		num: 105,
		name: "Mienshao",
		types: ["Fighting"],
		baseStats: {hp: 65, atk: 125, def: 60, spa: 95, spd: 60, spe: 105},
		abilities: {0: "Inner Focus", 1: "Regenerator"},
		prevo: "Mienfoo",
	},
	timburr: {
		num: 106,
		name: "Timburr",
		types: ["Fighting"],
		baseStats: {hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35},
		abilities: {0: "Guts", 1: "Iron Fist"},
	},
	gurdurr: {
		num: 107,
		name: "Gurdurr",
		types: ["Fighting"],
		baseStats: {hp: 85, atk: 105, def: 85, spa: 40, spd: 50, spe: 40},
		abilities: {0: "Guts", 1: "Iron Fist"},
		prevo: "Timburr",
	},
	conkeldurr: {
		num: 108,
		name: "Conkeldurr",
		types: ["Fighting"],
		baseStats: {hp: 105, atk: 140, def: 95, spa: 55, spd: 65, spe: 45},
		abilities: {0: "Guts", 1: "Iron Fist"},
		prevo: "Gurdurr",
	},
	mareep: {
		num: 109,
		name: "Mareep",
		types: ["Electric"],
		baseStats: {hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35},
		abilities: {0: "Static"},
	},
	flaaffy: {
		num: 110,
		name: "Flaaffy",
		types: ["Electric"],
		baseStats: {hp: 70, atk: 55, def: 55, spa: 80, spd: 60, spe: 45},
		abilities: {0: "Static"},
		prevo: "Mareep",
	},
	ampharos: {
		num: 111,
		name: "Ampharos",
		types: ["Electric"],
		baseStats: {hp: 90, atk: 75, def: 75, spa: 115, spd: 90, spe: 55},
		abilities: {0: "Static"},
		prevo: "Flaaffy",
	},
	miltank: {
		num: 112,
		name: "Miltank",
		types: ["Normal"],
		baseStats: {hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100},
		abilities: {0: "Thick Fat", 1: "Scrappy"},
	},
	bouffalant: {
		num: 113,
		name: "Bouffalant",
		types: ["Ice", "Psychic"],
		baseStats: {hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95},
		abilities: {0: "Oblivious", 1: "Dry Skin"},
	},
	ponyta: {
		num: 114,
		name: "Ponyta",
		types: ["Fire"],
		baseStats: {hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90},
		abilities: {0: "Run Away", 1: "Flash Fire"},
	},
	rapidash: {
		num: 115,
		name: "Rapidash",
		types: ["Fire"],
		baseStats: {hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
		abilities: {0: "Run Away", 1: "Flash Fire"},
		prevo: "Ponyta",
	},
	spoink: {
		num: 116,
		name: "Spoink",
		types: ["Psychic"],
		baseStats: {hp: 60, atk: 25, def: 35, spa: 70, spd: 80, spe: 60},
		abilities: {0: "Thick Fat", 1: "Own Tempo"},
	},
	grumpig: {
		num: 117,
		name: "Grumpig",
		types: ["Psychic"],
		baseStats: {hp: 80, atk: 45, def: 65, spa: 90, spd: 110, spe: 80},
		abilities: {0: "Thick Fat", 1: "Own Tempo"},
		prevo: "Spoink",
	},
	murkrow: {
		num: 118,
		name: "Murkrow",
		types: ["Dark", "Flying"],
		baseStats: {hp: 60, atk: 85, def: 42, spa: 85, spd: 42, spe: 91},
		abilities: {0: "Insomnia", 1: "Super Luck"},
	},
	honchkrow: {
		num: 119,
		name: "Honchkrow",
		types: ["Bug", "Flying"],
		baseStats: {hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 85},
		abilities: {0: "Swarm", 1: "Early Bird"},
		prevo: "Murkrow",
	},
	smeargle: {
		num: 120,
		name: "Smeargle",
		types: ["Normal"],
		baseStats: {hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75},
		abilities: {0: "Own Tempo", 1: "Moody"},
	},
	natu: {
		num: 121,
		name: "Natu",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 40, atk: 50, def: 45, spa: 70, spd: 45, spe: 70},
		abilities: {0: "Synchronize", 1: "Magic Bounce"},
	},
	xatu: {
		num: 122,
		name: "Xatu",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 95},
		abilities: {0: "Synchronize", 1: "Magic Bounce"},
		prevo: "Natu",
	},
	mimejr: {
		num: 123,
		name: "Mime Jr.",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 20, atk: 25, def: 45, spa: 70, spd: 90, spe: 60},
		abilities: {0: "Soundproof", 1: "Filter"},
	},
	mrmime: {
		num: 124,
		name: "Mr. Mime",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90},
		abilities: {0: "Soundproof", 1: "Filter"},
		prevo: "Mime Jr.",
	},
	misdreavus: {
		num: 125,
		name: "Misdreavus",
		types: ["Ghost"],
		baseStats: {hp: 60, atk: 60, def: 60, spa: 85, spd: 85, spe: 85},
		abilities: {0: "Levitate"},
	},
	mismagius: {
		num: 126,
		name: "Mismagius",
		types: ["Bug", "Flying"],
		baseStats: {hp: 40, atk: 20, def: 30, spa: 40, spd: 80, spe: 55},
		abilities: {0: "Swarm", 1: "Early Bird"},
		prevo: "Misdreavus",
	},
	aipom: {
		num: 127,
		name: "Aipom",
		types: ["Normal"],
		baseStats: {hp: 55, atk: 70, def: 55, spa: 40, spd: 55, spe: 85},
		abilities: {0: "Run Away", 1: "Pickup"},
	},
	ambipom: {
		num: 128,
		name: "Ambipom",
		types: ["Normal"],
		baseStats: {hp: 75, atk: 100, def: 66, spa: 60, spd: 66, spe: 115},
		abilities: {0: "Technician", 1: "Pickup"},
		prevo: "Aipom",
	},
	carnivine: {
		num: 129,
		name: "Carnivine",
		types: ["Normal"],
		baseStats: {hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30},
		abilities: {0: "Own Tempo", 1: "Oblivious"},
	},
	yanma: {
		num: 130,
		name: "Yanma",
		types: ["Bug", "Flying"],
		baseStats: {hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95},
		abilities: {0: "Speed Boost", 1: "Compound Eyes"},
	},
	yanmega: {
		num: 131,
		name: "Yanmega",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 70, atk: 80, def: 65, spa: 90, spd: 65, spe: 85},
		abilities: {0: "Inner Focus", 1: "Sap Sipper"},
		prevo: "Yanma",
	},
	tropius: {
		num: 132,
		name: "Tropius",
		types: ["Grass", "Flying"],
		baseStats: {hp: 99, atk: 68, def: 83, spa: 72, spd: 87, spe: 51},
		abilities: {0: "Chlorophyll", 1: "Solar Power"},
	},
	snorunt: {
		num: 133,
		name: "Snorunt",
		types: ["Ice"],
		baseStats: {hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50},
		abilities: {0: "Inner Focus", 1: "Ice Body"},
	},
	glalie: {
		num: 134,
		name: "Glalie",
		types: ["Ice"],
		baseStats: {hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80},
		abilities: {0: "Inner Focus", 1: "Ice Body"},
		prevo: "Snorunt",
	},
	froslass: {
		num: 135,
		name: "Froslass",
		types: ["Bug", "Poison"],
		baseStats: {hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 40},
		abilities: {0: "Swarm", 1: "Insomnia"},
		prevo: "Snorunt",
	},
	corphish: {
		num: 136,
		name: "Corphish",
		types: ["Water"],
		baseStats: {hp: 43, atk: 80, def: 65, spa: 50, spd: 35, spe: 35},
		abilities: {0: "Hyper Cutter", 1: "Adaptability"},
	},
	crawdaunt: {
		num: 137,
		name: "Crawdaunt",
		types: ["Water", "Dark"],
		baseStats: {hp: 63, atk: 120, def: 85, spa: 90, spd: 55, spe: 55},
		abilities: {0: "Hyper Cutter", 1: "Adaptability"},
		prevo: "Corphish",
	},
	feebas: {
		num: 138,
		name: "Feebas",
		types: ["Water"],
		baseStats: {hp: 20, atk: 15, def: 20, spa: 10, spd: 55, spe: 80},
		abilities: {0: "Swift Swim", 1: "Adaptability"},
	},
	milotic: {
		num: 139,
		name: "Milotic",
		types: ["Water"],
		baseStats: {hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81},
		abilities: {0: "Marvel Scale", 1: "Cute Charm"},
		prevo: "Feebas",
	},
	magikarp: {
		num: 140,
		name: "Magikarp",
		types: ["Water"],
		baseStats: {hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80},
		abilities: {0: "Swift Swim"},
	},
	gyarados: {
		num: 141,
		name: "Gyarados",
		types: ["Water", "Flying"],
		baseStats: {hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81},
		abilities: {0: "Intimidate"},
		prevo: "Magikarp",
	},
	staryu: {
		num: 142,
		name: "Staryu",
		types: ["Water"],
		baseStats: {hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85},
		abilities: {0: "Illuminate", 1: "Natural Cure"},
	},
	starmie: {
		num: 143,
		name: "Starmie",
		types: ["Water", "Psychic"],
		baseStats: {hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115},
		abilities: {0: "Illuminate", 1: "Natural Cure"},
		prevo: "Staryu",
	},
	azurill: {
		num: 144,
		name: "Azurill",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 50, atk: 20, def: 40, spa: 20, spd: 40, spe: 20},
		abilities: {0: "Thick Fat", 1: "Huge Power"},
	},
	marill: {
		num: 145,
		name: "Marill",
		types: ["Water", "Fairy"],
		baseStats: {hp: 70, atk: 20, def: 50, spa: 20, spd: 50, spe: 40},
		abilities: {0: "Thick Fat", 1: "Huge Power"},
		prevo: "Azurill",
	},
	azumarill: {
		num: 146,
		name: "Azumarill",
		types: ["Water", "Fairy"],
		baseStats: {hp: 100, atk: 50, def: 80, spa: 50, spd: 80, spe: 50},
		abilities: {0: "Thick Fat", 1: "Huge Power"},
		prevo: "Marill",
	},
	kecleon: {
		num: 147,
		name: "Kecleon",
		types: ["Normal"],
		baseStats: {hp: 60, atk: 90, def: 70, spa: 60, spd: 120, spe: 40},
		abilities: {0: "Color Change"},
	},
	larvesta: {
		num: 148,
		name: "Larvesta",
		types: ["Bug", "Fire"],
		baseStats: {hp: 55, atk: 85, def: 55, spa: 50, spd: 55, spe: 60},
		abilities: {0: "Flame Body"},
	},
	volcarona: {
		num: 149,
		name: "Volcarona",
		types: ["Bug", "Fire"],
		baseStats: {hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100},
		abilities: {0: "Flame Body"},
		prevo: "Larvesta",
	},
	corsola: {
		num: 150,
		name: "Corsola",
		types: ["Water", "Rock"],
		baseStats: {hp: 55, atk: 55, def: 85, spa: 65, spd: 85, spe: 35},
		abilities: {0: "Natural Cure", 1: "Regenerator"},
	},
	fletchling: {
		num: 151,
		name: "Fletchling",
		types: ["Normal", "Flying"],
		baseStats: {hp: 45, atk: 50, def: 43, spa: 40, spd: 38, spe: 62},
		abilities: {0: "Big Pecks", 1: "Gale Wings"},
	},
	fletchinder: {
		num: 152,
		name: "Fletchinder",
		types: ["Fire", "Flying"],
		baseStats: {hp: 62, atk: 73, def: 55, spa: 56, spd: 52, spe: 84},
		abilities: {0: "Flame Body", 1: "Gale Wings"},
		prevo: "Fletchling",
	},
	talonflame: {
		num: 153,
		name: "Talonflame",
		types: ["Fire", "Flying"],
		baseStats: {hp: 78, atk: 81, def: 71, spa: 74, spd: 69, spe: 126},
		abilities: {0: "Flame Body", 1: "Gale Wings"},
		prevo: "Fletchinder",
	},
	spheal: {
		num: 154,
		name: "Spheal",
		types: ["Ice", "Water"],
		baseStats: {hp: 70, atk: 40, def: 50, spa: 55, spd: 50, spe: 25},
		abilities: {0: "Thick Fat", 1: "Ice Body"},
	},
	sealeo: {
		num: 155,
		name: "Sealeo",
		types: ["Ice", "Water"],
		baseStats: {hp: 90, atk: 60, def: 70, spa: 75, spd: 70, spe: 45},
		abilities: {0: "Thick Fat", 1: "Ice Body"},
		prevo: "Spheal",
	},
	walrein: {
		num: 156,
		name: "Walrein",
		types: ["Ice", "Water"],
		baseStats: {hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65},
		abilities: {0: "Thick Fat", 1: "Ice Body"},
		prevo: "Sealeo",
	},
	tirtouga: {
		num: 157,
		name: "Tirtouga",
		types: ["Water", "Rock"],
		baseStats: {hp: 54, atk: 78, def: 103, spa: 53, spd: 45, spe: 22},
		abilities: {0: "Solid Rock", 1: "Sturdy"},
	},
	carracosta: {
		num: 158,
		name: "Carracosta",
		types: ["Water", "Rock"],
		baseStats: {hp: 74, atk: 108, def: 133, spa: 83, spd: 65, spe: 32},
		abilities: {0: "Solid Rock", 1: "Sturdy"},
		prevo: "Tirtouga",
	},
	skrelp: {
		num: 159,
		name: "Skrelp",
		types: ["Poison", "Water"],
		baseStats: {hp: 50, atk: 60, def: 60, spa: 60, spd: 60, spe: 30},
		abilities: {0: "Poison Point", 1: "Poison Heal"},
	},
	dragalge: {
		num: 160,
		name: "Dragalge",
		types: ["Poison", "Dragon"],
		baseStats: {hp: 65, atk: 75, def: 90, spa: 97, spd: 123, spe: 44},
		abilities: {0: "Poison Point", 1: "Poison Heal"},
		prevo: "Skrelp",
	},
	trapinch: {
		num: 161,
		name: "Trapinch",
		types: ["Ground"],
		baseStats: {hp: 45, atk: 100, def: 45, spa: 45, spd: 45, spe: 10},
		abilities: {0: "Hyper Cutter", 1: "Arena Trap"},
	},
	vibrava: {
		num: 162,
		name: "Vibrava",
		types: ["Ground", "Dragon"],
		baseStats: {hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 70},
		abilities: {0: "Levitate", 1: "Levitate"},
		prevo: "Trapinch",
	},
	flygon: {
		num: 163,
		name: "Flygon",
		types: ["Ground", "Dragon"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100},
		abilities: {0: "Levitate", 1: "Levitate"},
		prevo: "Vibrava",
	},
	chingling: {
		num: 164,
		name: "Chingling",
		types: ["Psychic"],
		baseStats: {hp: 45, atk: 30, def: 50, spa: 65, spd: 50, spe: 45},
		abilities: {0: "Levitate"},
	},
	chimecho: {
		num: 165,
		name: "Chimecho",
		types: ["Psychic"],
		baseStats: {hp: 65, atk: 50, def: 70, spa: 95, spd: 80, spe: 65},
		abilities: {0: "Levitate"},
		prevo: "Chingling",
	},
	budew: {
		num: 166,
		name: "Budew",
		types: ["Grass", "Poison"],
		baseStats: {hp: 40, atk: 30, def: 35, spa: 50, spd: 70, spe: 55},
		abilities: {0: "Natural Cure", 1: "Poison Point"},
	},
	roselia: {
		num: 167,
		name: "Roselia",
		types: ["Grass", "Poison"],
		baseStats: {hp: 50, atk: 60, def: 45, spa: 100, spd: 80, spe: 65},
		abilities: {0: "Natural Cure", 1: "Poison Point"},
		prevo: "Budew",
	},
	petilil: {
		num: 168,
		name: "Petilil",
		types: ["Grass"],
		baseStats: {hp: 45, atk: 35, def: 50, spa: 70, spd: 50, spe: 30},
		abilities: {0: "Chlorophyll", 1: "Own Tempo"},
	},
	lilligant: {
		num: 169,
		name: "Lilligant",
		types: ["Grass"],
		baseStats: {hp: 70, atk: 60, def: 75, spa: 110, spd: 75, spe: 90},
		abilities: {0: "Chlorophyll", 1: "Own Tempo"},
		prevo: "Petilil",
	},
	roserade: {
		num: 170,
		name: "Roserade",
		types: ["Grass", "Poison"],
		baseStats: {hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 90},
		abilities: {0: "Natural Cure", 1: "Poison Point"},
		prevo: "Roselia",
	},
	bronzor: {
		num: 171,
		name: "Bronzor",
		types: ["Steel", "Psychic"],
		baseStats: {hp: 57, atk: 24, def: 86, spa: 24, spd: 86, spe: 23},
		abilities: {0: "Levitate", 1: "Heatproof"},
	},
	bronzong: {
		num: 172,
		name: "Bronzong",
		types: ["Steel", "Psychic"],
		baseStats: {hp: 67, atk: 89, def: 116, spa: 79, spd: 116, spe: 33},
		abilities: {0: "Levitate", 1: "Heatproof"},
		prevo: "Bronzor",
	},
	gothita: {
		num: 173,
		name: "Gothita",
		types: ["Psychic"],
		baseStats: {hp: 45, atk: 30, def: 50, spa: 55, spd: 65, spe: 45},
		abilities: {0: "Shadow Tag"},
	},
	gothorita: {
		num: 174,
		name: "Gothorita",
		types: ["Psychic"],
		baseStats: {hp: 60, atk: 45, def: 70, spa: 75, spd: 85, spe: 55},
		abilities: {0: "Shadow Tag"},
		prevo: "Gothita",
	},
	gothitelle: {
		num: 175,
		name: "Gothitelle",
		types: ["Psychic"],
		baseStats: {hp: 70, atk: 55, def: 95, spa: 95, spd: 110, spe: 65},
		abilities: {0: "Shadow Tag"},
		prevo: "Gothorita",
	},
	togepi: {
		num: 176,
		name: "Togepi",
		types: ["Fairy"],
		baseStats: {hp: 35, atk: 20, def: 65, spa: 40, spd: 65, spe: 20},
		abilities: {0: "Hustle", 1: "Serene Grace"},
	},
	togetic: {
		num: 177,
		name: "Togetic",
		types: ["Fairy", "Flying"],
		baseStats: {hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40},
		abilities: {0: "Hustle", 1: "Serene Grace"},
		prevo: "Togepi",
	},
	togekiss: {
		num: 178,
		name: "Togekiss",
		types: ["Fairy", "Flying"],
		baseStats: {hp: 85, atk: 50, def: 95, spa: 120, spd: 115, spe: 80},
		abilities: {0: "Hustle", 1: "Serene Grace"},
		prevo: "Togetic",
	},
	audino: {
		num: 179,
		name: "Audino",
		types: ["Normal"],
		baseStats: {hp: 73, atk: 115, def: 60, spa: 60, spd: 60, spe: 90},
		abilities: {0: "Immunity"},
	},
	lileep: {
		num: 180,
		name: "Lileep",
		types: ["Rock", "Grass"],
		baseStats: {hp: 66, atk: 41, def: 77, spa: 61, spd: 87, spe: 23},
		abilities: {0: "Suction Cups", 1: "Storm Drain"},
	},
	cradily: {
		num: 181,
		name: "Cradily",
		types: ["Rock", "Grass"],
		baseStats: {hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43},
		abilities: {0: "Suction Cups", 1: "Storm Drain"},
		prevo: "Lileep",
	},
	anorith: {
		num: 182,
		name: "Anorith",
		types: ["Rock", "Bug"],
		baseStats: {hp: 45, atk: 95, def: 50, spa: 40, spd: 50, spe: 75},
		abilities: {0: "Battle Armor", 1: "Swift Swim"},
	},
	armaldo: {
		num: 183,
		name: "Armaldo",
		types: ["Rock", "Bug"],
		baseStats: {hp: 75, atk: 125, def: 100, spa: 70, spd: 80, spe: 45},
		abilities: {0: "Battle Armor", 1: "Swift Swim"},
		prevo: "Anorith",
	},
	omanyte: {
		num: 184,
		name: "Omanyte",
		types: ["Rock", "Water"],
		baseStats: {hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35},
		abilities: {0: "Swift Swim", 1: "Shell Armor"},
	},
	omastar: {
		num: 185,
		name: "Omastar",
		types: ["Rock", "Water"],
		baseStats: {hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55},
		abilities: {0: "Swift Swim", 1: "Shell Armor"},
		prevo: "Omanyte",
	},
	kabuto: {
		num: 186,
		name: "Kabuto",
		types: ["Rock", "Water"],
		baseStats: {hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55},
		abilities: {0: "Swift Swim", 1: "Battle Armor"},
	},
	kabutops: {
		num: 187,
		name: "Kabutops",
		types: ["Rock", "Water"],
		baseStats: {hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80},
		abilities: {0: "Swift Swim", 1: "Battle Armor"},
		prevo: "Kabuto",
	},
	aerodactyl: {
		num: 188,
		name: "Aerodactyl",
		types: ["Rock", "Flying"],
		baseStats: {hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130},
		abilities: {0: "Rock Head", 1: "Pressure"},
	},
	dratini: {
		num: 189,
		name: "Dratini",
		types: ["Dragon"],
		baseStats: {hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50},
		abilities: {0: "Shed Skin", 1: "Marvel Scale"},
	},
	dragonair: {
		num: 190,
		name: "Dragonair",
		types: ["Dragon"],
		baseStats: {hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Shed Skin", 1: "Marvel Scale"},
		prevo: "Dratini",
	},
	dragonite: {
		num: 191,
		name: "Dragonite",
		types: ["Dragon", "Flying"],
		baseStats: {hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80},
		abilities: {0: "Inner Focus", 1: "Multiscale"},
		prevo: "Dragonair",
	},
	phione: {
		num: 192,
		name: "Phione",
		types: ["Ground"],
		baseStats: {hp: 90, atk: 60, def: 60, spa: 40, spd: 40, spe: 40},
		abilities: {0: "Pickup"},
	},
	manaphy: {
		num: 193,
		name: "Manaphy",
		types: ["Ground"],
		baseStats: {hp: 90, atk: 120, def: 120, spa: 60, spd: 60, spe: 50},
		abilities: {0: "Sturdy"},
	},
	articuno: {
		num: 194,
		name: "Articuno",
		types: ["Ice", "Flying"],
		baseStats: {hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85},
		abilities: {0: "Pressure"},
	},
	zapdos: {
		num: 195,
		name: "Zapdos",
		types: ["Electric", "Flying"],
		baseStats: {hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100},
		abilities: {0: "Pressure"},
	},
	moltres: {
		num: 196,
		name: "Moltres",
		types: ["Fire", "Flying"],
		baseStats: {hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90},
		abilities: {0: "Pressure"},
	},
	lugia: {
		num: 197,
		name: "Lugia",
		types: ["Psychic", "Flying"],
		baseStats: {hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110},
		abilities: {0: "Pressure", 1: "Multiscale"},
	},
	hooh: {
		num: 198,
		name: "Ho-Oh",
		types: ["Fire", "Flying"],
		baseStats: {hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90},
		abilities: {0: "Pressure", 1: "Regenerator"},
	},
	shaymin: {
		num: 199,
		name: "Shaymin",
		types: ["Rock"],
		baseStats: {hp: 30, atk: 45, def: 135, spa: 45, spd: 90, spe: 30},
		abilities: {0: "Sturdy", 1: "Magnet Pull"},
	},
	shayminsky: {
		num: 199,
		name: "ShayminSky",
		types: ["Rock"],
		baseStats: {hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50},
		abilities: {0: "Clear Body"},
	},
};