import { intField, attributeField, actionField, tierField } from '../_fields.mjs';

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

	prepareDerivedData() {
		super.prepareDerivedData();

		const healthPerDie = game.settings.get("apotheosis", "healthPerDie");
		const agilityPerCard = game.settings.get("apotheosis", "agilityPerCard");

		for (const key of ["body", "agility", "wits"]) {
			const attribute = this.attributes[key];

			attribute.value = Math.clamp(attribute.value, 0, attribute.max);
			attribute.rating = Math.ceil(attribute.max / healthPerDie);
			attribute.dice = Math.ceil(attribute.value / healthPerDie);
			attribute.broken = attribute.value === 0;
			attribute.hurt = attribute.value <= attribute.max / 2;
		}

		const spirit = this.attributes.spirit;
		spirit.dice = spirit.rating;

		this.energy.value = Math.clamp(this.energy.value, 0, this.energy.max);
		this.energy.multiplier = CONFIG.APOTHEOSIS.efficiencyMultipliers[this.energy.efficiency];
		this.energy.mastery = Math.floor(spirit.rating / 2) + this.masteryBonus;

		this.initiativeCards = 1 + Math.floor(this.attributes.agility.dice / agilityPerCard) + this.initiativeBonus;
	}
}
