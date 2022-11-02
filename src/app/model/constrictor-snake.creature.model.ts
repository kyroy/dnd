import { Creature, Size, Traits } from "./creature.model";

export class CreatureConstrictorSnake extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Constrictor Snake",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1 / 4,
            ac: 12,
            hitPoints: 13,
            hitDice: 2,
            speed: 30,
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
            }, {
                name: "Constrict",
                description: "Melee Weapon Attacks, one target, bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
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