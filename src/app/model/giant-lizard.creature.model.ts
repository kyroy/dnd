import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantLizard extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Lizard",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1 / 4,
            ac: 12,
            hitPoints: 19,
            hitDice: 3,
            speed: 60,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage",
                attacks: [{
                    attackBonus: 4,
                    damage: [{
                        numDice: 1,
                        dice: 8,
                        bonus: 2,
                    }],
                }],
            }],
            traits,
        });
    }
}