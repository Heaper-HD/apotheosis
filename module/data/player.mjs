import ApotheosisHeroBase from './hero-base.mjs';
import { intField } from './_fields.mjs';

const { SchemaField, StringField } = foundry.data.fields;

export default class ApotheosisPlayer extends ApotheosisHeroBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			xp: new SchemaField({
				body: intField(),
				agility: intField(),
				wits: intField(),
				spirit: intField(),
				focus: intField()
			}),
			load: new StringField({ choices: ["light", "normal", "heavy"], initial: "normal" })
		}
	}
}
