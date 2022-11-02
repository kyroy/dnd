import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantCentipede extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Centipede",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Blue-legged_Centipede_%28Ethmostigmus_trigonopodus%29_%2812681235843%29.jpg/2560px-Blue-legged_Centipede_%28Ethmostigmus_trigonopodus%29_%2812681235843%29.jpg",
            size: Size.Small,
            cr: 1 / 4,
            ac: 13,
            hitPoints: 4,
            hitDice: 1,
            speed: 30,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attacks: [{
                    attackBonus: 4,
                    damage: [{
                        numDice: 1,
                        dice: 4,
                        bonus: 2,
                    }, {
                        numDice: 3,
                        dice: 6,
                        bonus: 0,
                    }],
                }],
            }],
            traits,
        });
    }
}