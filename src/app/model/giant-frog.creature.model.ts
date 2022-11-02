import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantFrog extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Frog",
            image: "https://www.dndbeyond.com/avatars/thumbnails/16/521/1000/1000/636376321052503535.jpeg",
            size: Size.Medium,
            cr: 1 / 4,
            ac: 11,
            hitPoints: 18,
            hitDice: 4,
            speed: 30,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target.",
                attacks: [{
                    attackBonus: 3,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: 1,
                    }],
                }],
            }, {
                name: "Swallow",
                description: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.",
                attacks: [{
                    attackBonus: 50,
                    damage: [{
                        numDice: 2,
                        dice: 4,
                        bonus: 0,
                    }],
                }],
            }],
            traits,
        });
    }
}