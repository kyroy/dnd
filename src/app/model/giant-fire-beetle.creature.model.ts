import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantFireBeetle extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Fire Beetle",
            image: "https://www.dndbeyond.com/avatars/thumbnails/9/896/1000/1000/636334287498492864.jpeg",
            size: Size.Small,
            cr: 0,
            ac: 13,
            hitPoints: 4,
            hitDice: 1,
            speed: 30,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, slashing damage",
                attacks: [{
                    attackBonus: 1,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: -1,
                    }],
                }],
            }],
            traits,
        });
    }
}