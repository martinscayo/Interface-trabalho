import {
  ArrowRight,
  PlayCircle,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background decorativo */}
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="container-xl">
        <div className="row align-items-center gy-5">

          {/* Conteúdo esquerdo */}
          <div className="col-lg-6">
            <div className="animate-fade-up">
              <span className="badge-control mb-4 d-inline-block">
                Plataforma inteligente para negócios
              </span>
            </div>

            <h1 className="hero-title animate-fade-up animate-delay-1">
              Transforme dados em{' '}
              <span className="hero-title-accent">
                decisões inteligentes
              </span>
            </h1>

            <p className="hero-subtitle animate-fade-up animate-delay-2">
              Automatize tarefas, acompanhe indicadores
              e tenha uma visão completa da sua operação
              em um único sistema.
            </p>

            <div className="hero-actions animate-fade-up animate-delay-3">
              <a href="#servicos" className="btn-control btn">
                Explorar soluções
                <ArrowRight
                  size={16}
                  className="ms-2"
                />
              </a>

              <a
                href="#"
                className="btn-control-outline btn d-inline-flex align-items-center gap-2"
              >
                <PlayCircle size={17} />
                Ver demonstração
              </a>
            </div>

            {/* Mini cards */}
            <div className="hero-mini-cards animate-fade-up animate-delay-4">

              <div className="hero-mini-card">
                <TrendingUp size={18} />

                <div>
                  <strong>+240%</strong>
                  <span>crescimento</span>
                </div>
              </div>

              <div className="hero-mini-card">
                <Users size={18} />

                <div>
                  <strong>5 mil+</strong>
                  <span>empresas</span>
                </div>
              </div>

              <div className="hero-mini-card">
                <Zap size={18} />

                <div>
                  <strong>99.9%</strong>
                  <span>uptime</span>
                </div>
              </div>

            </div>
          </div>

          {/* Dashboard à direita */}
          <div className="col-lg-6 animate-fade-up animate-delay-3">
            <div className="hero-dashboard-preview">

              <div className="preview-sidebar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="preview-content">

                <div className="preview-header">
                  <div>
                    <span className="preview-small">
                      NovaOps Analytics
                    </span>

                    <h4>
                      Resumo operacional
                    </h4>
                  </div>

                  <span className="preview-status">
                    ● Online
                  </span>
                </div>

                <div className="preview-cards">

                  <div className="preview-card">
                    <span>Receita</span>
                    <strong>R$ 380 mil</strong>
                  </div>

                  <div className="preview-card">
                    <span>Eficiência</span>
                    <strong>+24%</strong>
                  </div>

                </div>

                <div className="preview-chart">
                  {[65, 90, 55, 78, 95, 70, 88].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                <div className="preview-list">

                  <div>
                    <span>
                      Automação financeira
                    </span>

                    <strong>92%</strong>
                  </div>

                  <div>
                    <span>
                      Processos concluídos
                    </span>

                    <strong>87%</strong>
                  </div>

                  <div>
                    <span>
                      Performance da equipe
                    </span>

                    <strong>96%</strong>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}