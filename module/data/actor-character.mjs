import ApotheosisActorBase from './actor-base.mjs';

const { HTMLField, ArrayField, NumberField, SchemaField, StringField } = foundry.data.fields;

export default class ApotheosisCharacter extends ApotheosisActorBase {
	static defineSchema() {
		return {
			...super.defineSchema(),

			xp: new SchemaField({
				body: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
				agility: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
				wits: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
				spirit: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
				focus: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
			}),
			load: new StringField({ required:true, blank: false, choices: ["light", "normal", "heavy"], initial: "normal" }),
			burnoutScars: new NumberField({ required: true, integer: true, min: 0, max: 4, initial: 0 }),
			background: new SchemaField({
				heritage: new StringField({ required: false, blank: true, initial: "" }),
				drive: new StringField({ required: false, blank: true, initial: "" }),
				ally: new StringField({ required: false, blank: true, initial: "" }),
				rival: new StringField({ required: false, blank: true, initial: "" }),
			}),
			awakenings: new ArrayField(new SchemaField({
				title: new StringField({ required: true, blank: true }),
				description: new StringField({ required: true, blank: true })
			}, {
				required: false,
			})),
		}
	}
}
