import { IconType } from "react-icons";
import { FiZap, FiTrendingUp, FiCreditCard, FiSmartphone } from "react-icons/fi";

type TypeCards = {
    id: number;
    icon: IconType;
    title: string;
    description: string;
};

const cards: TypeCards[] = [
    {
        id: 1,
        icon: FiZap,
        title: "Lições de 5 minutos",
        description: "Explicação rápida, exemplo prático e exercícios guiados em cada lição.",
    },
    {
        id: 2,
        icon: FiTrendingUp,
        title: "XP e sequência diária",
        description: "Ganhe XP a cada lição e mantenha sua sequência de estudos ativa.",
    },
    {
        id: 3,
        icon: FiCreditCard,
        title: "Comece sem cartão",
        description: "Explore o conteúdo e comece a aprender antes de escolher um plano.",
    },
    {
        id: 4,
        icon: FiSmartphone,
        title: "Web, Android e iOS",
        description: "Estude pelo navegador ou continue seu progresso pelo celular.",
    },
];

export default function Method() {
    return (
        <section id="como-funciona" className="w-full bg-lavender/70 py-20 sm:py-24">
            <div className="mx-auto w-full max-w-295 px-6 lg:px-10 xl:px-6">

                <div className="max-w-2xl">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">O método Codly</span>

                    <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-foreground sm:text-4xl">
                        Feito para encaixar na sua rotina
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base">
                        Lições curtas, exercícios práticos e progresso visível — sem depender de cursos longos para começar a programar de verdade.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <article key={card.id} className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_14px_35px_rgba(91,33,182,0.08)]">
                                <div className="flex size-10 items-center justify-center rounded-xl bg-lavender text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                    <Icon size={18} />
                                </div>

                                <h3 className="mt-5 text-base font-bold tracking-tight text-foreground">
                                    {card.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-muted">
                                    {card.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}