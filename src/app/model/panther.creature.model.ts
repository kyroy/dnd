import { Creature, Size, Traits } from "./creature.model";

export class CreaturePanther extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Panther",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Medium,
            cr: 1 / 4,
            ac: 12,
            hitPoints: 13,
            hitDice: 3,
            speed: 50,
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
                name: "Claw",
                description: "Melee Weapon Attacks, one target, slashing damage",
                attacks: [{
                    attackBonus: 4,
                    damage: [{
                        numDice: 1,
                        dice: 4,
                        bonus: 2,
                    }],
                }],
            }, {
                name: "Pounce",
                description: "Melee Weapon Attacks, one target, slashing damage. If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.",
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