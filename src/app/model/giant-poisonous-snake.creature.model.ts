import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantPoisonousSnake extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Poisonous Snake",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Medium,
            cr: 1 / 4,
            ac: 14,
            hitPoints: 11,
            hitDice: 2,
            speed: 30,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, reach 10 ft., one target, piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
                attacks: [{
                    attackBonus: 6,
                    damage: [{
                        numDice: 1,
                        dice: 4,
                        bonus: 4,
                    }, {
                        numDice: 3,
                        dice: 6,
                        bonus: 0,
                    }],
                }],
            }],
            traits,
        });
    }
}