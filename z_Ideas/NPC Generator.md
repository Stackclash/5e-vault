<%*
async function weightedRandom(weights) {
    let totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    let random = Math.random() * totalWeight;
    for (let key in weights) {
        random -= weights[key];
        if (random <= 0) return key;
    }
}

// CHARACTER IDENTITY
// Gender-specific first names
const first_nameList = {
    "Male": [
		"Abel",
		"Aiden",
		"Albion",
		"Alaric",
		"Alastair",
		"Aldrich",
		"Andreas",
		"Arthur",
		"Baldric",
		"Barton",
		"Beorn",
		"Bryan",
		"Bucky",
		"Cain",
		"Caspian",
		"Casper",
		"Cassian",
		"Cedric",
		"Declan",
		"Darian",
		"Eadric",
		"Eamon",
		"Ethan",
		"Ethelred",
		"Fanthen",
		"Finn",
		"Finnian",
		"Franklin",
		"Garrett",
		"George",
		"Gideon",
		"Godric",
		"Grimm",
		"Hadrian",
		"Harry",
		"Harvey",
		"Horatio",
		"Igor",
		"Ivor",
		"Jareth",
		"Jasper",
		"Jerome",
		"John",
		"Jorje",
		"Julian",
		"Kael",
		"Khan",
		"Leon",
		"Leo",
		"Leofric",
		"Leoric",
		"Liam",
		"Loras",
		"Luke",
		"Luther",
		"Magnus",
		"Matthew",
		"Merlin",
		"Michael",
		"Orik",
		"Owen",
		"Percival",
		"Quinn",
		"Ragnar",
		"Raphael",
		"Roderick",
		"Ronald",
		"Rowan",
		"Salvor",
		"Samuel",
		"Sebastian",
		"Sigurd",
		"Silas",
		"Steven",
		"Thaddeus",
		"Theodoric",
		"Thorin",
		"Thrain",
		"Ulric",
		"Valen",
		"Varian",
		"Vesper",
		"Weston",
		"Wilson",
		"Wulfric",
		"Xalvador",
		"Xavier",
		"Yorick",
		"Zachary",
		"Zephyrus"
    ],
    "Female": [
		"Aelith",
		"Aethelflaed",
		"Alianor",
		"Ava",
		"Ariadne",
		"Ava",
		"Belphoebe",
		"Brynna",
		"Calanthe",
		"Callie",
		"Cassandra",
		"Catherine",
		"Caelia",
		"Catriona",
		"Chrys",
		"Deborah",
		"Drusilla",
		"Drusilla",
		"Dawn",
		"Eirwen",
		"Eive",
		"Elowen",
		"Esme",
		"Eve",
		"Fiora",
		"Freya",
		"Genevieve",
		"Ginny",
		"Gwendolyn",
		"Gwyneth",
		"Guinevere",
		"Hermione",
		"Iris",
		"Ivy",
		"Isolde",
		"Jezabel",
		"Jian",
		"Jessamine",
		"KAREN",
		"Kathelynn",
		"Katarina",
		"Lilith",
		"Lily",
		"Liora",
		"Luna",
		"Lyra",
		"Madrigal",
		"Maeve",
		"Mary",
		"May",
		"Morgana",
		"Monica",
		"Nyssa",
		"Ophelia",
		"Persephone",
		"Pixal",
		"Quintessa",
		"Rhiannon",
		"Samarah",
		"Sandra",
		"Sara",
		"Seraphina",
		"Serena",
		"Sigrid",
		"Sora",
		"Tamisin",
		"Thyra",
		"Ursula",
		"Valeria",
		"Vesper",
		"Willow",
		"Xanthe",
		"Ysolt",
		"Yvaine",
		"Zinnia",
		"Zoe" 
    ],
    "Non-Binary": [
		"Aerin",
		"Alex",
		"Blair",
		"Brook",
		"Cassidy",
		"Charlie",
		"Dakota",
		"Darcy",
		"Echo",
		"Emery",
		"Finley",
		"Foggy",
		"Harper",
		"Indigo",
		"Jordan",
		"Kai",
		"Linden",
		"Marlowe",
		"Morgan",
		"Onyx",
		"Phoenix",
		"Quinn",
		"Raven",
		"Reese",
		"Riley",
		"Robin",
		"Rowan",
		"Rune",
		"Sable",
		"Sage",
		"Sam",
		"Sasha",
		"Shale",
		"Skyler",
		"Talon",
		"Taryn",
		"Taylor",
		"Vesper",
		"Wren",
		"Xion",
		"Zephyr"
    ]
};

// Last names for all characters regardless of gender
const last_nameList = [
		"Albetruss", 
		"Abernath", 
		"Ashford", 
		"Blackthorn", 
		"Blackwood", 
		"Boltsman", 
		"Briant", 
		"Brightmoon", 
		"Brightspark", 
		"Cahill", 
		"Castle", 
		"Castleford", 
		"Cole", 
		"Darkwater", 
		"Dawnbringer", 
		"Dragoncrest", 
		"Dragonhart", 
		"Duskendale", 
		"Eisley", 
		"Emberfall", 
		"Fairchild", 
		"Fairman", 
		"Feynmans", 
		"Fickleback", 
		"Fisk", 
		"Frostbane", 
		"Frostspire", 
		"Frostwind", 
		"Forestfoot", 
		"Freeport", 
		"Gallow", 
		"Goldenshield", 
		"Goldenhoard", 
		"Granger", 
		"Graves", 
		"Grimshaw", 
		"Grayson", 
		"Hanondorf", 
		"Hawthorn", 
		"Hawthorne", 
		"Hightower", 
		"Harmon", 
		"Ironoak", 
		"Ironwood", 
		"Jackman", 
		"Kennedy", 
		"Kingsley", 
		"Kormack", 
		"Lightweaver", 
		"Lockwood", 
		"Lutharian", 
		"Moonshadow", 
		"Murdock", 
		"Nightshade", 
		"North", 
		"Oakenshield", 
		"Page", 
		"Pike", 
		"Powell", 
		"Ravencrest", 
		"Ravenfield", 
		"Ravenscar", 
		"Reacher", 
		"Rockfell", 
		"Rockfeller", 
		"Shackley", 
		"Shadowend", 
		"Shamrock", 
		"Silverbrook", 
		"Silverleaf", 
		"Schnauder", 
		"Starwhisper", 
		"Sterling", 
		"Stonefist", 
		"Stonehelm", 
		"Stormcrown", 
		"Stormrider", 
		"Torrent", 
		"Wayne", 
		"Whitethorn", 
		"Windrider", 
		"Winterbourne", 
		"Wolfe", 
		"Wolfsbane", 
		"Wyvernspur"
];

// RACES & ALIGNMENTS
// Fantasy species with spawn probability weights
const speciesList = { 
	"Aasimar": 1,
	"Changeling": 1,
	"Dragonborn": 5,
	"Dwarf": 15,
	"Elf": 1,
	"Firbolg": 2,
	"Gnome": 5,
	"Goliath": 3,
	"Genasi": 3,
	"Halfling": 20,
	"Half-Elf": 25,
	"Human": 50,
	"Kenku": 2,
	"Loxodon": 1,
	"Orc": 10,
	"Tabaxi": 2,
	"Tiefling": 15,
	"Triton": 2,
	"Warforged": 25
};

// Moral compass options with likelihood weights
const alignmentList = { 
	"Chaotic Evil": 3,
	"Chaotic Good": 15,
	"Chaotic Neutral": 15,
	"Lawful Evil": 5,
	"Lawful Good": 20,
	"Lawful Neutral": 20,
	"Neutral Evil": 4,
	"Neutral Good": 35,
	"True Neutral": 45
};

// PERSONALITY & MOTIVATION
// Core character traits
const personalityTraits = [
	"Aloof",
	"Ambitious",
	"Atheistic",
	"Boastful",
	"Brave",
	"Cautious",
	"Charismatic",
	"Content",
	"Cowardly",
	"Curious",
	"Dour",
	"Friendly",
	"Greedy",
	"Humble",
	"Loyal",
	"Methodical",
	"Naive",
	"Optimistic",
	"Pessimistic",
	"Pious",
	"Playful",
	"Reckless",
	"Selfless",
	"Serious",
	"Shy",
	"Sarcastic",
	"Suspicious",
	"Trusting",
	"Untrustworthy",
	"World-weary",
	"Witty"
];

// Driving forces for characters
const motivations = [
	"Arcane Mastery",
	"Artistic Creation",
	"Criminal Enterprise",
	"Debt Repayment",
	"Escape Past",
	"Family Honor",
	"Find Redemption",
	"Immortality",
	"Knowledge",
	"Love",
	"Military Conquest",
	"Natural Balance",
	"Personal Legacy",
	"Political Ambition",
	"PLOT RELEVANT",
	"Power",
	"Protect a loved one",
	"Redemption",
	"Religious Zeal",
	"Revenge",
	"Scientific Discovery",
	"Social Reform",
	"Spiritual Enlightenment",
	"Survival",
	"Technological Advancement",
	"Wealth"
];

// Class of the character
const classSuggestions = {
	"Artificer": 4, 
	"Barbarian": 8, 
	"Bard": 8, 
	"Blood Hunter": 3, 
	"Cleric": 10, 
	"Commoner": 75,
	"Druid": 7, 
	"Echo Knight": 2, 
	"Fighter": 15, 
	"Gunslinger": 8, 
	"Monk": 7, 
	"Paladin": 7, 
	"Ranger": 7, 
	"Rogue": 12, 
	"Sorcerer": 6, 
	"Warlock": 6, 
	"Wizard": 12
};

// Occupations for the character
const occupations = {
	"Alchemist": 3, 
	"Arcane Scholar": 2, 
	"Baker": 5, 
	"Bard": 3, 
	"Blacksmith": 10, 
	"Carpenter": 4, 
	"Cartographer": 2, 
	"Cook": 8, 
	"Cultist": 1, 
	"Farmer": 20,  
	"Guard": 12, 
	"Hag's Apprentice": 0.5, 
	"Healer": 8, 
	"Herbalist": 4, 
	"Hunter": 6, 
	"Merchant": 35, 
	"Miner": 5, 
	"Noble": 7, 
	"Priest": 7, 
	"Sailor": 8, 
	"Scholar": 7, 
	"Thief": 10, 
	"Traveller":45
};

// PHYSICAL APPEARANCE
// Hair characteristics
const hairColours = [
	"Amethyst",
	"Auburn",
	"Black",
	"Blue",
	"Blonde",
	"Bronze",
	"Brown",
	"Chestnut",
	"Copper",
	"Emerald",
	"Fiery Red",
	"Green",
	"Honey Blonde",
	"Jet Black",
	"Midnight Blue",
	"Pink",
	"Platinum",
	"Rainbow",
	"Raven",
	"Red",
	"Salt-and-Pepper",
	"Sapphire",
	"Silver",
	"Steel Gray",
	"White"
];

const hairStyles = [
	"Afro",
	"Asymmetrical",
	"Bearded",
	"Bald",
	"Braided",
	"Chignon",
	"Curly",
	"Double Braids",
	"Dreadlocks",
	"Elaborate Braids",
	"Faux Hawk",
	"Liberty Spikes",
	"Long",
	"Messy Bun",
	"Mohawk",
	"Mullet",
	"Pageboy",
	"Ponytail",
	"Samurai Knot",
	"Short",
	"Side Shave",
	"Straight",
	"Top-Knot",
	"Undercut",
	"Victorian Updo"
];

// Eye colour
const eyeColours = {
	"Amber": 5, 
	"Black": 3, 
	"Blue": 25, 
	"Brown": 35, 
	"Gold": 2, 
	"Green": 15, 
	"Grey": 8, 
	"Hazel": 12, 
	"Heterochromatic": 1, 
	"Red": 1, 
	"Silver": 1, 
	"Violet": 0.5
};

const classImages = {
	"Artificer": "artificer.png",
	"Barbarian": "barbarian.png",
	"Bard": "bard.png",
	"Blood Hunter": "bloodhunter.png",
	"Cleric": "cleric.png",
	"Commoner": "commoner.png",
	"Druid": "druid.png",
	"Echo Knight": "echoknight.png",
	"Fighter": "fighter.png",
	"Gunslinger": "gunslinger.png",
	"Monk": "monk.png",
	"Paladin": "paladin.png",
	"Ranger": "ranger.png",
	"Rogue": "rogue.png",
	"Sorcerer": "sorcerer.png",
	"Warlock": "warlock.png",
	"Wizard": "wizard.png"
};

// Unique physical characteristics
const features = { 
	"Birthmark": 5, 
	"Burn marks": 7, 
	"Claw marks": 4, 
	"Crystal growths": 1, 
	"Facial brand": 3, 
	"Feathers in hair": 3, 
	"Glowing tattoos": 2, 
	"Golden eyes": 5, 
	"Golden fingernails": 2, 
	"Heterochromia": 4, 
	"Missing tooth": 10, 
	"None": 35, 
	"Petrified hand": 1, 
	"Piercings": 8, 
	"Prosthetic limb": 3, 
	"Ritual scars": 6, 
	"Scar across eye": 15, 
	"Silver hair streak": 4, 
	"Snake-like eyes": 2, 
	"Tattooed arms": 12
};

// AGE DISTRIBUTION
// Bell curve centered around mid-20s
const Ages = {
    15:1,16:1,17:1,18:1,19:1,20:2,21:3,22:4,23:5,24:6,
    25:7, // Peak age
    26:6,27:5,28:4,29:3,30:2,31:1,32:1,33:1,34:1,35:1,
    36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,44:1,45:1,
    46:1,47:1,48:1,49:1,50:1,51:1,52:1,53:1,54:1,55:1,
    56:1,57:1,58:1,59:1,60:1,61:1,62:1,63:1,64:1,65:1,
    66:1,67:1,68:1,69:1,70:1
};

// Gender Probability (Can add Agender or other such alternative genders)
const Genders = {
	"Female": 50,
	"Male": 50,
	"Non-Binary": 1
};

// Initial disposition against the party
const PartyRels = {
	"Cautious": 15,         // Guarded but polite
	"Curious": 10,           // Interested in party's activities
	"Friendly": 20,         // Willing to help, share information
	"Helpful": 10,          // Eager to assist
	"Hostile": 5,           // Openly antagonistic
	"Indifferent": 60,      // Neutral until given reason
	"Suspicious": 10       // Distrustful of strangers
};

// NPC GENERATION PROCESS
// Randomly assemble character components
let gender = await weightedRandom(Genders);
let first_name = first_nameList[gender][Math.floor(Math.random() * first_nameList[gender].length)];
let last_name = last_nameList[Math.floor(Math.random() * last_nameList.length)];
let species = await weightedRandom(speciesList);
let alignment = await weightedRandom(alignmentList);
let age = await weightedRandom(Ages);
let feature = await weightedRandom(features);
let personality = personalityTraits[Math.floor(Math.random() * personalityTraits.length)];
let motivation = motivations[Math.floor(Math.random() * motivations.length)];
let hairColour = hairColours[Math.floor(Math.random() * hairColours.length)];
let hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
let eyeColour = await weightedRandom(eyeColours);
let occupation = await weightedRandom(occupations);
let classSuggestion = await weightedRandom(classSuggestions);
let disposition = await weightedRandom(PartyRels);

// DIALOGUE GENERATOR SYSTEM
function generateDialogue(disposition, personality, occupation, species, location) {
    // Base dialogue patterns
    const dialogueBank = {
    // Disposition-based patterns (7 dispositions)
	    greetings: {
			Cautious: ["Who sent you?", "I don't recognize your colors...", "Speak your piece."],
			Curious: ["What brings you to {location}?", "Haven't seen your kind before!", "You look like you've stories to tell."],
			Friendly: ["Well met, traveler!", "Good to see friendly faces!", "Welcome to {location}!"],
			Helpful: ["How can I assist?", "You look like you need aid!", "At your service!"],
			Hostile: ["You're not welcome here.", "State your business quickly.", "I'm watching you..."],
			Indifferent: ["What do you want?", "Make it quick.", "Hmm?"],
			Suspicious: ["That's a likely story.", "Your kind always wants something.", "Prove yourself."]
	    },
	    
	    // Occupation-specific dialogue (23 occupations)
	    occupational: {
			"Alchemist": ["This elixir turns {creature} blood to gold!", "Volatile mixtures today..."],
			"Arcane Scholar": ["The {item} channels raw magic!", "My thesis on {creature}..."],
			"Baker": ["Fresh {item} pies!", "Flour's scarce this season..."],
			"Bard": ["Hear the ballad of {npc}?", "A coin for a tune?"],
			"Blacksmith": ["My arm could use an apprentice.", "This steel came from the mountains of..."],
			"Carpenter": ["Oak's best for {item}...", "Woodworm infestation in {location}..."],
			"Cartographer": ["Updated maps of {location}!", "Here be {creature}..."],
			"Cook": ["Try my famous {item} stew!", "You look half-starved..."],
			"Cultist": ["The {creature} rises soon...", "Join us in dark communion..."],
			"Farmer": ["Crops ain't what they used to be.", "You seen my missing {creature}?"],
			"Guard": ["Move along, citizen.", "Papers, please.", "Trouble brewing in {location}..."],
			"Hag's Apprentice": ["Eye of newt, tongue of {creature}...", "Grandmother wants a {item}..."],
			"Healer": ["The sickness spreads...", "Herbs for what ails you!"],
			"Herbalist": ["Mandrake root cures {creature} bites!", "Moonlight harvest only..."],
			"Hunter": ["Saw {creature} tracks near {location}...", "Need pelts? I've fresh kills."],
			"Merchant": ["Best prices this side of {location}!", "Special deal for you, friend..."],
			"Miner": ["The deep tunnels whisper...", "Gem prices are falling again."],
			"Noble": ["You dare address me so?", "My family built this {location}..."],
			"Priest": ["{species} souls need saving too.", "The gods test us in strange ways."],
			"Sailor": ["Storm's coming in from the {location}...", "Never trust a merfolk!"],
			"Scholar": ["Did you know {randomFact}?", "The ancient texts speak of..."],
			"Thief": ["Nothing suspicious here, officer.", "I know ways in and out of {location}..."],
			"Traveller": ["The roads to {location} are dangerous these days...", "I've seen things that would chill your blood..."]
	    },
	    
	    // Personality-influenced responses (31 traits)
	    personalityResponses: {
			Aloof: ["Your affairs don't concern me.", "State your business..."],
			Ambitious: ["I'll rule {location} someday!", "Power is the prize..."],
			Atheistic: ["Gods? Fairy tales!", "We make our own fate!"],
			Boastful: ["I once killed a {creature} with my bare hands!", "My {item} is legendary..."],
			Brave: ["I'll face it with you!", "Danger is my middle name!"],
			Cautious: ["Best not to risk it...", "Let me think first..."],
			Charismatic: ["You're clearly someone important...", "Let's make history together!"],
			Content: ["Simple life for me...", "Why want more?"],
			Cowardly: ["Not my problem!", "I-I can't help you..."],
			Curious: ["But why?", "How fascinating!"],
			Dour: ["Life is suffering.", "Get on with it."],
			Friendly: ["Let's share a drink!", "Always happy to help!"],
			Greedy: ["What's in it for me?", "My help doesn't come cheap..."],
			Humble: ["I just got lucky...", "Others deserve credit..."],
			Loyal: ["I swore an oath!", "My word is bond."],
			Methodical: ["First we... then we...", "Systematic approach..."],
			Naive: ["Everyone's basically good!", "It'll all work out..."],
			Optimistic: ["Tomorrow will be better!", "There's always hope!"],
			Pessimistic: ["We're all doomed anyway...", "What's the point?"],
			Pious: ["{species} works in mysterious ways!", "Repent your sins!"],
			Playful: ["Life's a game!", "Catch me if you can!"],
			Reckless: ["What's the worst that could happen?", "Just jump in!"],
			Sarcastic: ["Oh brilliant plan!", "Sure, that'll work..."],
			Selfless: ["Take my last copper!", "How can I serve?"],
			Serious: ["This is no joking matter.", "Focus!"],
			Shy: ["*Mumbles*", "*Looks at feet*"],
			Suspicious: ["That seems unlikely.", "What's your real motive?"],
			Trusting: ["I believe you!", "Your word's enough..."],
			Untrustworthy: ["Would I lie?", "Let's say... I'm creative with truth."],
			"World-weary": ["Seen it all before...", "Youthful idealism..."],
			Witty: ["As useful as a {item} in a brothel!", "Did you fall from heaven? Because..."]
	    },
	    
	    // Quest hooks (3 types with variations)
	    hooks: {
	        plot: [
	            "Strange happenings at {location}...", 
	            "The {item} has gone missing...", 
	            "I need someone to deliver this {item}...",
	            "{npc} seeks brave souls..."
	        ],
	        warning: [
	            "Don't go to {location} after dark!", 
	            "Beware the {creature}!", 
	            "The water's poisoned in {location}...",
	            "They take people who ask about {item}..."
	        ],
	        rumor: [
	            "They say {npc} is actually...", 
	            "I heard {event} happened because...",
	            "The {item} is cursed...",
	            "{location} wasn't always here..."
	        ]
	    },
	    
	    // Emotional tones (3 base emotions with variations)
	    emotional: {
	        angry: [
	            "Enough!", 
	            "How dare you!",
	            "This ends now!",
	            "*Slams fist*"
	        ],
	        happy: [
	            "Marvelous!", 
	            "My heart soars!",
	            "*Claps excitedly*",
	            "This calls for celebration!"
	        ],
	        fearful: [
	            "Please don't hurt me!", 
	            "I didn't see anything!",
	            "*Trembles*",
	            "They're coming..."
	        ]
	    }
	};

    // Context replacement patterns
    const contextVars = {
        location: location,
        species: species,
        item: ["Sword of Kings", "Dragon Egg", "Mayor's Seal"][Math.floor(Math.random()*3)],
        creature: ["werewolves", "gelatinous cube", "mimics"][Math.floor(Math.random()*3)],
        npc: first_name + " " + last_name,
        randomFact: ["owlbears molt annually", "dragons hate peppermint", "the Underdark has 7 layers"][Math.floor(Math.random()*3)]
    };

    // Weighted dialogue assembly
    let dialogue = {
        greeting: getWeightedPhrase(dialogueBank.greetings, disposition),
        occupationLine: getWeightedPhrase(dialogueBank.occupational, occupation, 0.7),
        personalityResponse: getWeightedPhrase(dialogueBank.personalityResponses, personality, 0.5),
        hook: getWeightedPhrase(dialogueBank.hooks, ["plot","warning","rumor"][Math.floor(Math.random()*3)], 0.4),
        emotionalOutburst: Math.random() < 0.2 ? getWeightedPhrase(dialogueBank.emotional, ["angry","happy","fearful"][Math.floor(Math.random()*3)]) : null
    };

    // Process context variables
    Object.keys(dialogue).forEach(k => {
        if(dialogue[k]) dialogue[k] = replaceContext(dialogue[k], contextVars);
    });

    return dialogue;
}

function getWeightedPhrase(bank, key, chance = 1) {
    if(Math.random() > chance) return null;
    if(!bank[key]) return null;
    return bank[key][Math.floor(Math.random()*bank[key].length)];
}

function replaceContext(text, vars) {
    return text.replace(/{(\w+)}/g, (m,p1) => vars[p1] || "");
}

// Dialogue Generation
const dialogue = generateDialogue(disposition, personality, occupation, species, "home");

// TEMPLATE CONSTRUCTION
// Build NPC file content with generated data
const content = `---
AssociatedGroup: 
Gender: ${gender}
Race: ${species}
Age: ${age}
Class: ${classSuggestion}
Alignment: ${alignment}
Occupation: ${occupation}
Character-Role: 
Location: 
NoteIcon: npc
Vitality: Alive
Relevant: Y/N
tags:
  - npc
---

> [!infobox]
> # ${first_name} ${last_name}
> ![[${classImages[classSuggestion] || 'ImagePlaceholder.png'}| ${classSuggestion} ]]
> ###### Basic Information
> Type |  Stat |
> ---|---|
> **Home** | \`VIEW[{Location}]\`  |
> **Group** | \`VIEW[{AssociatedGroup}]\` |
> **Occupation** | \`VIEW[{Occupation}]\` |
> **Sex** | \`VIEW[{Gender}]\` |
> **Race** | \`VIEW[{Race}]\` |
> **Age** | \`VIEW[{Age}]\` |
> **Condition** | Alive |
> > ###### Appearance
> Type |  Stat |
> ---|---|
> **Eye Colour** | ${eyeColour} |
> **Hair Colour** | ${hairColour} |
> **Hair Style** | ${hairStyle} |
> ###### Rules Info
> Type |  Stat |
> ---|---|
> **Alignment** | \`VIEW[{Alignment}]\` |
> **Class** | \`VIEW[{Class}]\`  |
> **Character Role** | \`VIEW[{Character-Role}]\` |

\`BUTTON[DeleteThis]\`

# ${first_name} ${last_name}
## Profile

**Personality:** ${personality}
**Motivation:** ${motivation}
**Distinctive Features:** ${feature}


## Backstory

(Insert a backstory here for textgenerator to elaborate upon)

**Occupation:** \`VIEW[{Occupation}]\` 
**Notable History:**  
- ${["Former soldier", "Survivor of great flood", "Exiled noble", "Self-taught mage"][Math.floor(Math.random()*4)]}  
**Secret:**  
- ${["None", "Wanted criminal", "Secret heir", "Cursed bloodline"][Math.floor(Math.random()*4)]}

# Relationships
## Relationship with NPCs
- 
## Relationship with Party
- Initial Attitude: ${disposition} 

**Roleplaying Notes:**  
- **Voice:** ${await weightedRandom({"Gravelly":15, "Melodic":10, "Hoarse":8, "Smooth":20})}  
- **Speech Patterns:** ${await weightedRandom({"Formal":25, "Slang-heavy":15, "Terse":10, "Rambling":5})}  
- **Common Phrases:**  
  - "${dialogue.greeting}"  
 - "${dialogue.occupationLine || `${personality} \`VIEW[{Occupation}]\` comment: '${motivation.toLowerCase()} is what matters!'`}"

# Statblock and Encounters
> [!info] Statblock
> \`\`\`statblock
> name: ${first_name} ${last_name}
> monster: Commoner
> alignment: ${alignment}
> traits: ${personality.toLowerCase()}, ${feature.toLowerCase()}
> \`\`\`

\`\`\`encounter-table
name: ${first_name} ${last_name}
creatures:
 - 1: Commoner
\`\`\``;

// Create and open new NPC in a new leaf
const newFile = await tp.file.create_new(
    content,
    `${first_name} ${last_name}`,
    false
);
  
await app.workspace.getLeaf('split', 'vertical').openFile(newFile);
%>