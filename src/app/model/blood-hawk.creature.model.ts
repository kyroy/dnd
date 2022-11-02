import { Creature, Size, Traits } from "./creature.model";

export class CreatureBloodHawk extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Blood Hawk",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Small,
            cr: 1 / 8,
            ac: 12,
            hitPoints: 7,
            hitDice: 2,
            speed: 60,
            actions: [{
                name: "Beak",
                description: "Melee Weapon Attacks, one target, piercing damage",
                attacks: [{
                    attackBonus: 4,
                    damage: [{
                        numDice: 1,
                        dice: 4,
                        bonus: 2,
                    }],
                }],
            }],
            traits,
        });
    }
}