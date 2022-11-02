export interface DiceColor {
    background: string;
    color: string;
}

export interface DiceResult {
    dice: number;
    color: DiceColor;
}

export function roll(d: number): number {
    return Math.floor(Math.random() * d) + 1;
}

export function getHitColor(res: number, bonus: number, { low, crit, hit }: { low?: number; crit?: number; hit?: number }): DiceColor {
    if (crit && res >= crit) {
        return {
            background: "green",
            color: "white",
        };
    }
    if (low && res == low) {
        return {
            background: "red",
            color: "white",
        };
    }
    if (hit && res + bonus >= hit) {
        return {
            background: "gray",
            color: "white",
        };
    }
    return {
        background: "#e0e0e0",
        color: "black",
    };
}