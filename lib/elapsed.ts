const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

export type Elapsed = {
    days: number
    hours: number
    minutes: number
}

export function elapsedSince(start: number, now: number): Elapsed {
    const ms = Math.max(0, now - start)

    return {
        days: Math.floor(ms / DAY),
        hours: Math.floor((ms % DAY) / HOUR),
        minutes: Math.floor((ms % HOUR) / MINUTE),
    }
}
