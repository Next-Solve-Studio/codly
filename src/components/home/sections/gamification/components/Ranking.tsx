
import { motion,  } from "motion/react";
import { FiAward } from "react-icons/fi";
import { FaFire } from "react-icons/fa6";
import { rowVariants } from "../Gamification";

type RankingRow = {
    pos: number;
    name: string;
    streak: number;
    initials: string;
    avatarBg: string;
    you?: boolean;
};

const ranking: RankingRow[] = [
    { pos: 1, name: "Marina A.", streak: 42, initials: "MA", avatarBg: "var(--primary)" },
    { pos: 2, name: "Rafael S.", streak: 31, initials: "RS", avatarBg: "var(--primary-dark)" },
    { pos: 3, name: "Você", streak: 18, initials: "EU", avatarBg: "#22C55E", you: true },
    { pos: 4, name: "Diego P.", streak: 9, initials: "DP", avatarBg: "#F59E0B" },
];

const topStreak = Math.max(...ranking.map((r) => r.streak));

export default function Ranking() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-surface border border-border p-6 shadow-[0_25px_70px_rgba(91,33,182,0.14)]"
        >
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-lavender flex items-center justify-center text-primary">
                        <FiAward size={16} />
                    </span>
                    <span className="font-extrabold text-sm text-foreground">Ranking entre amigos</span>
                </div>
                <span className="text-xs font-semibold text-muted bg-surface-alt rounded-full px-3 py-1">
                    Esta semana
                </span>
            </div>

            <div className="flex flex-col">
                {ranking.map((r, i) => (
                    <motion.div
                        key={r.pos}
                        custom={i}
                        variants={rowVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{ x: 2 }}
                        className={`flex items-center gap-3 rounded-2xl px-3 py-3 ${
                            r.you ? "bg-lavender ring-1 ring-primary/20" : ""
                        } ${i < ranking.length - 1 ? "mb-1" : ""}`}
                    >
                        <span className="w-6 text-center text-xs font-extrabold text-muted shrink-0">
                            {r.pos}
                        </span>

                        <span
                            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0 ring-2 ring-surface"
                            style={{ background: r.avatarBg }}
                        >
                            {r.initials}
                        </span>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-bold text-sm text-foreground truncate">{r.name}</span>
                                <span className="flex items-center gap-1 font-extrabold text-xs text-orange-500 shrink-0">
                                    <FaFire size={12} />
                                    {r.streak} dias
                                </span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-border/40 overflow-hidden mt-1.5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${(r.streak / topStreak) * 100}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                                    className="h-full rounded-full"
                                    style={{ background: r.avatarBg }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}