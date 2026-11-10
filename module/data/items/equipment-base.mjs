import ApotheosisItemBase from "./item-base.mjs";
import { tierField, intField } from "../_fields.mjs";

const { StringField, BooleanField } = foundry.data.fields;

export default class ApotheosisEquipmentBase extends ApotheosisItemBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			tier: tierField(1),
			load: intField({ initial: 1 }),
			traits: new StringField({ required: false, blank: true, initial: "" }),
			carried: new BooleanField({ required: true, initial: false })
		};
	}
}
