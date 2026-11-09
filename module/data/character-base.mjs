import { intField, attributeField, actionField, tierField } from './_fields.mjs';

const { HTMLField, SchemaField, StringField } = foundry.data.fields;

export default class ApotheosisCharacterBase extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			affiliation: new StringField({ initial: "", blank: true }),
			appearance: new StringField({ initial: "", blank: true }),
			notes: new HTMLField({ blank: true }),
			attributes: new SchemaField({
				body: attributeField(),
				agility: attributeField(),
				wits: attributeField(),
				spirit: new SchemaField({
					rating: intField({ min: 1, initial: 2, gmOnly: true })
				})
			}),
			actions: new SchemaField({
				skirmish: actionField(),
				wreck: actionField(),
				endure: actionField(),
				hunt: actionField(),
				prowl: actionField(),
				finesse: actionField(),
				study: actionField(),
				survey: actionField(),
				tinker: actionField(),
				mend: actionField(),
				sway: actionField(),
				channel: actionField(),
				attune: actionField(),
				command: actionField(),
				consort: actionField()
			}),
			tier: tierField(1),
			energy: new SchemaField({
				value: intField({ initial: 60 }),
				max: intField({ initial: 60, gmOnly: true }),
				efficiency: intField({ min: 1, max: 6, initial: 1 }),
			}),
			masteryBonus: intField({ gmOnly: true }),
			initiativeBonus: intField({ gmOnly: true }),
			powerUnderstanding: new StringField({ blank: true , gmOnly: true })
		}
	}
}
