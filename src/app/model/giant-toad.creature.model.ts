import { Creature, Size, Traits } from "./creature.model";

export class CreatureGiantToad extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Giant Toad",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1,
            ac: 11,
            hitPoints: 39,
            hitDice: 6,
            speed: 20,
            actions: [{
                name: "Bite",
                description: "Melee Weapon Attacks, one target, piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target.",
                attacks: [{
                    attackBonus: 4,
                    damage: [{
                        numDice: 1,
                        dice: 10,
                        bonus: 2,
                    }, {
                        numDice: 1,
                        dice: 10,
                        bonus: 0,
                    }],
                }],
            }, {
                name: "Swallow",
                description: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.",
                attacks: [{
                    attackBonus: 50,
                    damage: [{
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