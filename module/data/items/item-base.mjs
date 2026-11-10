const { HTMLField } = foundry.data.fields;

export default class ApotheosisItemBase extends foundry.abstract.TypeDataModel {
	static defineSchema() {
		return {
			description: new HTMLField({})
		};
	}
}
