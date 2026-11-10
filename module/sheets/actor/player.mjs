const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

export default class ApotheosisPlayerSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
	static DEFAULT_OPTIONS = {
		classes: [ "apotheosis", "sheet", "actor", "player", "sidebar-sheet" ],
		position: {	width: 700, height: 750 },
		window: { resizable: true },
		form: { submitOnChange: true, closeOnSubmit: false }
	};

	static PARTS = {
		sidebar: { template: "systems/apotheosis/templates/actor/player/sidebar.hbs", scrollable: [""] },
		tabs: { template: "templates/generic/tab-navigation.hbs", scrollable: [""] },
		main: { template: "systems/apotheosis/templates/actor/player/main.hbs", scrollable: [""] },
		powers: { template: "systems/apotheosis/templates/actor/player/powers.hbs", scrollable: [""] },
		inventory: { template: "systems/apotheosis/templates/actor/player/inventory.hbs", scrollable: [""] },
		progress: { template: "systems/apotheosis/templates/actor/player/progress.hbs", scrollable: [""] },
		biography: { template: "systems/apotheosis/templates/actor/player/biography.hbs", scrollable: [""] }
	};

	static TABS = {
		primary: {
			tabs: [
				{ id: "main", icon: "fa-solid fa-user" },
				{ id: "powers", icon: "fa-solid fa-fire" },
				{ id: "inventory", icon: "fa-solid fa-suitcase" },
				{ id: "progress", icon: "fa-solid fa-chart-line" },
				{ id: "biography", icon: "fa-solid fa-book" }
			],
			initial: "main",
			labelPrefix: "APOTHEOSIS.Tabs"
		}
	};

	async _prepareContext(options) {
		const context = await super._prepareContext(options);
		const system = this.actor.system;

		context.actor = this.actor;
		context.system = system;
		context.systemFields = system.schema.fields;
		context.config = CONFIG.APOTHEOSIS;
		context.tabs = this._prepareTabs("primary");

		context.vitals = ["body", "agility", "wits"].map(key => {
			const attribute = system.attributes[key];
			return {
				label: CONFIG.APOTHEOSIS.attributes[key].label,
				value: attribute.value,
				max: attribute.max,
				dice: attribute.dice,
				percent: attribute.max ? Math.round((attribute.value / attribute.max) * 100) : 0,
				broken: attribute.broken
			};
		});

		context.energyPercent = system.energy.max
			? Math.round((system.energy.value / system.energy.max) * 100)
			: 0;

		return context;
	}

	async _preparePartContext(partId, context) {
		context = await super._preparePartContext(partId, context);
		context.tab = context.tabs[partId];
		return context;
	}
}
