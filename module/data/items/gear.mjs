import ApotheosisEquipmentBase from "./equipment-base.mjs";
import { intField } from "../_fields.mjs";

const { ArrayField, StringField } = foundry.data.fields;

export default class ApotheosisGear extends ApotheosisEquipmentBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			gearDice: intField({ max: 3, initial: 1 }),
			actions: new ArrayField(new StringField({}))
		}
	}
}
