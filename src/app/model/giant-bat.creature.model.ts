import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantBat extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Bat",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1 / 4,
            ac: 13,
            hitPoints: 22,
            hitDice: 4,
            speed: 60,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage",
                attacks: [{
                    attackBonus: 4,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: 2,
                    }],
                }],
            }],
            traits,
        });
    }
}