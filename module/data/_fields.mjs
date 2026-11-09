const { SchemaField, NumberField } = foundry.data.fields;

export function intField(options = {}) {
	return new NumberField({
		required: true,
		nullable: false,
		integer: true,
		min: 0,
		initial: 0,
		...options,
	});
}

export function attributeField() {
	return new SchemaField({
		value: intField({ initial: 6 }),
		max: intField({ min: 1, initial: 6, gmOnly: true }),
	});
}

export function actionField() {
	return intField({ max: 4 });
}

export function tierField(initial) {
	return intField({ max: 6, initial, gmOnly: true });
}
