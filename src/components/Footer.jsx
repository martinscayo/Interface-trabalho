import {
  LayoutDashboard,
  Computer,
  BanknoteX,
  Bird,
  Mail,
} from 'lucide-react'

import '../styles/Footer.css'

const links = {
  Plataforma: ['Soluções', 'Resultados', 'Automação'],
  Recursos: ['Documentação', 'Integrações', 'Suporte'],
}

export default function Footer() {
  return (
    <footer className="footer-control" id="contato">
      <div className="container-xl">
        <div className="footer-top row gy-4">

          <div className="col-lg-4">
            <div className="footer-brand">
              <div className="logo-icon me-2">
                <LayoutDashboard size={18} strokeWidth={2.2} />
              </div>

              <span className="logo-text">
                Nova<strong>Ops</strong>
              </span>
            </div>

            <p className="footer-tagline">
              Plataforma inteligente para empresas que desejam automatizar
              processos, acompanhar métricas e crescer com eficiência.
            </p>

            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="Site">
                <Computer size={18} />
              </a>

              <a href="#" className="footer-social-btn" aria-label="Financeiro">
                <BanknoteX size={18} />
              </a>

              <a href="#" className="footer-social-btn" aria-label="Comunidade">
                <Bird size={18} />
              </a>

              <a href="#" className="footer-social-btn" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {Object.entries(links).map(([categoria, itens]) => (
            <div key={categoria} className="col-6 col-md-2">
              <h6 className="footer-nav-title">{categoria}</h6>

              <ul className="footer-nav-list">
                {itens.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-nav-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="section-divider my-4" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 NovaOps · Desenvolvido por Cayo Martins.
          </p>

          <p className="footer-authors">
            React + Vite + Bootstrap + Lucide Icons
          </p>
        </div>
      </div>
    </footer>
  )
}