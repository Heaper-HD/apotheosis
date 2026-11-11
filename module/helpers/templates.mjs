export function preloadTemplates() {
	return foundry.applications.handlebars.loadTemplates({
		"apotheosis.attributes": "systems/apotheosis/templates/actor/parts/attributes.hbs"
	});
}
