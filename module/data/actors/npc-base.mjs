import ApotheosisCharacterBase from './character-base.mjs';
import { intField } from '../_fields.mjs';

const { StringField } = foundry.data.fields;

export default class ApotheosisNpcBase extends ApotheosisCharacterBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			armor: intField(),
			groupSize: intField({ min: 1, initial: 1 }),
			role: new StringField({ initial: "", blank: true })
		}
	}
}
