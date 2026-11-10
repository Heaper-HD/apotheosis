import ApotheosisNpcBase from './npc-base.mjs';
import { tierField } from '../_fields.mjs';

const { StringField } = foundry.data.fields;

export default class ApotheosisCivilian extends ApotheosisNpcBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			tier: tierField(0),
			attitude: new StringField({ required: true, choices: ["hostile", "wary", "neutral", "sympathetic", "ally"], initial: "neutral" }),
			location: new StringField({ initial: "", blank: true })
		}
	}
}
