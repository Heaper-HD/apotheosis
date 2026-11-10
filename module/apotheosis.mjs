import { APOTHEOSIS } from './helpers/config.mjs';
import { ApotheosisCivilian, ApotheosisCombatant, ApotheosisMajor, ApotheosisPlayer, ApotheosisWeapon, ApotheosisArmor, ApotheosisGear, ApotheosisInjury } from './data/_module.mjs';
import { registerSettings } from './settings.mjs';

Hooks.once('init', function () {
	registerSettings();

	CONFIG.APOTHEOSIS = APOTHEOSIS;

	registerActorDataModels();

	registerItemDataModels();
});

function registerActorDataModels() {
	CONFIG.Actor.dataModels.civilian = ApotheosisCivilian;
	CONFIG.Actor.dataModels.combatant = ApotheosisCombatant;
	CONFIG.Actor.dataModels.major = ApotheosisMajor;
	CONFIG.Actor.dataModels.player = ApotheosisPlayer;

	CONFIG.Actor.trackableAttributes = {
		player: { bar: ["attributes.body", "attributes.agility", "attributes.wits", "energy"], value: ["armor"] },
		major: { bar: ["attributes.body", "attributes.agility", "attributes.wits", "energy"], value: ["armor"] },
		combatant: { bar: ["attributes.body", "energy"], value: ["armor"] },
		civilian: { bar: ["attributes.body", "energy"], value: [] },
		cell: { bar: ["support"], value: ["heat", "resources"] }
	}
}

function registerItemDataModels() {
	CONFIG.Item.dataModels.weapon = ApotheosisWeapon;
	CONFIG.Item.dataModels.armor = ApotheosisArmor;
	CONFIG.Item.dataModels.gear = ApotheosisGear;
	CONFIG.Item.dataModels.injury = ApotheosisInjury;
}
