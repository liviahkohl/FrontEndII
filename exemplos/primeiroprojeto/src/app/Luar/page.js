import styles from "./page.module.css";

export default function Luar() {
    return (
        <div className="min-h-screen bg-slate-50">
            <main className="max-w-4xl mx-auto p-6">
                <article className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-2xl font-semibold mb-4">Luar (A Gente Precisa Ver o Luar) — 1981</h2>


                    <p className="mb-4 leading-relaxed">
                        <strong>Lançamento:</strong> 1981 (Warner)
                    </p>


                    <section className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Contexto</h3>
                        <p className="leading-relaxed">
                        A incursão pop de Gil em Realce prossegue em Luar (A Gente Precisa Ver o Luar), onde o cantor transita por funk, reggae e pop. O álbum começa com a faixa-título e seu irresistível ritmo dançante baseado na disco music. Gravada antes pela banda A Cor do Som, embora seja uma canção de Gilberto Gil, “Palco” aparece neste álbum numa versão interessante em que há uma conexão muito bem construída entre o funk ao estilo Earth, Wind and Fire com um ritmo ijexá diluído numa estilização pop. Na lindíssima “Se Eu Quiser Falar Com Deus”, Gil busca estabelecer uma conversa mais íntima e sincera com o Altíssimo. O disco ainda tem outras canções famosas como “Cores Vivas” (misto de reggae e xote) e “Pela Lente do Amor”.
                        </p>
                    </section>


                    <section className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Faixas em destaque</h3>
                        <ul className="list-disc list-inside">
                            <li>A Gente Precisa Ver o Luar (faixa-título)</li>
                            <li>Se Eu Quiser Falar com Deus</li>
                            <li>Palco</li>
                        </ul>
                    </section>


                    <section>
                        <h3 className="text-lg font-medium mb-2">Produção e músicos</h3>
                        <p className="leading-relaxed mb-2">
                            Produção com participação de Liminha e arranjos de Lincoln Olivetti em algumas faixas.
                        </p>
                        <p className="text-sm text-slate-600">(Consulte a discografia para ficha técnica completa.)</p>
                    </section>
                </article>
            </main>
        </div>
    )
}