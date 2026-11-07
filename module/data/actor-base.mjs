const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

export default class ApotheosisActorBase extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			attributes: new SchemaField({
				body: new SchemaField({
					value: new NumberField({ required: true, integer: true, min: 0, initial: 2 }),
					max: new NumberField({ required: true, integer: true, min: 0, initial: 2})
				}),
				agility: new SchemaField({
					value: new NumberField({ required: true, integer: true, min: 0, initial: 2 }),
					max: new NumberField({ required: true, integer: true, min: 0, initial: 2}),
				}),
				wits: new SchemaField({
					value: new NumberField({ required: true, integer: true, min: 0, initial: 2 }),
					max: new NumberField({ required: true, integer: true, min: 0, initial: 2}),
				}),
				spirit: new SchemaField({
					value: new NumberField({ required: true, integer: true, min: 0, initial: 2 }),
					max: new NumberField({ required: true, integer: true, min: 0, initial: 2}),
				})
			}),
			actions: new SchemaField({
				skirmish: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				wreck: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				hunt: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				prowl: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				finesse: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				study: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				survey: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				tinker: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				channel: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				attune: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				command: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				consort: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
				sway: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0}),
			}),
			tier: new NumberField({ required: true, integer: true, min: 0, initial: 1}),
			armor: new NumberField({ required: true, integer: true, min: 0, initial: 0}),
			energy: new SchemaField({
				max: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
				value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
				efficiency: new NumberField({ required: true, integer: true, min: 1, max: 6, initial: 1 }),
				mastery: new NumberField({ required: true, integer: true, min: 0, max: 5, initial: 0 })
			}),
			powerUnderstanding: new HTMLField({})
		}
	}
}
