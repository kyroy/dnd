import {Creature, Size, Traits} from "./creature.model";

export class CreatureGiantOwl extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Owl",
            image: "https://www.dndbeyond.com/avatars/thumbnails/16/535/1000/1000/636376331788287090.jpeg",
            size: Size.Large,
            cr: 1/4,
            ac: 12,
            hitPoints: 19,
            hitDice: 3,
            speed: 60,
            actions: [{
                name: "Talons",
                description: "Melee Weapon Attacks, one target, slashing damage",
                attacks: [{
                    attackBonus: 3,
                    damage: [{
                        numDice: 2,
                        dice: 6,
                        bonus: 1,
                    }],
                }],
            }],
            traits,
        });
    }
}