const { HTMLField } = foundry.data.fields;

export default class ApotheosisItemBase extends foundry.abstract.TypeDataModel {
	static LOCALIZATION_PREFIXES = ["APOTHEOSIS.Item"];

	static defineSchema() {
		return {
			description: new HTMLField({})
		};
	}
}
