# Apotheosis

A Foundry VTT system for **Apotheosis**, a tabletop RPG about resisting a corporation that controls most of the world, and about what people are willing to become to stop it.

> **Status:** early development (v0.1.0). Rules below are a working draft and will change after playtesting.

---

## The game in short

Players are members of a rebellion fighting a corporate empire that buys governments, controls the news, and hunts dissidents as terrorists. The campaign is political and strategic: the hardest questions are less about whether the enemy is wrong and more about how far the rebellion is willing to go to win.

Every living being has **spiritual energy**, a fundamental force of the universe. It defines each person's soul and the powers they can use. Using powers drains that energy, and pushing too far can burn a person out completely.

---

## System overview

Apotheosis combines two engines, sharing one character sheet:

| Phase | Engine | Used for |
|---|---|---|
| Planning, investigation, downtime | Forged in the Dark (modified) | Missions, engagement rolls, heat, factions, clocks, cell management |
| Battle | Year Zero Engine (modified) | Initiative, turns, enemy attacks, damage, critical injuries |

### Mission flow

1. **Plan.** The cell picks an approach and prepares. Investigation and preparation become concrete **prepared assets** (rigged terrain, intel on an enemy, delayed reinforcements). There are no flashbacks: what helps in a fight is what the players actually did.
2. **Engagement roll.** Decides the battle's starting conditions: positions, surprise, and how the fight opens.
3. **Battle.** Tactical combat with initiative, turns, and enemies that attack back.
4. **Aftermath.** Heat, consequences, experience, and downtime.

### Dice (draft)

Rolls use a **d10 pool**: attribute + action + gear dice.

| Result | Meaning |
|---|---|
| 1 | Drain when pushing |
| 2–7 | Nothing |
| 8–9 | Success |
| 10 | Perfection (exact trigger still being tuned) |

### Character

- **Attributes** (Body, Agility, Wits, Spirit): add dice to rolls and act as health. Damage reduces them; at 0 the character is broken and rolls a critical injury.
- **Actions**: one set of ratings (0–4) used both outside and inside combat, including **Channel** for controlling powers.
- **Armor**: rolled when hit; successes reduce damage.

### Combat

- **Initiative cards** decide turn order each round. Powerful enemies draw more than one card and act several times per round.
- **Enemies attack on their own turns.** Players react by dodging or parrying, which costs their fast action.
- **Pressure clocks** set the length of a fight: reinforcements, collapsing terrain, alarms.
- **Tier gate:** acting against something of a higher tier reduces damage, and against a lower tier increases it. Early on, some enemies are nearly untouchable.

### Spiritual energy and powers

Spiritual energy is used **only** for powers.

- **Capacity:** how much energy a character holds. Set by the GM for each character at creation, based on their concept and background. Capacity is **fixed**: it does not grow through use or experience.
- **Efficiency:** how well a character controls their energy. This is what improves over the campaign.
- **Regeneration:** energy recovered each round; characters can also spend an action to center themselves and recover more.
- **Burnout:** reaching 0 energy, or pushing too hard, risks permanent scars and, at the extreme, death.

#### Efficiency and leakage

Using a power means expelling spiritual energy in a physical form. To do that, a character first concentrates energy, releases the power, and lets whatever they gathered but didn't use fade away. Inexperienced characters gather far more than they need, so most of it is wasted.

Each power has a base cost (see the tables below). The energy actually spent is that cost multiplied by the character's efficiency level:

| Efficiency level | Energy spent per point of cost |
|---|---|
| 1 | ×5 |
| 2 | ×4 |
| 3 | ×3 |
| 4 | ×2 |
| 5 | ×1.5 (round up) |
| 6 | ×1 |

Example: a medium power at medium range has a base cost of 4. At efficiency 1, the character spends 20 energy to produce it. At efficiency 6, they spend 4. Their pool never changes, but they can use their power five times as often.

Efficiency improves through use, especially using powers under pressure, near exhaustion, or in creative ways.

#### Starting powers

Starting powers must be **simple**: one clear, physical effect at human scale, such as creating and throwing fire, hardening skin, or moving small objects. Powers that bend reality, space, or time are not available at character creation, no matter how they're phrased. Characters discover the deeper nature of their power through play and awakenings, not on the first page of their sheet.

The GM approves every starting Power Understanding.

#### Power Understanding

**Powers are freeform.** There are no attack lists. Each character has a **Power Understanding**: a description of what they believe their power is. Every use is judged against it:

- **Within understanding:** normal cost and roll.
- **Stretch:** one size larger, or one extra required success.
- **Beyond:** not possible yet.

**Cost** is set by the effect's size and range:

| Size | Scope | Cost | Successes needed |
|---|---|---|---|
| Small | One person or object | 1 | 1 |
| Medium | One target hard, or a few lightly | 2 | 2 |
| Large | A zone, room, or vehicle | 4 | 3 |
| Massive | A building or structure | 6 | 4 |
| Beyond | Endgame scale | 10 | 5 |

| Range | Engaged | Short | Medium | Long |
|---|---|---|---|---|
| Cost | 0 | 1 | 2 | 3 |

Base cost = size + range. Energy spent = base cost × efficiency multiplier. Shaping a power uses a concentration roll (Spirit + Channel).

**Mastery:** powers at or below a character's mastery size form automatically. The roll only decides how well they hit. Mastery is lost when badly hurt or when focus is broken that round.

### Growth

- **Steady growth** through experience: more dice, better efficiency, and higher mastery. Capacity does not grow.
- **Awakenings** triggered by story moments: a character discovers what their power really is, and their Power Understanding is rewritten.

### Items

Items give a small, capped number and a trait:

- **Gear dice:** +1 to +3 depending on item tier, never more than about a third of a pool.
- **Traits:** new options rather than bigger numbers (an edge that ignores armor, a lens that makes line-shaped powers cheaper, gauntlets that store energy for one big release).
- **Costs:** wear, drawbacks, and for company technology, the risk of being tracked.

---

## Development

### Requirements

- Foundry VTT v14
- Node.js 20+ (only for compiling SCSS)

### Setup

1. Clone the repository.
2. Link it into Foundry's systems folder so edits apply directly:

   ```bash
   # Windows (run as administrator)
   mklink /D "%localappdata%\FoundryVTT\Data\systems\apotheosis" "C:\path\to\apotheosis"
   ```

3. Fully restart Foundry, then create a world using the Apotheosis system.

Changes to `system.json` need a full Foundry restart. Changes to scripts and templates need a world reload.

### Styles

```bash
npm install
npm run build   # compile once
npm run watch   # recompile on changes
```

### Roadmap

- [ ] Character data model (attributes, actions, energy, powers, gear)
- [ ] Dice roller (pool, successes, perfection, push and drain)
- [ ] Character sheet (ApplicationV2)
- [ ] Combat: initiative cards, multiple cards per enemy, pressure clocks
- [ ] Forged in the Dark layer: planning, engagement roll, heat, cell sheet
- [ ] Integration with the campaign chat and news site

---

## Credits and license

Code is released under the MIT License. See [LICENSE.txt](LICENSE.txt).

Based on the [Foundry VTT boilerplate system](https://github.com/asacolips-projects/boilerplate) by Asacolips.

Rules draw on the structure of [Blades in the Dark](https://bladesinthedark.com/) (Forged in the Dark, by John Harper) and the Year Zero Engine (Free League Publishing). Apotheosis is not affiliated with either.

Setup image `anvil-impact.png` by Lorc, CC BY 3.0, from [game-icons.net](https://game-icons.net).
