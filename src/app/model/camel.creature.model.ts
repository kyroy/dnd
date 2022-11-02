import { Creature, Size, Traits } from "./creature.model";

export class CreatureCamel extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Camel",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1 / 8,
            ac: 9,
            hitPoints: 15,
            hitDice: 2,
            speed: 50,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, bludgeoning damage",
                attacks: [{
                    attackBonus: 5,
                    damage: [{
                        numDice: 1,
                        dice: 4,
                        bonus: 0,
                    }],
                }],
            }],
            traits,
        });
    }
}