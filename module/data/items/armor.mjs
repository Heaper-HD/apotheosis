import ApotheosisEquipmentBase from "./equipment-base.mjs";
import { intField } from "../_fields.mjs";

const { BooleanField } = foundry.data.fields;

export default class ApotheosisArmor extends ApotheosisEquipmentBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			rating: intField({ initial: 1 }),
			equipped: new BooleanField({ required: true, initial: false })
		}
	}
}
