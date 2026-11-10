import ApotheosisHeroBase from './hero-base.mjs';

const { HTMLField, StringField } = foundry.data.fields;

export default class ApotheosisMajor extends ApotheosisHeroBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			secretIdentity: new StringField({ blank: true, initial: "", gmOnly: true }),
			gmNotes: new HTMLField({ gmOnly: true })
		}
	}
}
