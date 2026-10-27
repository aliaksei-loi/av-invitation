'use client'

import { elapsedSince } from '@/lib/elapsed'
import type { Milestone } from '@/lib/milestones'
import { useNow } from '@/lib/use-now'

import styles from './timers.module.css'

const sinceFormat = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
})

const two = (value: number) => String(value).padStart(2, '0')

type TimerProps = {
    milestone: Milestone
    now: number | null
}

function Timer({ milestone, now }: TimerProps) {
    const start = new Date(milestone.since)
    const { days, hours, minutes } = elapsedSince(
        start.getTime(),
        now ?? start.getTime()
    )

    return (
        <li className={styles.row}>
            <div className={styles.meta}>
                <h2 className={styles.label}>{milestone.label}</h2>
                <p className={styles.since}>
                    since{' '}
                    <time dateTime={milestone.since}>
                        {sinceFormat.format(start)}
                    </time>
                </p>
            </div>
            <p className={styles.counter} data-ready={now !== null}>
                <span className={styles.group}>
                    <span className={styles.value}>
                        {days.toLocaleString('en-US')}
                    </span>
                    <span className={styles.unit}>
                        {days === 1 ? 'day' : 'days'}
                    </span>
                </span>
                <span className={styles.group}>
                    <span className={styles.value}>{two(hours)}</span>
                    <span className={styles.unit}>h</span>
                    <span className={styles.value}>{two(minutes)}</span>
                    <span className={styles.unit}>m</span>
                </span>
            </p>
        </li>
    )
}

type TimersProps = {
    milestones: Milestone[]
}

export function Timers({ milestones }: TimersProps) {
    const now = useNow()

    return (
        <ul className={styles.list}>
            {milestones.map((milestone) => (
                <Timer key={milestone.since} milestone={milestone} now={now} />
            ))}
        </ul>
    )
}
