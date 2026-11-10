export function registerSettings() {
	game.settings.register("apotheosis", "healthPerDie", {
		name: "APOTHEOSIS.Settings.healthPerDie.name",
		hint: "APOTHEOSIS.Settings.healthPerDie.hint",
		scope: "world",
		config: true,
		type: Number,
		default: 3
	});

	game.settings.register("apotheosis", "agilityPerCard", {
		name: "APOTHEOSIS.Settings.agilityPerCard.name",
		hint: "APOTHEOSIS.Settings.agilityPerCard.hint",
		scope: "world",
		config: true,
		type: Number,
		default: 4
	});

	game.settings.register("apotheosis", "xpCostMultiplier", {
		name: "APOTHEOSIS.Settings.xpCostMultiplier.name",
		hint: "APOTHEOSIS.Settings.xpCostMultiplier.hint",
		scope: "world",
		config: true,
		type: Number,
		default: 3
	});

	game.settings.register("apotheosis", "burnoutThreshold", {
		name: "APOTHEOSIS.Settings.burnoutThreshold.name",
		hint: "APOTHEOSIS.Settings.burnoutThreshold.hint",
		scope: "world",
		config: true,
		type: Number,
		default: 12
	});

	game.settings.register("apotheosis", "loadLight", {
		name: "APOTHEOSIS.Settings.loadLight.name",
		hint: "APOTHEOSIS.Settings.loadLight.hint",
		scope: "world",
		config: true,
		type: Number,
		default: 3
	});

	game.settings.register("apotheosis", "loadNormal", {
		name: "APOTHEOSIS.Settings.loadNormal.name",
		hint: "APOTHEOSIS.Settings.loadNormal.hint",
		scope: "world",
		config: true,
		type: Number,
		default: 5
	});

	game.settings.register("apotheosis", "loadHeavy", {
		name: "APOTHEOSIS.Settings.loadHeavy.name",
		hint: "APOTHEOSIS.Settings.loadHeavy.hint",
		scope: "world",
		config: true,
		type: Number,
		default: 7
	});
}
