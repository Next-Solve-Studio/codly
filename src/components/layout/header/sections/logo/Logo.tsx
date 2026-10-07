import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" aria-label="Ir para a página inicial da Codly" className="group flex w-fit items-center gap-2">
            <span className=" flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-[0_6px_18px_rgba(124,58,237,0.25)] transition-all duration-300
                group-hover:-translate-y-0.5 group-hover:bg-primary-darkgroup-hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)] ">
                C
            </span>

            <span className=" text-lg font-bold tracking-tight text-foreground transition-colors duration-300group-hover:text-primary">
                Codly
            </span>
        </Link>
    );
}