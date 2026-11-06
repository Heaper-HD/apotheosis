import ApotheosisDataModel from "./base-model.mjs";

export default class ApotheosisItemBase extends ApotheosisDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}