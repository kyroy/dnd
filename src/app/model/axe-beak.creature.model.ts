import { Creature, Size, Traits } from "./creature.model";

export class CreatureAxeBeak extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Axe Beak",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1 / 4,
            ac: 11,
            hitPoints: 19,
            hitDice: 3,
            speed: 50,
            actions: [{
                name: "Beak",
                description: "Melee Weapon Attacks, one target, slashing damage",
                attacks: [{
                    attackBonus: 4,
                    damage: [{
                        numDice: 1,
                        dice: 8,
                        bonus: 1,
                    }],
                }],
            }],
            traits,
        });
    }
}