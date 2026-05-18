import {
  BarChart3,
  Users2,
  Workflow,
  FileText,
} from 'lucide-react'
import CardServico from './CardServico'
import '../styles/CardsServico.css'

const servicos = [
  {
    icone: <BarChart3 size={26} strokeWidth={2} />,
    titulo: 'Controle Financeiro',
    descricao:
      'Acompanhe receitas, despesas e indicadores financeiros em tempo real para tomar decisões com mais segurança.',
    cor: '#10b981',
    tag: 'Principal',
  },
  {
    icone: <Users2 size={22} strokeWidth={2} />,
    titulo: 'Gestão de Equipes',
    descricao:
      'Organize colaboradores, acompanhe desempenho e distribua tarefas.',
    cor: '#22c55e',
    tag: 'Equipe',
  },
  {
    icone: <Workflow size={22} strokeWidth={2} />,
    titulo: 'Automação Inteligente',
    descricao:
      'Automatize processos repetitivos e ganhe produtividade operacional.',
    cor: '#16a34a',
    tag: 'Automação',
  },
  {
    icone: <FileText size={22} strokeWidth={2} />,
    titulo: 'Relatórios Estratégicos',
    descricao:
      'Visualize métricas e relatórios detalhados para tomada de decisão.',
    cor: '#15803d',
    tag: 'Insights',
  },
]

export default function CardsServico() {
  const [servicoPrincipal, ...outrosServicos] = servicos

  return (
    <section className="cards-section" id="servicos">
      <div className="container-xl">

        <div className="row align-items-end mb-5">
          <div className="col-lg-7">
            <span className="badge-control mb-3 d-inline-block">
              Soluções
            </span>

            <h2 className="cards-section-title">
              Ferramentas para uma gestão mais inteligente
            </h2>
          </div>

          <div className="col-lg-5">
            <p className="cards-section-subtitle">
              Recursos pensados para simplificar processos,
              acompanhar indicadores e dar mais controle para
              empresas em crescimento.
            </p>
          </div>
        </div>

        <div className="services-layout">
          <div className="service-featured animate-fade-up animate-delay-1">
            <CardServico {...servicoPrincipal} />
          </div>

          <div className="service-side-grid">
            {outrosServicos.map((servico, index) => (
              <div
                key={servico.titulo}
                className={`animate-fade-up animate-delay-${index + 2}`}
              >
                <CardServico {...servico} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}