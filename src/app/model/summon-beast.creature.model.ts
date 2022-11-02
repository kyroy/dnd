import { Creature, Size, Traits } from "./creature.model";

const spellLevel = 2;
const spellAttackModifier = 6;

export class CreatureBestialSpiritLand extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Bestial Spirit (Land)",
            image: "https://www.dndbeyond.com/attachments/2/708/conjuration.png",
            size: Size.Small,
            cr: 2,
            ac: 11 + spellLevel,
            hitPoints: 30 + 5 * (spellLevel - 2),
            hitDice: spellLevel,
            speed: 30,
            actions: [{
                name: "Maul",
                description: "Melee Weapon Attacks, one target, piercing damage. The beast makes a number of attacks equal to half this spell’s level (rounded down).",
                attacks: Array(Math.floor(spellLevel/2)).fill({
                    attackBonus: spellAttackModifier,
                    damage: [{
                        numDice: 1,
                        dice: 8,
                        bonus: 4 + spellLevel,
                    }],
                }),
            }],
            traits,
        });
    }
}

export class CreatureBestialSpiritAir extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Bestial Spirit (Air)",
            image: "https://www.dndbeyond.com/attachments/2/708/conjuration.png",
            size: Size.Small,
            cr: 2,
            ac: 11 + spellLevel,
            hitPoints: 20 + 5 * (spellLevel - 2),
            hitDice: spellLevel,
            speed: 60,
            actions: [{
                name: "Maul",
                description: "Melee Weapon Attacks, one target, piercing damage. The beast makes a number of attacks equal to half this spell’s level (rounded down).",
                attacks: Array(Math.floor(spellLevel/2)).fill({
                    attackBonus: spellAttackModifier,
                    damage: [{
                        numDice: 1,
                        dice: 8,
                        bonus: 4 + spellLevel,
                    }],
                }),
            }],
            traits,
        });
    }
}

export class CreatureBestialSpiritWater extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Bestial Spirit (Water)",
            image: "https://www.dndbeyond.com/attachments/2/708/conjuration.png",
            size: Size.Small,
            cr: 2,
            ac: 11 + spellLevel,
            hitPoints: 30 + 5 * (spellLevel - 2),
            hitDice: spellLevel,
            speed: 30,
            actions: [{
                name: "Maul",
                description: "Melee Weapon Attacks, one target, piercing damage. The beast makes a number of attacks equal to half this spell’s level (rounded down).",
                attacks: Array(Math.floor(spellLevel/2)).fill({
                    attackBonus: spellAttackModifier,
                    damage: [{
                        numDice: 1,
                        dice: 8,
                        bonus: 4 + spellLevel,
                    }],
                }),
            }],
            traits,
        });
    }
}