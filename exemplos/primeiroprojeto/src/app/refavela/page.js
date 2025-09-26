import styles from "./page.module.css";

export default function Refavela() {
    return (
        <div className="min-h-screen bg-slate-50">
            <main className="max-w-4xl mx-auto p-6">
                <article className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-2xl font-semibold mb-4">Refavela — 1977</h2>


                    <p className="mb-4 leading-relaxed">
                        <strong>Lançamento:</strong> 1977 (Philips)
                    </p>


                    <section className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Contexto</h3>
                        <p className="leading-relaxed">
                        A ideia de gravar Refavela nasceu após Gilberto Gil ter participado do 2° Festival Mundial de Arte e Cultura Negra (FESTAC 77), em Lagos, na Nigéria, no começo de 1977. Gil voltou da Nigéria com a ideia de gravar um álbum com um conceito musical fundamentado na ancestralidade africana, e ao mesmo tempo, trazendo a reboque referências de música negra contemporânea daquele momento como o afrobeat, juju music, funk e reggae, e evidentemente, a música afro-baiana propagada pelos blocos carnavalescos de Salvador como Ilê Aiyê e Filhos de Gandhy. Destaques para as faixas “Ilê Ayê”, “Balafon”, “Babá Alapalá”, “Patuscada de Gandhi” e uma versão com inclinação samba-funk para “Samba do Avião”, de Tom Jobim (1927-1994).
                        </p>
                    </section>


                    <section className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Faixas em destaque</h3>
                        <ul className="list-disc list-inside">
                            <li>Refavela (faixa-título)</li>
                            <li>Ilê Ayê</li>
                            <li>Babá Alapalá</li>
                        </ul>
                    </section>


                    <section>
                        <h3 className="text-lg font-medium mb-2">Produção e músicos</h3>
                        <p className="leading-relaxed mb-2">
                            Arranjos com destaque para metais e percussão; participação de músicos como
                            Perinho Santana e J. T. Meirelles em seções de sopro e arranjos.
                        </p>
                        <p className="text-sm text-slate-600">(Veja encarte/discogs para créditos completos.)</p>
                    </section>
                </article>
            </main>
        </div>
    )
}