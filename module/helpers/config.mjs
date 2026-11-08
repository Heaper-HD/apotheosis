export const APOTHEOSIS = {};

APOTHEOSIS.attributes = {
	body: { label: "APOTHEOSIS.Attribute.Body" },
	agility: { label: "APOTHEOSIS.Attribute.Agility" },
	wits: { label: "APOTHEOSIS.Attribute.Wits" },
	spirit: { label: "APOTHEOSIS.Attribute.Spirit" },
}

APOTHEOSIS.actions = {
	skirmish: { attribute: "body", label: "APOTHEOSIS.Action.Skirmish"},
	wreck: { attribute: "body", label: "APOTHEOSIS.Action.Wreck"},

	hunt: { attribute: "agility", label: "APOTHEOSIS.Action.Hunt"},
	prowl: { attribute: "agility", label: "APOTHEOSIS.Action.Prowl"},
	finesse: { attribute: "agility", label: "APOTHEOSIS.Action.Finesse"},

	study: { attribute: "wits", label: "APOTHEOSIS.Action.Study"},
	survey: { attribute: "wits", label: "APOTHEOSIS.Action.Survey"},
	tinker: { attribute: "wits", label: "APOTHEOSIS.Action.Tinker"},

	channel: { attribute: "spirit", label: "APOTHEOSIS.Action.Channel"},
	attune: { attribute: "spirit", label: "APOTHEOSIS.Action.Attune"},
	command: { attribute: "spirit", label: "APOTHEOSIS.Action.Command"},
	consort: { attribute: "spirit", label: "APOTHEOSIS.Action.Consort"},
	sway: { attribute: "spirit", label: "APOTHEOSIS.Action.Sway"},
}

APOTHEOSIS.masteryLevels = {
	0: "APOTHEOSIS.Mastery.None",
	1: "APOTHEOSIS.Mastery.Small",
	2: "APOTHEOSIS.Mastery.Medium",
	3: "APOTHEOSIS.Mastery.Large",
	4: "APOTHEOSIS.Mastery.Massive",
	5: "APOTHEOSIS.Mastery.Beyond"
}

APOTHEOSIS.efficiencyMultipliers = {
	1: 5, 2: 4, 3: 3, 4: 2, 5: 1.5, 6: 1
}
