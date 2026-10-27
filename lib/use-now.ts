import { useSyncExternalStore } from 'react'

let now = Date.now()
let timer: ReturnType<typeof setInterval> | undefined
const listeners = new Set<() => void>()

const tick = () => {
    now = Date.now()
    listeners.forEach((listener) => listener())
}

const subscribe = (listener: () => void) => {
    listeners.add(listener)
    if (listeners.size === 1) {
        tick()
        timer = setInterval(tick, 1000)
    }

    return () => {
        listeners.delete(listener)
        if (listeners.size === 0) clearInterval(timer)
    }
}

const getSnapshot = () => now
const getServerSnapshot = () => null

/**
 * Current time in ms, shared by every subscriber and refreshed once a second.
 * Returns `null` on the server and during hydration so markup never disagrees.
 */
export const useNow = () =>
    useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
