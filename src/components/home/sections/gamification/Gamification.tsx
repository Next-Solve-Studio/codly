"use client";

import { motion, type Variants } from "motion/react";
import { FiClock, FiZap, FiFlag, FiUsers } from "react-icons/fi";
import SectionInfo from "@/ui/SectionInfo";
import Ranking from "./components/Ranking";

type GameFeature = {
    icon: React.ReactNode;
    title: string;
    desc: string;
};

const gameFeatures: GameFeature[] = [
    {
        icon: <FiClock size={18} />,
        title: "Meta diária",
        desc: "Escolha estudar 1, 2 ou 3 lições por dia e acompanhe sua meta.",
    },
    {
        icon: <FiZap size={18} />,
        title: "Sequência (streak)",
        desc: "Não perca o ritmo: sua sequência conta os dias seguidos de estudo.",
    },
    {
        icon: <FiFlag size={18} />,
        title: "Conquistas",
        desc: "Primeira lição, 7 dias de sequência, 1000 XP, curso concluído.",
    },
    {
        icon: <FiUsers size={18} />,
        title: "Amigos e ranking",
        desc: "Adicione amigos e veja o ranking de XP entre vocês.",
    },
];

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -16 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

export const rowVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 + i * 0.08, duration: 0.4 },
    }),
};

export default function Gamification() {
    return (
        <section id="gamificacao" className="relative w-full overflow-hidden bg-background">
            <div className="mx-auto w-400 max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                <div>
                    <SectionInfo icon={<FiUsers size={13} />} title="Estude todo dia sem perder o ritmo" subTitle="Gamificação e amigos"/>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        className="flex flex-col gap-5"
                    >
                        {gameFeatures.map((f) => (
                            <motion.div key={f.title} variants={itemVariants} className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-xl bg-surface-alt flex items-center justify-center text-primary shrink-0">
                                    {f.icon}
                                </div>
                                <div>
                                    <div className="font-extrabold text-sm text-foreground">{f.title}</div>
                                    <p className="text-sm text-muted leading-relaxed mt-0.5">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <Ranking />
            </div>
        </section>
    );
}