
import { knowledge  } from "./knowledge";
import { normalizeText } from "./normalize";

const fallback = "Ainda não encontrei uma resposta para essa pergunta. 🦫💜 Posso ajudar com dúvidas sobre a Codly, como instalação, planos, lições, XP, rankings e cadastro. Tente perguntar de outra forma!";

export function getResponse(message: string): string {
    const text = normalizeText(message);

    if (!text) return "Digite sua dúvida sobre a Codly! 💜";

    const paddedText = ` ${text} `;
    let bestScore = 0;
    let bestAnswer = fallback;

    for (const item of knowledge ) {
        for (const keyword of item.keywords) {
            const normalizedKeyword = normalizeText(keyword);

            if (!normalizedKeyword) continue;

            if (paddedText.includes(` ${normalizedKeyword} `)) {
                const score = normalizedKeyword.split(" ").length * 10 + normalizedKeyword.length;

                if (score > bestScore) {
                    bestScore = score;
                    bestAnswer = item.answer;
                }
            }
        }
    }

    return bestAnswer;
}
