import { APOTHEOSIS } from './helpers/config.mjs';

Hooks.once('init', function () {
  CONFIG.APOTHEOSIS = APOTHEOSIS;
	CONFIG.INIT = true;

	CONFIG.INIT = false;
});
