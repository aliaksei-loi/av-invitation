import { Timers } from '@/components/timers'
import { milestones } from '@/lib/milestones'

import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.monogram} aria-label="A and V">
                <span aria-hidden="true" className={styles.a}>
                    A
                </span>
                <span aria-hidden="true" className={styles.v}>
                    V
                </span>
            </h1>
            <Timers milestones={milestones} />
        </main>
    )
}
