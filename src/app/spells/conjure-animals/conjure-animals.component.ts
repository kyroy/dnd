import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getHitColor } from 'src/app/model/dice.model';
import { Creature, CreatureBoar, CreatureBrownBear, CreatureElk, Modifier, Size, Traits } from '../../model/creature.model';
import { CreatureGiantConstrictorSnake } from '../../model/giant-constrictor-snake.creature.model';
import { CreatureGiantOwl } from '../../model/giant-owl.creature.model';
import { CreatureGiantPoisonousSnake } from '../../model/giant-poisonous-snake.creature.model';
import { CreatureGiantToad } from '../../model/giant-toad.creature.model';
import { CreatureGiantWolfSpider } from '../../model/giant-wolf-spider.creature.model';
import { CreatureRidingHorse } from '../../model/riding-horse.creature.model';
import { CreatureWolf } from '../../model/wolf.creature.model';
import { CreatureConstrictorSnake } from '../../model/constrictor-snake.creature.model';
import { CreatureGiantBat } from '../../model/giant-bat.creature.model';
import { CreatureGiantBadger } from '../../model/giant-badger.creature.model';
import { CreatureDraftHorse } from '../../model/draft-horse.creature.model';
import { CreatureAxeBeak } from '../../model/axe-beak.creature.model';
import { CreatureBestialSpiritLand, CreatureBestialSpiritAir, CreatureBestialSpiritWater } from '../../model/summon-beast.creature.model';
import { CreaturePanther } from '../../model/panther.creature.model';
import { CreatureFlyingSnake } from '../../model/flying-snake.creature.model';
import { CreatureCamel } from '../../model/camel.creature.model';
import { CreatureGiantFireBeetle } from '../../model/giant-fire-beetle.creature.model';
import { CreatureDireWolf } from '../../model/dire-wolf.creature.model';
import { CreatureBloodHawk } from '../../model/blood-hawk.creature.model';
import { CreatureGiantLizard } from '../../model/giant-lizard.creature.model';
import { CreatureGiantFrog } from '../../model/giant-frog.creature.model';
import { CreatureGiantCentipede } from '../../model/giant-centipede.creature.model';

const creatureConstructors: ((traits: Traits) => Creature)[] = [
  (traits: Traits) => new CreatureAxeBeak(traits),
  (traits: Traits) => new CreatureBestialSpiritAir(traits),
  (traits: Traits) => new CreatureBestialSpiritLand(traits),
  (traits: Traits) => new CreatureBestialSpiritWater(traits),
  (traits: Traits) => new CreatureBloodHawk(traits),
  (traits: Traits) => new CreatureBoar(traits),
  (traits: Traits) => new CreatureBrownBear(traits),
  (traits: Traits) => new CreatureCamel(traits),
  (traits: Traits) => new CreatureConstrictorSnake(traits),
  (traits: Traits) => new CreatureDireWolf(traits),
  (traits: Traits) => new CreatureDraftHorse(traits),
  (traits: Traits) => new CreatureElk(traits),
  (traits: Traits) => new CreatureFlyingSnake(traits),
  (traits: Traits) => new CreatureGiantBadger(traits),
  (traits: Traits) => new CreatureGiantBat(traits),
  (traits: Traits) => new CreatureGiantCentipede(traits),
  (traits: Traits) => new CreatureGiantConstrictorSnake(traits),
  (traits: Traits) => new CreatureGiantFireBeetle(traits),
  (traits: Traits) => new CreatureGiantFrog(traits),
  (traits: Traits) => new CreatureGiantLizard(traits),
  (traits: Traits) => new CreatureGiantOwl(traits),
  (traits: Traits) => new CreatureGiantPoisonousSnake(traits),
  (traits: Traits) => new CreatureGiantToad(traits),
  (traits: Traits) => new CreatureGiantWolfSpider(traits),
  (traits: Traits) => new CreaturePanther(traits),
  (traits: Traits) => new CreatureRidingHorse(traits),
  (traits: Traits) => new CreatureWolf(traits),
].sort((a, b) => a({}).cr - b({}).cr);

@Component({
  selector: 'app-conjure-animals',
  templateUrl: './conjure-animals.component.html',
  styleUrls: ['./conjure-animals.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConjureAnimalsComponent implements OnInit {

  selectableCreatures: Creature[] = creatureConstructors.map((c) => c({
    mightySummoner: this.mighySummoner,
  }));
  numDice: number = 8;
  ac: number = 13;
  creature = creatureConstructors[0];
  creatures: Creature[] = [];

  crFilter: number | "none" = "none";
  sizeFilter: Size | "none" = "none";
  statusFilter: string | "none" = "none";
  attackModifier: Modifier = Modifier.Normal;
  mighySummoner: boolean = localStorage.getItem('mighySummoner') === "true";

  allHpChange = 1;
  currentActionIdx: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.updateCreatures();
  }

  updateCreatureList(): void {
    this.selectableCreatures = creatureConstructors
      .map((c) => c({
        mightySummoner: this.mighySummoner,
      }))
      .filter((c) => this.crFilter === "none" || c.cr == this.crFilter)
      .filter((c) => this.sizeFilter === "none" || c.size === this.sizeFilter)
      .filter((c) => this.statusFilter === "none" || c.actions.some((action) => action.description.includes(this.statusFilter)));
  }

  selectCreature(creature: Creature): void {
    const constructor = creatureConstructors.find((c) => c({}).name === creature.name);
    if (!constructor) {
      return;
    }
    this.currentActionIdx = 0;
    this.creature = constructor;
    const cr = this.creature({}).cr;
    if (cr <= 1 / 4) {
      this.numDice = 8;
    } else if (cr <= 1 / 2) {
      this.numDice = 4;
    } else if (cr <= 1) {
      this.numDice = 2;
    } else {
      this.numDice = 1;
    }

    this.creatures = [];
    this.updateCreatures();
  }

  updateCreatures() {
    this.creatures = this.creatures.slice(0, this.numDice);
    for (let i = this.creatures.length; i < this.numDice; i++) {
      this.creatures.push(this.creature({
        mightySummoner: this.mighySummoner,
      }));
    }
  }

  addHitPoints(creature: Creature, hp: number): void {
    creature.currentHitPoints += hp;
    if (creature.currentHitPoints <= 0) {
      this.creatures.splice(this.creatures.findIndex((c) => c === creature), 1);
    }
  }

  addHitPointsAll(hp: number): void {
    this.creatures.forEach((c) => this.addHitPoints(c, hp));
  }

  roll(): void {
    this.creatures.forEach((c) => c.attack(this.currentActionIdx, this.ac, this.attackModifier));
  }

  rollCreature(creature: Creature): void {
    creature.attack(this.currentActionIdx, this.ac, this.attackModifier);
  }

  update(): void {
    this.updateHitColors();
    this.updateDamage();
  }

  updateHitColors(): void {
    this.creatures.forEach((c) => {
      if (!c.attackRolls) {
        return;
      }
      c.attackRolls.forEach((attackRoll, idx) =>
        attackRoll.color = getHitColor(attackRoll.dice, c.actions[this.currentActionIdx].attacks![idx].attackBonus, { low: 1, crit: 20, hit: this.ac })
      );
    });
  }

  updateDamage(): void {
    const creatures = [...this.creatures];
    creatures.forEach((c) => {
      if (!c.attackRolls) {
        return;
      }
      c.attackRolls.forEach((attackRoll, idx) => {
        if (!c.damageRolls) {
          c.damageRolls = c.actions[this.currentActionIdx].attacks!.map(() => []);
        }
        const damageRoll = c.damageRolls[idx];
        if (attackRoll.dice + c.actions[this.currentActionIdx].attacks![idx].attackBonus >= this.ac) {
          // hit, but no dmg
          if (!damageRoll.length) {
            c.damageRolls[idx] = c.rollDamageIdx(this.currentActionIdx, idx, this.ac)
          }
        } else {
          // no hit, but dmg
          if (damageRoll.length) {
            c.damageRolls[idx] = [];
          }
        }
      })
    });
    this.creatures = creatures;
  }

  getDamage(creature: Creature): number[] {
    if (!creature.damageRolls) {
      return [];
    }
    const damage: number[] = [];
    creature.damageRolls.forEach((damageRoll, idx) => {
      if (damageRoll.length === 0) {
        return;
      }
      const dmgBonus = creature.actions[this.currentActionIdx].attacks!.reduce((sum, cur) => sum + cur.damage.reduce((sum, cur) => sum + cur.bonus, 0), 0)
      damage.push(damageRoll.reduce((sum, cur) => sum + cur.dice, 0) + dmgBonus);
    });
    return damage;
  }

  getDamageTooltip(creature: Creature, idx: number): string {
    if (!creature.damageRolls) {
      return "";
    }
    const damageRolls = creature.damageRolls.filter((r) => r.length > 0);
    const rolls = damageRolls[idx].map((roll) => roll.dice).join(" + ");
    const boni = creature.actions[this.currentActionIdx].attacks!.map((atk) => atk.damage.map((dmg) => dmg.bonus).join(" + ")).join(" + ");
    return `${rolls} (+ ${boni})`;
  }

  totalHits(): number {
    return this.creatures.reduce((sum, creature) => sum + (creature.attackRolls?.reduce((sum, cur, idx) => sum + ((cur.dice + creature.actions[this.currentActionIdx].attacks![idx].attackBonus) >= this.ac ? 1 : 0), 0) ?? 0), 0);
  }

  totalDamage(): number {
    return this.creatures.reduce((sum, creature) => sum + this.getDamage(creature).reduce((sum, cur) => sum + cur, 0), 0);
  }

  setting(name: string): void {
    const current = localStorage.getItem(name) === "true";
    localStorage.setItem(name, !current + "");
    console.log(current, localStorage.getItem(name))
  }

  max(a: number, b: number): number {
    return Math.max(a, b);
  }
}
