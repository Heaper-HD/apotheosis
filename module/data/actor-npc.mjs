import ApotheosisActorBase from './actor-base.mjs';

const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

export default class ApotheosisNPC extends ApotheosisActorBase {
	static defineSchema() {
		return {
			...super.defineSchema(),

			initiativeCards: new NumberField({required: true, integer: true, min: 1, max: 4, initial: 1}),
			notes: new StringField({ required: false, blank: true })
		}
	}
}
