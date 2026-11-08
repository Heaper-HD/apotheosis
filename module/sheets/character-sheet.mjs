export default class ApotheosisCharacterSheet extends foundry.applications.api.HandlebarsApplicationMixin(foundry.applications.sheets.ActorSheetV2) {
	static DEFAULT_OPTIONS = {
		classes: ["apotheosis", "sheet", "actor", "character"],
		position: { width: 700, height: 600 },
		form: { submitOnChange: true },
		window: { resizable: true}
	}

	static PARTS = {
		sheet: {
			template: "systems/apotheosis/templates/actor/character-sheet.hbs",
			scrollable: [""]
		}
	}

	async _prepareContext(options) {
		const context = await super._prepareContext(options);
		const system = this.actor.system;

		context.actor = this.actor;
		context.system = this.actor.system;
		context.config = CONFIG.APOTHEOSIS;

		context.attributes = Object.entries(CONFIG.APOTHEOSIS.attributes).map(([key, attribute]) => ({
			key,
			label: attribute.label,
			value: system.attributes[key].value,
			max: system.attributes[key].max,
			actions: Object.entries(CONFIG.APOTHEOSIS.actions)
				.filter(([, action]) => action.attribute === key)
				.map(([actionKey, action]) => ({
					key: actionKey,
					label: action.label,
					value: system.actions[actionKey]
				}))
		}));

		context.masteryLevels = CONFIG.APOTHEOSIS.masteryLevels;
		context.loadLevels = CONFIG.APOTHEOSIS.loadLevels;

		return context;
	}
}
