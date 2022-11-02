import { Creature, Size, Traits } from "./creature.model";

export class CreatureDireWolf extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Dire Wolf",
            image: "https://www.dndbeyond.com/avatars/thumbnails/16/484/1000/1000/636376300478361995.jpeg",
            size: Size.Large,
            cr: 1,
            ac: 14,
            hitPoints: 37,
            hitDice: 5,
            speed: 50,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attacks: [{
                    attackBonus: 5,
                    damage: [{
                        numDice: 2,
                        dice: 6,
                        bonus: 3,
                    }],
                }],
            }],
            traits,
        });
    }
}