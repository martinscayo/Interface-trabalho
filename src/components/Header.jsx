import { useState } from 'react'
import {
  Boxes,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'
import '../styles/Header.css'

const navLinks = [
  { label: 'Soluções', href: '#servicos' },
  { label: 'Resultados', href: '#metricas' },
  { label: 'Plataforma', href: '#solucoes' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header-control">
      <nav className="container-xl">
        <div className="header-inner">

          {/* Logo */}
          <a href="#" className="header-logo">
            <div className="logo-icon">
              <Boxes size={20} strokeWidth={2.2} />
            </div>

            <span className="logo-text">
              Nova<strong>Ops</strong>
            </span>
          </a>

          {/* Links desktop */}
          <ul className="header-nav d-none d-md-flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link-control"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Ações desktop */}
          <div className="header-actions d-none d-md-flex align-items-center gap-3">
            <a href="#" className="btn-control-outline btn">
              Entrar
            </a>

            <a href="#" className="btn-control btn">
              Começar
              <ChevronRight size={15} className="ms-1" />
            </a>
          </div>

          {/* Botão mobile */}
          <button
            className="header-toggle d-md-none"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            {menuAberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <div className="header-mobile-menu d-md-none">
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMenuAberto(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-actions">
              <a href="#" className="btn-control-outline btn w-100 mb-2">
                Entrar
              </a>

              <a href="#" className="btn-control btn w-100">
                Começar
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}