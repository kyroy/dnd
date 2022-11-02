import { DiceResult, getHitColor, roll } from "./dice.model"

export enum Modifier {
    Normal = "normal",
    Advantage = "advantage",
    Disadvantage = "disadvantage",
}

export enum Size {
    Tiny = "tiny",
    Small = "small",
    Medium = "medium",
    Large = "large",
    Huge = "huge",
}

export interface Action {
    name: string;
    description: string;
    attacks?: Attack[];
}

export interface Roll {
    numDice: number;
    dice: number;
    bonus: number;
}

export interface Attack {
    attackBonus: number;
    damage: Roll[];
}

export interface Traits {
    mightySummoner?: boolean;
}

export class Creature {
    name: string;
    image?: string;

    size: Size;
    cr: number;
    ac: number;
    speed: number;

    currentHitPoints: number;
    maxHitPoints: number;
    hitDice?: number;

    actions: Action[];

    attackRolls?: DiceResult[];
    damageRolls?: DiceResult[][];

    avgDamage(atk: Attack): number {
        return atk.damage.reduce((sum, cur) => sum + (cur.numDice * (cur.dice + 1) / 2 + cur.bonus), 0)
    }

    attack(idx: number, ac: number, modifier: Modifier): void {
        const attacks = this.actions[idx].attacks;
        if (!attacks) {
            throw new Error(`action ${this.actions[idx].name} (${idx}) has no attacks`);
        }
        this.attackRolls = attacks.map((attack) => {
            let hit: number;
            switch (modifier) {
                case Modifier.Advantage:
                    hit = Math.max(roll(20), roll(20));
                    break;
                case Modifier.Disadvantage:
                    hit = Math.min(roll(20), roll(20));
                    break;
                default:
                    hit = roll(20);
                    break;
            }
            return {
                    dice: hit,
                    color: getHitColor(hit, attack.attackBonus, { low: 1, crit: 20, hit: ac }),
                };
        });
        this.rollDamage(idx, ac);
    }

    rollDamage(actionIdx: number, ac: number): void {
        if (!this.attackRolls) {
            throw new Error(`cannot roll damage when no attacks rolled`);
        }
        this.damageRolls = this.attackRolls.map((attackRoll, idx) => {
            return this.rollDamageIdx(actionIdx, idx, ac);
        });
    }

    rollDamageIdx(actionIdx: number, idx: number, ac: number): DiceResult[] {
        if (!this.attackRolls) {
            throw new Error(`cannot roll damage when no attacks rolled`);
        }
        const attacks = this.actions[actionIdx].attacks;
        if (!attacks) {
            throw new Error(`action ${this.actions[idx].name} (${idx}) has no attacks`);
        }
        const attackRoll = this.attackRolls[idx];
        if (attackRoll.dice + attacks[idx].attackBonus < ac) {
            return [];
        }
        const attack = attacks[idx];
        const diceMult = attackRoll.dice == 20 ? 2 : 1;
        const damageRoll: DiceResult[] = [];
        attack.damage.forEach((dmgRoll) => {
            for (let i = 0; i < diceMult*dmgRoll.numDice; i++) {
                const dmg = roll(dmgRoll.dice);
                damageRoll.push({
                    dice: dmg,
                    color: getHitColor(dmg, dmgRoll.bonus, { crit: dmgRoll.dice }),
                });
            }
        });
        return damageRoll;
    }

    constructor(props: {
        name: string,
        image?: string,
        size: Size,
        cr: number,
        ac: number,
        speed: number,
        hitPoints: number,
        hitDice?: number,
        actions: Action[],
        traits: Traits,
    }) {
        this.name = props.name;
        this.image = props.image;

        this.size = props.size;
        this.cr = props.cr;
        this.ac = props.ac;
        this.speed = props.speed;
        this.currentHitPoints = props.hitPoints;
        this.maxHitPoints = props.hitPoints;
        this.hitDice = props.hitDice;
        this.actions = props.actions;

        if (props.traits.mightySummoner && this.hitDice) {
            this.maxHitPoints += 2 * this.hitDice;
            this.currentHitPoints = this.maxHitPoints;
        }
    }
}

export class CreatureBoar extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Boar",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Medium,
            cr: 1 / 4,
            ac: 13,
            speed: 40,
            hitPoints: 11,
            hitDice: 2,
            actions: [{
                name: "Charge + Tusk",
                description: "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                attacks: [{
                    attackBonus: 3,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: 0,
                    }, {
                        numDice: 1,
                        dice: 6,
                        bonus: 1,
                    }]
                }],
            }, {
                name: "Tusk",
                description: "Melee Weapon Attack, one target, slashing damage",
                attacks: [{
                    attackBonus: 3,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: 1,
                    }]
                }],
            }],
            traits,
        });
    }
}

export class CreatureElk extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Elk",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1 / 4,
            ac: 10,
            speed: 50,
            hitPoints: 13,
            hitDice: 2,
            actions: [{
                name: "Charge + Ram",
                description: "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attacks: [{
                    attackBonus: 5,
                    damage: [{
                        numDice: 2,
                        dice: 6,
                        bonus: 0,
                    }, {
                        numDice: 1,
                        dice: 6,
                        bonus: 3,
                    }]
                }],
            }, {
                name: "Ram",
                description: "Melee Weapon Attack, bludgeoning damage",
                attacks: [{
                    attackBonus: 5,
                    damage: [{
                        numDice: 1,
                        dice: 6,
                        bonus: 3,
                    }]
                }],
            }, {
                name: "Hooves",
                description: "Melee Weapon Attack, one prone creature, bludgeoning damage",
                attacks: [{
                    attackBonus: 5,
                    damage: [{
                        numDice: 2,
                        dice: 4,
                        bonus: 3,
                    }]
                }],
            }],
            traits,
        });
    }
}

export class CreatureBrownBear extends Creature {
    constructor(traits: Traits) {
        super({
            name: "Brown Bear",
            image: "https://www.dndbeyond.com/attachments/2/648/beast.jpg",
            size: Size.Large,
            cr: 1,
            ac: 11,
            speed: 40,
            hitPoints: 34,
            hitDice: 4,
            actions: [{
                name: "Multiattack (Bite, Claws)",
                description: "Melee Weapon Attacks, one target, piercing damage, slashing damage",
                attacks: [{
                    attackBonus: 6,
                    damage: [{
                        numDice: 1,
                        dice: 8,
                        bonus: 4,
                    }]
                }, {
                    attackBonus: 6,
                    damage: [{
                        numDice: 2,
                        dice: 6,
                        bonus: 4,
                    }]
                }],
            }],
            traits,
        });
    }
}