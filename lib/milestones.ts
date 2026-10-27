export type Milestone = {
    label: string
    /** Local wall-clock time as ISO 8601 without a timezone offset. */
    since: string
}

export const milestones: Milestone[] = [
    { label: 'Aliaksei & Viktoria', since: '2021-11-21T15:00' },
    { label: 'Stefan', since: '2024-08-18T21:41' },
    { label: 'Leonelia', since: '2026-10-20T01:20' },
]
