import Gamification from "./sections/gamification/Gamification"
import Hero from "./sections/hero/Hero"
import Method from "./sections/codlyMethod/Method"
import Plans from "./sections/plans/Plans"
import Trails from "./sections/trails/Trails"

export default function HomeMain() {
    return (
        <main className="w-full overflow-x-hidden">
            <Hero />
            <Method />
            <Trails />
            <Gamification />
            <Plans />
        </main>
    )
}
