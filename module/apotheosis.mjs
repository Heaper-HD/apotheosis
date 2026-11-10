import { APOTHEOSIS } from './helpers/config.mjs';
import { ApotheosisCivilian, ApotheosisCombatant, ApotheosisMajor, ApotheosisPlayer } from './data/_module.mjs';
import { registerSettings } from './settings.mjs';

Hooks.once('init', function () {
	registerSettings();

	CONFIG.APOTHEOSIS = APOTHEOSIS;

	registerDataModels();
});

function registerDataModels() {
	CONFIG.Actor.dataModels.civilian = ApotheosisCivilian;
	CONFIG.Actor.dataModels.combatant = ApotheosisCombatant;
	CONFIG.Actor.dataModels.major = ApotheosisMajor;
	CONFIG.Actor.dataModels.player = ApotheosisPlayer;
}
