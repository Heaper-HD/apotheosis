import { APOTHEOSIS } from './helpers/config.mjs';
import { ApotheosisCharacter, ApotheosisNPC } from './data/_module.mjs';
import ApotheosisCharacterSheet from './sheets/character-sheet.mjs';

Hooks.once('init', function () {
	CONFIG.APOTHEOSIS = APOTHEOSIS;

	registerDataModels();

	registerSheets();
});

function registerDataModels() {
	console.log("Apotheosis | Registering custom data models...");

	CONFIG.Actor.dataModels = {
		...CONFIG.Actor.dataModels,
		"character": ApotheosisCharacter,
		"npc": ApotheosisNPC
	};
}

function registerSheets() {
	console.log("Apotheosis | Registering custom sheets...");

	foundry.applications.apps.DocumentSheetConfig.registerSheet(
		foundry.documents.Actor, "apotheosis", ApotheosisCharacterSheet,
		{ types: ["character"], makeDefault: true, label: "APOTHEOSIS.Sheet.Character" }
	)
}
