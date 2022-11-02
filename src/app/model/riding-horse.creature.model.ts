import { Creature, Size, Traits } from "./creature.model";

export class CreatureRidingHorse extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Riding Horse",
            image: "https://www.dndbeyond.com/avatars/thumbnails/9/904/1000/1000/636334288913250513.jpeg",
            size: Size.Large,
            cr: 1 / 4,
            ac: 10,
            hitPoints: 13,
            hitDice: 2,
            speed: 60,
            actions: [{
                name: "Hooves",
                description: "Melee Weapon Attacks, one target, bludgeoning damage",
                attacks: [{
                    attackBonus: 5,
                    damage: [{
                        numDice: 2,
                        dice: 4,
                        bonus: 3,
                    }],
                }],
            }],
            traits,
        });
    }
}