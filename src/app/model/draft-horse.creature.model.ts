import { Creature, Size, Traits } from "./creature.model";

export class CreatureDraftHorse extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Draft Horse",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1 / 4,
            ac: 10,
            hitPoints: 19,
            hitDice: 3,
            speed: 40,
            actions: [{
                name: "Hooves",
                description: "Melee Weapon Attacks, one target, bludgeoning damage",
                attacks: [{
                    attackBonus: 6,
                    damage: [{
                        numDice: 2,
                        dice: 4,
                        bonus: 4,
                    }],
                }],
            }],
            traits,
        });
    }
}