import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantWolfSpider extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Wolf Spider",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Medium,
            cr: 1 / 4,
            ac: 13,
            hitPoints: 11,
            hitDice: 2,
            speed: 40,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attacks: [{
                    attackBonus: 3,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: 1,
                    }, {
                        numDice: 2,
                        dice: 6,
                        bonus: 0,
                    }],
                }],
            }],
            traits,
        });
    }
}