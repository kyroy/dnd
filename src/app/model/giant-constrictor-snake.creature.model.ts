import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantConstrictorSnake extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Constrictor Snake",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Huge,
            cr: 2,
            ac: 12,
            hitPoints: 60,
            hitDice: 8,
            speed: 30,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage",
                attacks: [{
                    attackBonus: 6,
                    damage: [{
                        numDice: 2,
                        dice: 6,
                        bonus: 4,
                    }],
                }],
            }, {
                name: "Constrict",
                description: "Melee Weapon Attacks, one target, bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
                attacks: [{
                    attackBonus: 6,
                    damage: [{
                        numDice: 2,
                        dice: 8,
                        bonus: 4,
                    }],
                }],
            }],
            traits,
        });
    }
}