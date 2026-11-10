export const APOTHEOSIS = {};

APOTHEOSIS.attributes = {
	body: { label: "APOTHEOSIS.Attribute.Body", health: true },
	agility: { label: "APOTHEOSIS.Attribute.Agility", health: true },
	wits: { label: "APOTHEOSIS.Attribute.Wits", health: true },
	spirit: { label: "APOTHEOSIS.Attribute.Spirit", health: false }
};

APOTHEOSIS.actions = {
	skirmish: { attribute: 'body', label: "APOTHEOSIS.Action.Skirmish" },
	wreck: { attribute: 'body', label: "APOTHEOSIS.Action.Wreck" },
	endure: { attribute: 'body', label: "APOTHEOSIS.Action.Endure" },

	hunt: { attribute: 'agility', label: "APOTHEOSIS.Action.Hunt" },
	prowl: { attribute: 'agility', label: "APOTHEOSIS.Action.Prowl" },
	finesse: { attribute: 'agility', label: "APOTHEOSIS.Action.Finesse" },

	study: { attribute: 'wits', label: "APOTHEOSIS.Action.Study" },
	survey: { attribute: 'wits', label: "APOTHEOSIS.Action.Survey" },
	tinker: { attribute: 'wits', label: "APOTHEOSIS.Action.Tinker" },
	mend: { attribute: 'wits', label: "APOTHEOSIS.Action.Mend" },
	sway: { attribute: 'wits', label: "APOTHEOSIS.Action.Sway" },

	channel: { attribute: 'spirit', label: "APOTHEOSIS.Action.Channel" },
	attune: { attribute: 'spirit', label: "APOTHEOSIS.Action.Attune" },
	command: { attribute: 'spirit', label: "APOTHEOSIS.Action.Command" },
	consort: { attribute: 'spirit', label: "APOTHEOSIS.Action.Consort" },
};

APOTHEOSIS.efficiencyMultipliers = {
	1: 5, 2: 4, 3: 3, 4: 2, 5: 1.5, 6: 1
};

APOTHEOSIS.masteryLevels = {
	0: "APOTHEOSIS.Mastery.None",
	1: "APOTHEOSIS.Mastery.Small",
	2: "APOTHEOSIS.Mastery.Medium",
	3: "APOTHEOSIS.Mastery.Large",
	4: "APOTHEOSIS.Mastery.Massive",
	5: "APOTHEOSIS.Mastery.Beyond"
};

APOTHEOSIS.loadLevels = {
	light: "APOTHEOSIS.Load.Light",
	normal: "APOTHEOSIS.Load.Normal",
	heavy: "APOTHEOSIS.Load.Heavy"
};

APOTHEOSIS.focuses = {
	investigation: "APOTHEOSIS.Focus.Investigation",
	frontline: "APOTHEOSIS.Focus.Frontline",
	planning: "APOTHEOSIS.Focus.Planning"
};

APOTHEOSIS.attitudes = {
	hostile: "APOTHEOSIS.Attitude.Hostile",
	wary: "APOTHEOSIS.Attitude.Wary",
	neutral: "APOTHEOSIS.Attitude.Neutral",
	sympathetic: "APOTHEOSIS.Attitude.Sympathetic",
	ally: "APOTHEOSIS.Attitude.Ally",
}
