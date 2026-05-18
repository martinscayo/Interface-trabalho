import { CheckCircle2, ArrowRight } from 'lucide-react'
import '../styles/SecaoDestaque.css'

const diferenciais = [
  'Implementação rápida sem interromper sua operação',
  'Segurança avançada com dados protegidos e monitoramento contínuo',
  'Integrações inteligentes com diversas ferramentas do mercado',
  'Automação de tarefas sem necessidade de conhecimento técnico',
]

export default function SecaoDestaque() {
  return (
    <section
      className="destaque-section"
      id="solucoes"
    >
      <div className="container-xl">
        <div className="row align-items-center gy-5">

          {/* Card visual */}
          <div className="col-lg-5 animate-fade-up animate-delay-1">
            <div className="destaque-visual">
              <div className="destaque-card">

                <div className="destaque-card-top">
                  <span className="destaque-badge">
                    ● Sistema ativo
                  </span>

                  <span className="destaque-time">
                    Em tempo real
                  </span>
                </div>

                <h4 className="destaque-card-title">
                  Painel Inteligente
                </h4>

                <p className="destaque-card-desc">
                  Gerencie indicadores, equipes e processos
                  de forma centralizada e simplificada em
                  uma única plataforma.
                </p>

                <div className="destaque-progress-list">
                  {[
                    'Processos',
                    'Financeiro',
                    'Performance',
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="destaque-progress-item"
                    >
                      <span>{item}</span>

                      <div className="destaque-progress-bar">
                        <div
                          className="destaque-progress-fill"
                          style={{
                            width: `${[91, 84, 97][i]}%`,
                          }}
                        />
                      </div>

                      <span className="destaque-progress-pct">
                        {[91, 84, 97][i]}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="destaque-badge-float">
                <CheckCircle2
                  size={14}
                  className="me-1"
                  style={{
                    color: 'var(--color-success)',
                  }}
                />
                Plataforma aprovada por empresas
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="col-lg-6 offset-lg-1 animate-fade-up animate-delay-2">
            <span className="badge-control mb-3 d-inline-block">
              Por que escolher
            </span>

            <h2 className="destaque-title">
              A plataforma inteligente para modernizar
              a gestão da sua empresa
            </h2>

            <p className="destaque-subtitle">
              A NovaOps ajuda empresas a centralizarem
              processos, automatizarem tarefas e tomarem
              decisões estratégicas baseadas em dados.
            </p>

            <ul className="destaque-list">
              {diferenciais.map((item) => (
                <li
                  key={item}
                  className="destaque-list-item"
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={2.2}
                    className="destaque-check"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="btn-control btn mt-2"
            >
              Conhecer plataforma
              <ArrowRight
                size={16}
                className="ms-2"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}