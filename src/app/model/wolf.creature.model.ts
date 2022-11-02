import { Creature, Size, Traits } from "./creature.model";

export class CreatureWolf extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Wolf",
            image: "https://www.dndbeyond.com/avatars/thumbnails/16/482/1000/1000/636376300223855327.jpeg",
            size: Size.Large,
            cr: 1 / 4,
            ac: 13,
            hitPoints: 11,
            hitDice: 2,
            speed: 40,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                attacks: [{
                    attackBonus: 4,
                    damage: [{
                        numDice: 2,
                        dice: 4,
                        bonus: 2,
                    }],
                }],
            }],
            traits,
        });
    }
}