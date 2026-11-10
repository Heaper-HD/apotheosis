# Changelog

All notable changes to this project are documented here.

## [Unreleased]

## [0.1.0] - 2026-11-06

### Added
- Actor types: player, major, civilian and combatant, built on shared CharacterBase, NpcBase and HeroBase models.
- Cell actor type with tier, support, resources, heat, wanted level, members, contacts, assets, relationships and upgrades.
- Item types: weapon, armor, gear and injury, built on shared ItemBase and EquipmentBase models.
- Derived data: attribute rating, dice, broken and hurt; energy multiplier and mastery; initiative cards; armor from equipped items; carried load and load limit; cell entanglement dice, heat level and advancement.
- World settings: health per die, Agility per initiative card, XP cost multiplier, burnout threshold and load limits.
- Players can no longer lower actions; only the GM can.
- GM-only fields enforced by the server.
- Token defaults per actor type and trackable attributes for token bars.
- Field labels through localization prefixes.

### Changed
- Attributes now have health: Body, Agility and Wits store value and max, with dice derived from health. Spirit stores only a rating.
- Actions reworked to 15: added Endure and Mend, and Sway moved from Spirit to Wits.

### Removed
- The old character and NPC actor types.
- The first character sheet, to be rebuilt on the new data models.
