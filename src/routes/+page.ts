import rocketDamage from '$lib/data/rocket-damage.json';

export interface RocketDamageLevel {
  level: number;
  damage: number;
  crownTowerDamage: number;
  mirrorDamage: number;
  totalDamage: number;
  multiplier: number;
}

export interface RocketDamagePayload {
  generatedAt: string;
  source: {
    game: string;
    clientVersion: string;
    fingerprintVersion: string;
    rarity: string;
    baseDamage: number;
    crownTowerDamagePercent: number;
  };
  levels: RocketDamageLevel[];
}

export const load = () => {
  return {
    rocketDamage: rocketDamage as RocketDamagePayload
  };
};
