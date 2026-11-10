import ApotheosisEquipmentBase from "./equipment-base.mjs";
import { intField } from '../_fields.mjs';

const { StringField, SchemaField, BooleanField } = foundry.data.fields;

export default class ApotheosisWeapon extends ApotheosisEquipmentBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			gearDice: intField({ max: 3, initial: 1 }),
			damage: intField({ initial: 2 }),
			range: new StringField({ blank: false, choices: ["engaged", "short", "medium", "long", "extreme"], initial: "engaged" }),
			uses: new SchemaField({
				value: intField(),
				max: intField()
			}),
			equipped: new BooleanField({ required: true, initial: false })
		};
	}
}
