import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Hero() {
    return (
        <section className="flex items-center justify-center relative w-full overflow-hidden bg-background">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] w-400 max-w-6xl items-center justify-items-center gap-10 px-5 py-12 sm:px-6 md:max-w-6xl lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8 lg:py-16">
                <div className="flex max-w-xl flex-col items-start justify-self-end">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-lavender px-3 py-1.5 text-xs font-semibold text-primary">
                        <AiOutlineThunderbolt/>
                        <span>Nova trilha de estudos</span>
                    </div>

                    <h1 className="max-w-xl text-5xl font-bold leading-[1.06] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[4.6rem]">
                        Aprenda a programar <span className="text-primary">todo dia</span>, em lições curtas.
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
                        Aprenda programação do zero com desafios rápidos, atividades práticas, XP, rankings e evolução diária. Tudo de forma simples, divertida e no seu ritmo.
                    </p>

                    <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <Link href="/cadastro" className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(124,58,237,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_12px_30px_rgba(124,58,237,0.32)]">
                            Começar grátis
                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
                        </Link>

                        <Link href="#como-funciona" className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-surface px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/20 hover:bg-lavender hover:text-primary">
                            Como funciona
                        </Link>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-muted">
                        <span className="flex items-center gap-1.5"><FiCheck className="text-primary" size={14} /> Comece gratuitamente</span>
                        <span className="flex items-center gap-1.5"><FiCheck className="text-primary" size={14} /> Aprenda no seu ritmo</span>
                        <span className="flex items-center gap-1.5"><FiCheck className="text-primary" size={14} /> Evolua todos os dias</span>
                    </div>
                </div>

                <div className="relative flex items-center justify-center lg:justify-center">
                    <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80" />

                    <div className="relative">
                        <div className="relative overflow-hidden rounded-4xl border border-border bg-surface p-2 shadow-[0_25px_70px_rgba(91,33,182,0.16)]">
                            <Image src="/images/KapyFrontal.jpeg" width={420} height={500} priority alt="Kapy, mascote da Codly" className="h-auto w-67.5 rounded-[1.6rem] object-cover 
                            sm:w-77.5  lg:w-[320px]" />
                        </div>

                        <div className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-7">
                            <span className="flex size-9 items-center justify-center rounded-xl bg-lavender text-lg">🔥</span>

                            <div>
                                <strong className="block text-sm font-bold text-foreground">12 dias</strong>
                                <span className="text-[11px] text-muted">de sequência</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}