
type TypeCards = {
    id: number;
    title: string;
    description: string;
};

const cards: TypeCards[] = [
    {
        id: 1,
        title: "Explicação rápida",
        description: "2 a 4 telas direto ao ponto.",
    },
    {
        id: 2,
        title: "Exemplo prático",
        description: "Veja o conceito aplicado.",
    },
    {
        id: 3,
        title: "Exercícios guiados",
        description: "2 a 4 exercícios por lição.",
    },
    {
        id: 4,
        title: "Desafio final",
        description: "Um desafio para fixar o conteúdo.",
    },
    {
        id: 5,
        title: "Resultado",
        description: "XP, acertos e próxima lição.",
    },
];

export default function LessonFlow() {
    return (
        <section id="formato-licao" className="relative w-full scroll-mt-20 overflow-hidden bg-background py-20 sm:py-24">
            <div className="mx-auto w-full max-w-295 px-6 lg:px-10 xl:px-6">
                <div className="max-w-2xl">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        Formato da lição
                    </span>

                    <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
                        Do conceito ao desafio em uma sessão só
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base">
                        Aprenda, pratique e evolua em cinco etapas simples, pensadas para transformar conhecimento em habilidade.
                    </p>
                </div>

                <div className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-5 lg:gap-6">
                    <div className="pointer-events-none absolute top-5.25 right-[10%] left-[10%] hidden h-px bg-primary/20 lg:block" />

                    {cards.map((card) => (
                        <article key={card.id} className="group relative flex flex-col items-start">
                            <div className="relative z-10 flex size-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-[0_5px_16px_rgba(124,58,237,0.2)] ring-4 ring-background transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary-dark group-hover:shadow-[0_8px_22px_rgba(124,58,237,0.3)]">
                                {card.id}
                            </div>

                            <h3 className="mt-5 text-sm font-bold tracking-tight text-foreground sm:text-base">
                                {card.title}
                            </h3>

                            <p className="mt-2 max-w-52.5 text-sm leading-6 text-muted">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
