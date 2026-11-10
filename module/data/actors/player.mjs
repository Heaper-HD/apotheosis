import ApotheosisHeroBase from './hero-base.mjs';
import { intField } from '../_fields.mjs';

const { SchemaField, StringField } = foundry.data.fields;

export default class ApotheosisPlayer extends ApotheosisHeroBase {
	static defineSchema() {
		return {
			...super.defineSchema(),
			xp: new SchemaField({
				body: intField(),
				agility: intField(),
				wits: intField(),
				spirit: intField(),
				focus: intField()
			}),
			load: new StringField({ choices: ["light", "normal", "heavy"], initial: "normal" })
		}
	}

	prepareDerivedData() {
		super.prepareDerivedData();

		const limits = {
			light: game.settings.get("apotheosis", "loadLight"),
			normal: game.settings.get("apotheosis", "loadNormal"),
			heavy: game.settings.get("apotheosis", "loadHeavy")
		};
		this.loadLimit = limits[this.load];
		this.loadCarried = 0;
		for(const item of this.parent.items) {
			if(item.system.carried) {
				this.loadCarried += item.system.load;
				this.overloaded = this.loadCarried > this.loadLimit;
			}
		}
	}

	async _preCreate(data, options, user) {
		const allowed = await super._preCreate(data, options, user);
		if (allowed === false) return false;

		this.parent.updateSource({
			prototypeToken: {
				actorLink: true,
				disposition: CONST.TOKEN_DISPOSITIONS.FRIENDLY
			}
		})
	}
}
