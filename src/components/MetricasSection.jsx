import {
  TrendingUp,
  Users,
  Clock,
  Award,
} from 'lucide-react'
import '../styles/MetricasSection.css'

const metricas = [
  {
    icone: <TrendingUp size={28} strokeWidth={1.8} />,
    valor: 'R$ 850M',
    label: 'movimentados na plataforma',
    cor: '#10b981',
  },
  {
    icone: <Users size={28} strokeWidth={1.8} />,
    valor: '5.200+',
    label: 'empresas utilizando o sistema',
    cor: '#22c55e',
  },
  {
    icone: <Clock size={28} strokeWidth={1.8} />,
    valor: '< 50ms',
    label: 'tempo médio de resposta',
    cor: '#16a34a',
  },
  {
    icone: <Award size={28} strokeWidth={1.8} />,
    valor: '99.9%',
    label: 'estabilidade da plataforma',
    cor: '#15803d',
  },
]

export default function MetricasSection() {
  return (
    <section
      className="metricas-section"
      id="metricas"
    >
      <div className="container-xl">
        <div className="metricas-grid">
          {metricas.map((m, i) => (
            <div
              key={m.label}
              className={`metrica-item animate-fade-up animate-delay-${i + 1}`}
            >
              <div
                className="metrica-icon"
                style={{ '--m-color': m.cor }}
              >
                {m.icone}
              </div>

              <div
                className="metrica-valor"
                style={{ '--m-color': m.cor }}
              >
                {m.valor}
              </div>

              <div className="metrica-label">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
