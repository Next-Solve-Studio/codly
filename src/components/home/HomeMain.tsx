import Gamification from "./sections/gamification/Gamification"
import Hero from "./sections/hero/Hero"
import Plans from "./sections/plans/Plans"
import Trails from "./sections/trails/Trails"

export default function HomeMain() {
    return (
        <main className="w-full overflow-x-hidden">
            <Hero />
            <Trails/>
            <Gamification/>
            <Plans/>
        </main>
    )
}
