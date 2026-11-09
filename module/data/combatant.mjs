import ApotheosisNpcBase from './npc-base.mjs';

const { StringField } = foundry.data.fields;

export default class ApotheosisCombatant extends ApotheosisNpcBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			tactics: new StringField({ initial: "", blank: true })
		}
	}
}
