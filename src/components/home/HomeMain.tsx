import Gamification from "./sections/gamification/Gamification"
import Hero from "./sections/hero/Hero"
import Method from "./sections/codlyMethod/Method"
import LessonFlow from "./sections/lessonflow/LessonFlow"
import Plans from "./sections/plans/Plans"
import Trails from "./sections/trails/Trails"
import KapyCTA from "./sections/kapyCTA/KapyCTA"

export default function HomeMain() {
    return (
        <main className="w-full overflow-x-hidden">
            <Hero />
            <Method />
            <LessonFlow />
            <Trails />
            <Gamification />
            <Plans />
            <KapyCTA />
        </main>
    )
}
