import {
  ShieldCheck,
  Sparkles,
  BarChart3,
  ArrowRight,
} from 'lucide-react'
import '../styles/SecaoDestaque.css'

const beneficios = [
  {
    icone: <Sparkles size={24} strokeWidth={2} />,
    titulo: 'Automação simples',
    texto: 'Reduza tarefas repetitivas e organize fluxos de trabalho de forma prática.',
  },
  {
    icone: <BarChart3 size={24} strokeWidth={2} />,
    titulo: 'Decisões com dados',
    texto: 'Acompanhe indicadores importantes em tempo real com visualização clara.',
  },
  {
    icone: <ShieldCheck size={24} strokeWidth={2} />,
    titulo: 'Operação segura',
    texto: 'Tenha mais controle, estabilidade e proteção para os processos da empresa.',
  },
]

export default function SecaoDestaque() {
  return (
    <section className="destaque-section" id="solucoes">
      <div className="container-xl">

        <div className="destaque-header text-center">
          <span className="badge-control mb-3 d-inline-block">
            Diferenciais
          </span>

          <h2 className="destaque-title">
            Uma nova forma de acompanhar sua empresa
          </h2>

          <p className="destaque-subtitle">
            Centralize informações, automatize rotinas e visualize
            tudo que importa em uma experiência simples e moderna.
          </p>
        </div>

        <div className="destaque-beneficios-grid">
          {beneficios.map((item, index) => (
            <div
              key={item.titulo}
              className={`destaque-beneficio-card animate-fade-up animate-delay-${index + 1}`}
            >
              <div className="destaque-beneficio-icon">
                {item.icone}
              </div>

              <h3>{item.titulo}</h3>

              <p>{item.texto}</p>
            </div>
          ))}
        </div>

        <div className="destaque-cta">
          <div>
            <strong>Pronto para modernizar sua gestão?</strong>

            <span>
              Comece com uma plataforma visual, rápida e intuitiva.
            </span>
          </div>

          <a href="#servicos" className="btn-control btn">
            Ver soluções
            <ArrowRight size={16} className="ms-2" />
          </a>
        </div>

      </div>
    </section>
  )
}