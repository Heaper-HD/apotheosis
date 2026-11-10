import { intField } from './../_fields.mjs';

const { StringField, ArrayField, SchemaField, DocumentUUIDField, BooleanField, HTMLField } = foundry.data.fields;

export default class ApotheosisCell extends foundry.abstract.TypeDataModel {
	static LOCALIZATION_PREFIXES = ["APOTHEOSIS.Cell"];

	static defineSchema() {
		return {
			tier: intField({ max: 4, gmOnly: true }),
			support: new SchemaField({
				value: intField(),
				max: intField({ min: 1, initial: 6, gmOnly: true })
			}),
			resources: intField(),
			heat: intField({ max: 9 }),
			wanted: intField({ max: 4, gmOnly: true }),
			base: new StringField({ blank: true, initial: "" }),
			focus: new StringField({ blank: true, nullable: true, choices: ["investigation", "frontline", "planning"], initial: null }),
			members: new ArrayField(new DocumentUUIDField({ type: "Actor" })),
			contacts: new ArrayField(new DocumentUUIDField({ type: "Actor" })),
			assets: new ArrayField(new SchemaField({
				name: new StringField({ blank: true, initial: "" }),
				description: new StringField({ blank: true, initial: "" }),
				used: new BooleanField({ initial: false })
			})),
			relationships: new ArrayField(new SchemaField({
				faction: new StringField({ blank: true, initial: "" }),
				standing: intField({ min: -3, max: 3 })
			})),
			upgrades: new ArrayField(new StringField()),
			notes: new HTMLField()
		};
	}

	prepareDerivedData() {
		this.entanglementDice = Math.max(1, this.wanted);
		this.heatLevel = this.heat <= 3 ? "low" : this.heat <= 6 ? "medium" : "high";
		this.canAdvance = this.support.value >= this.support.max;
	}
}
