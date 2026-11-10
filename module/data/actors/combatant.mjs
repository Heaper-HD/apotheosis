import ApotheosisNpcBase from './npc-base.mjs';

const { StringField } = foundry.data.fields;

export default class ApotheosisCombatant extends ApotheosisNpcBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			tactics: new StringField({ initial: "", blank: true })
		}
	}

	async _preCreate(data, options, user) {
		const allowed = await super._preCreate(data, options, user);
		if (allowed === false) return false;

		this.parent.updateSource({
			prototypeToken: {
				actorLink: false,
				disposition: CONST.TOKEN_DISPOSITIONS.HOSTILE
			}
		})
	}
}
