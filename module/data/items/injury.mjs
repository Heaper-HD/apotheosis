import ApotheosisItemBase from "./item-base.mjs";
import { intField } from "../_fields.mjs";

const { StringField, BooleanField, SchemaField } = foundry.data.fields;

export default class ApotheosisInjury extends ApotheosisItemBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			attribute: new StringField({ blank: false, choices: ["body", "agility", "wits", "spirit"], initial: "body" }),
			severity: intField(),
			effect: new StringField({ initial: "" }),
			lethal: new BooleanField({ required: true, initial: false }),
			timeLimit: new StringField({ initial: "" }),
			treated: new BooleanField({ required: true, initial: false }),
			healing: new SchemaField({
				value: intField(),
				max: intField({ initial: 4 })
			}),
			permanent: new BooleanField({ required: true, initial: false })
		}
	}
}
