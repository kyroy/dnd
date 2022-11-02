import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantBadger extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Badger",
            image: "https://www.dndbeyond.com/avatars/thumbnails/16/530/1000/1000/636376327839601860.jpeg",
            size: Size.Medium,
            cr: 1 / 4,
            ac: 10,
            hitPoints: 13,
            hitDice: 2,
            speed: 30,
            actions: [{
                name: "Multiattack (Bite, Claws)",
                description: "Melee Weapon Attacks, one target, piercing + slashing damage",
                attacks: [{
                    attackBonus: 3,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: 1,
                    }],
                }, {
                    attackBonus: 3,
                    damage: [{
                        numDice: 2,
                        dice: 4,
                        bonus: 1,
                    }],
                }],
            }, {
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage",
                attacks: [{
                    attackBonus: 3,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: 1,
                    }],
                }],
            }, {
                name: "Claws",
                description: "Melee Weapon Attacks, one target, slashing damage",
                attacks: [{
                    attackBonus: 3,
                    damage: [{
                        numDice: 2,
                        dice: 4,
                        bonus: 1,
                    }],
                }],
            }],
            traits,
        });
    }
}