import { Creature, Size, Traits } from "./creature.model";

export class CreatureFlyingSnake extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Flying Snake",
            image: "https://www.dndbeyond.com/avatars/thumbnails/16/517/1000/1000/636376319640572721.jpeg",
            size: Size.Tiny,
            cr: 1 / 8,
            ac: 14,
            hitPoints: 5,
            hitDice: 2,
            speed: 60,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, 1 piercing damage plus 7 (3d4) poison damage.",
                attacks: [{
                    attackBonus: 6,
                    damage: [{
                        numDice: 3,
                        dice: 4,
                        bonus: 1,
                    }],
                }],
            }],
            traits,
        });
    }
}