import '../styles/CardServico.css'

/**
 * Card de serviço
 * Props:
 * icone - ícone do card
 * titulo - título do serviço
 * descricao - texto descritivo
 * cor - cor de destaque
 * tag - categoria do serviço
 */

export default function CardServico({ icone, titulo, descricao, cor, tag }) {
  return (
    <div className="card-servico">
      <div className="card-servico-inner">
        {/* Ícone */}
        <div className="card-servico-icon" style={{ '--card-color': cor }}>
          {icone}
        </div>

        {/* Tag */}
        {tag && (
          <span className="card-servico-tag" style={{ '--card-color': cor }}>
            {tag}
          </span>
        )}

        {/* Texto */}
        <h3 className="card-servico-titulo">{titulo}</h3>
        <p className="card-servico-descricao">{descricao}</p>

        {/* CTA */}
        <a href="#" className="card-servico-link" style={{ '--card-color': cor }}>
          Saiba mais →
        </a>
      </div>
    </div>
  )
}
