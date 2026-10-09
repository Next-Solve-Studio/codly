"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "motion/react";
import {
    FiMail,
    FiSend,
    FiMessageCircle,
    FiCode,
    FiInstagram,
    FiArrowUpRight,
    FiArrowRight,
    FiCopy,
    FiCheck,
    FiZap,
    FiChevronDown,
    FiRotateCcw,
} from "react-icons/fi";
import SectionInfo from "@/ui/SectionInfo";

const EMAIL = "contato@codly.com.br";

type Answers = { name: string; email: string; subject: string; message: string };
type Msg = { from: "kapy" | "user"; text: string };

const emptyAnswers: Answers = { name: "", email: "", subject: "", message: "" };
const emailOk = (v: string) => /^\S+@\S+\.\S+$/.test(v);

const steps: {
    key: keyof Answers;
    ask: (a: Answers) => string;
    placeholder?: string;
    type?: string;
    chips?: string[];
}[] = [
    {
        key: "name",
        ask: () => "Oi! Eu sou o Kapy, o mascote da Codly. Como posso te chamar?",
        placeholder: "Seu nome",
    },
    {
        key: "email",
        ask: (a) => `Prazer, ${a.name}! Qual e-mail a equipe pode usar pra te responder?`,
        placeholder: "voce@email.com",
        type: "email",
    },
    {
        key: "subject",
        ask: () => "Sobre o que você quer falar?",
        chips: ["Dúvida sobre cursos", "Dúvida sobre planos", "Problema técnico", "Sugestão", "Outro"],
    },
    {
        key: "message",
        ask: () => "Perfeito. Agora conta pra gente com detalhes:",
        placeholder: "Escreva sua mensagem...",
    },
];

const miniFaq = [
    { q: "Preciso saber programar antes?", a: "Não, as trilhas começam do zero, com lições curtas." },
    { q: "Como funciona o período demo?", a: "São 7 dias grátis com acesso ao conteúdo iniciante." },
    { q: "Posso usar pelo celular?", a: "Sim, no navegador, como PWA e nos apps Android e iOS." },
];

const floaters = [
    { icon: <FiMail size={20} />, className: "left-2 top-2", delay: 0 },
    { icon: <FiMessageCircle size={22} />, className: "left-24 top-16", delay: 0.8 },
    { icon: <FiCode size={20} />, className: "left-4 top-28", delay: 1.6 },
];

function TypingDots() {
    return (
        <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-surface-alt px-4 py-3">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                    className="size-1.5 rounded-full bg-primary"
                />
            ))}
        </div>
    );
}

function KapyChat() {
    const [msgs, setMsgs] = useState<Msg[]>([]);
    const [step, setStep] = useState(0);
    const [typing, setTyping] = useState(false);
    const [value, setValue] = useState("");
    const [done, setDone] = useState(false);
    const [answers, setAnswers] = useState<Answers>(emptyAnswers);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const timers = useRef<number[]>([]);

    function kapySay(text: string, cb?: () => void) {
        setTyping(true);
        const id = window.setTimeout(() => {
            setTyping(false);
            setMsgs((m) => [...m, { from: "kapy", text }]);
            cb?.();
        }, 800 + Math.min(text.length * 8, 500));
        timers.current.push(id);
    }

    useEffect(() => {
        kapySay(steps[0].ask(emptyAnswers));
        const pending = timers.current;
        return () => pending.forEach((id) => window.clearTimeout(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [msgs, typing, done]);

    useEffect(() => {
        if (!typing && msgs.length > 1 && !done) inputRef.current?.focus({ preventScroll: true });
    }, [typing, msgs.length, done]);

    function submit(text: string) {
        const v = text.trim();
        if (!v || typing || done) return;

        const current = steps[step];
        setMsgs((m) => [...m, { from: "user", text: v }]);
        setValue("");

        if (current.key === "email" && !emailOk(v)) {
            kapySay("Hmm, esse e-mail não parece certo. Pode conferir?");
            return;
        }

        const next = { ...answers, [current.key]: v };
        setAnswers(next);

        if (step < steps.length - 1) {
            setStep(step + 1);
            kapySay(steps[step + 1].ask(next));
        } else {
            kapySay(
                `Prontinho, ${next.name}! Já levei sua mensagem pra equipe. Eles respondem em até 2 dias úteis.`,
                () => setDone(true)
            );
        }
    }

    function reset() {
        setMsgs([]);
        setStep(0);
        setDone(false);
        setValue("");
        setAnswers(emptyAnswers);
        kapySay(steps[0].ask(emptyAnswers));
    }

    const current = steps[step];

    return (
        <div className="flex h-[520px] flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_25px_70px_-30px_rgba(91,33,182,0.35)]">
            {/* header */}
            <div className="flex items-center gap-3 border-b border-border bg-surface px-5 py-4">
                <div className="relative">
                    <div
                        role="img"
                        aria-label="Kapy"
                        className="size-11 rounded-full border-2 border-lavender bg-surface-alt bg-no-repeat"
                        style={{
                            backgroundImage: "url('/images/KapyFrontal.jpeg')",
                            backgroundSize: "170% auto",
                            backgroundPosition: "50% 9%",
                        }}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 flex size-3.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-70" />
                        <span className="relative inline-flex size-3.5 rounded-full bg-green-500 ring-2 ring-surface" />
                    </span>
                </div>
                <div>
                    <div className="text-sm font-extrabold text-foreground">Kapy</div>
                    <div className="text-xs text-muted">
                        {typing ? "digitando..." : "mascote da Codly"}
                    </div>
                </div>
            </div>

            {/* mensagens */}
            <div ref={scrollRef} className="flex flex-1 flex-col gap-3 overflow-y-auto bg-background/60 px-5 py-5">
                <AnimatePresence initial={false}>
                    {msgs.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 380, damping: 26 }}
                            className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                                m.from === "kapy"
                                    ? "self-start rounded-bl-md bg-surface-alt text-foreground"
                                    : "self-end rounded-br-md bg-primary text-white"
                            }`}
                        >
                            {m.text}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {typing && <TypingDots />}

                {done && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                        className="relative mt-1 overflow-hidden rounded-2xl border border-primary/20 bg-lavender p-4"
                    >
                        <motion.span
                            initial={{ x: -30, y: 20, opacity: 0 }}
                            animate={{ x: [-30, 120, 320], y: [20, -10, -50], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.6, ease: "easeOut" }}
                            className="absolute left-0 top-1/2 text-primary"
                        >
                            <FiSend size={18} />
                        </motion.span>
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <div className="text-sm font-extrabold text-foreground">Mensagem enviada!</div>
                                <div className="text-xs text-muted">Valeu por falar com a gente.</div>
                            </div>
                            <motion.span
                                initial={{ scale: 0, rotate: -20 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.5 }}
                                className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-extrabold text-white shadow-[0_8px_18px_-6px_rgba(124,58,237,0.7)]"
                            >
                                <FiZap size={12} />
                                +50 XP
                            </motion.span>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* entrada */}
            <div className="border-t border-border bg-surface px-4 py-3">
                {done ? (
                    <button
                        onClick={reset}
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-alt text-sm font-semibold text-foreground transition-colors hover:bg-lavender hover:text-primary"
                    >
                        <FiRotateCcw size={14} />
                        Enviar outra mensagem
                    </button>
                ) : current.chips ? (
                    <div className="flex flex-wrap gap-2">
                        {current.chips.map((c) => (
                            <motion.button
                                key={c}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={typing}
                                onClick={() => submit(c)}
                                className="rounded-full border border-primary/20 bg-lavender px-3.5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white disabled:opacity-50"
                            >
                                {c}
                            </motion.button>
                        ))}
                    </div>
                ) : (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            submit(value);
                        }}
                        className="flex items-center gap-2"
                    >
                        <input
                            ref={inputRef}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            disabled={typing}
                            type={current.type ?? "text"}
                            placeholder={current.placeholder}
                            className="h-11 flex-1 rounded-xl border border-border bg-surface-alt px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-primary disabled:opacity-60"
                        />
                        <motion.button
                            type="submit"
                            whileTap={{ scale: 0.9 }}
                            disabled={typing || !value.trim()}
                            aria-label="Enviar"
                            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-[0_8px_20px_-8px_rgba(124,58,237,0.7)] transition-colors hover:bg-primary-dark disabled:opacity-40"
                        >
                            <FiSend size={16} />
                        </motion.button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default function ContatoMain() {
    const [copied, setCopied] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    function copyEmail() {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
    }

    return (
        <section className="relative w-full overflow-hidden bg-background">
            <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative mx-auto w-400 max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
                {/* topo */}
                <div className="mb-12 flex items-start justify-between gap-10">
                    <div className="max-w-xl">
                        <SectionInfo icon={<FiMail size={13} />} subTitle="Contato" title="Fale com a gente" />
                        <p className="-mt-4 text-base leading-relaxed text-muted">
                            Pode falar com a gente sobre{" "}
                            <span className="inline-block font-bold text-primary [&>div]:inline">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "dúvidas sobre cursos",
                                            "sugestões de conteúdo",
                                            "problemas técnicos",
                                            "parcerias",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 45,
                                        deleteSpeed: 25,
                                    }}
                                />
                            </span>
                        </p>
                    </div>

                    <div className="relative hidden h-44 w-48 shrink-0 md:block">
                        {floaters.map((f, i) => (
                            <motion.span
                                key={i}
                                animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
                                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
                                className={`absolute flex size-14 items-center justify-center rounded-2xl border border-border bg-surface text-primary shadow-[0_14px_30px_-12px_rgba(91,33,182,0.35)] ${f.className}`}
                            >
                                {f.icon}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <KapyChat />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ staggerChildren: 0.12 }}
                        className="flex flex-col gap-5"
                    >
                        {/* e-mail com copiar */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
                            className="rounded-3xl border border-border bg-surface p-6"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="flex size-11 items-center justify-center rounded-xl bg-lavender text-primary">
                                        <FiMail size={18} />
                                    </span>
                                    <div>
                                        <div className="text-sm font-extrabold text-foreground">Prefere e-mail?</div>
                                        <div className="text-sm text-muted">{EMAIL}</div>
                                    </div>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={copyEmail}
                                    aria-label="Copiar e-mail"
                                    className="relative flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-alt text-primary transition-colors hover:bg-lavender"
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.span
                                            key={copied ? "ok" : "copy"}
                                            initial={{ scale: 0, rotate: -90 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            exit={{ scale: 0 }}
                                            transition={{ duration: 0.18 }}
                                        >
                                            {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                                        </motion.span>
                                    </AnimatePresence>
                                </motion.button>
                            </div>
                            <AnimatePresence>
                                {copied && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden pt-3 text-xs font-semibold text-primary"
                                    >
                                        E-mail copiado!
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* instagram */}
                        <motion.div variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}>
                            <Link
                                href="https://instagram.com/codly"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-[0_20px_40px_-20px_rgba(91,33,182,0.7)] transition-transform duration-300 hover:-translate-y-1"
                            >
                                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[420%]" />
                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <motion.span
                                            whileHover={{ rotate: [0, -12, 12, 0] }}
                                            transition={{ duration: 0.5 }}
                                            className="flex size-12 items-center justify-center rounded-2xl bg-white/15"
                                        >
                                            <FiInstagram size={22} />
                                        </motion.span>
                                        <div>
                                            <div className="text-base font-extrabold">@codly</div>
                                            <div className="text-xs text-white/75">Novidades e dicas rápidas de código</div>
                                        </div>
                                    </div>
                                    <FiArrowUpRight
                                        size={20}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </div>
                            </Link>
                        </motion.div>

                        {/* mini faq */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
                            className="rounded-3xl border border-border bg-surface p-6"
                        >
                            <div className="mb-2 text-sm font-extrabold text-foreground">Dúvidas rápidas</div>
                            {miniFaq.map((item, i) => {
                                const open = openFaq === i;
                                return (
                                    <div key={item.q} className="border-b border-border last:border-b-0">
                                        <button
                                            onClick={() => setOpenFaq(open ? null : i)}
                                            className="flex w-full items-center justify-between gap-3 py-3.5 text-left"
                                        >
                                            <span className="text-[13.5px] font-bold text-foreground">{item.q}</span>
                                            <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-primary">
                                                <FiChevronDown size={16} />
                                            </motion.span>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {open && (
                                                <motion.p
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden pb-3.5 text-[13px] text-muted"
                                                >
                                                    {item.a}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                            <Link
                                href="/faq"
                                className="group mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary"
                            >
                                Ver todas as perguntas
                                <FiArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}