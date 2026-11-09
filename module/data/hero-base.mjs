import ApotheosisCharacterBase from './character-base.mjs';
import { intField } from './_fields.mjs';

const { HTMLField, SchemaField, ArrayField, StringField } = foundry.data.fields;

export default class ApotheosisHeroBase extends ApotheosisCharacterBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			identity: new SchemaField({
				age: intField({ nullable: true, initial: null }),
				birthDate: new StringField({ initial: "" }),
				biography: new HTMLField(),
				occupation: new StringField({ initial: "" }),
				faith: new StringField({ initial: "" }),
				companyView: new StringField({ initial: "" }),
				focus: new StringField({ nullable: true, choices: ["investigation", "frontline", "planning"], initial: null })
			}),
			background: new SchemaField({
				drive: new StringField({ initial: "" }),
				ally: new StringField({ initial: "" }),
				rival: new StringField({ initial: "" })
			}),
			burnoutScars: intField({ gmOnly: true }),
			awakenings: new ArrayField(new SchemaField({
				title: new StringField({ initial: "" }),
				description: new HTMLField()
			}))
		}
	}
}
