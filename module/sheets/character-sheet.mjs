export default class ApotheosisCharacterSheet extends foundry.applications.api.HandlebarsApplicationMixin(foundry.applications.sheets.ActorSheetV2) {
	static DEFAULT_OPTIONS = {
		classes: ["apotheosis", "sheet", "actor", "character"],
		position: { width: 900, height: 1000 },
		form: { submitOnChange: true },
		window: { resizeable: true}
	}

	static PARTS = {
		sheet: {
			template: "systems/apotheosis/templates/actor/character-sheet.hbs",
			scrollable: [""]
		}
	}

	async _prepareContext(options) {
		const context = await super._prepareContext(options);

		context.actor = this.actor;
		context.system = this.actor.system;
		context.config = CONFIG.APOTHEOSIS;

		context.attributes = Object.entries(CONFIG.APOTHEOSIS.attributes).map(([key, attributes]) => ({
			key,
			label: attributes.label,
			value: this.actor.system.attributes[key].value,
			max: this.actor.system.attributes[key].max,
			actions: Object.entries(CONFIG.APOTHEOSIS.actions)
				.filter(([, action]) => action.attribute === key)
				.map(([actionKey, action]) => ({
					key: actionKey,
					label: action.label,
					value: this.actor.system.actions[actionKey]
				}))
		}));

		context.masteryLevels = CONFIG.APOTHEOSIS.masteryLevels;

		return context;
	}
}
