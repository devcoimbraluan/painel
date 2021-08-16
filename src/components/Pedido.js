import React from 'react'
import '../../src/style.css'

const Pedido = ({ pedido }) => {
    return (
              <tr>
                    <td><div id={pedido.pedido.status}>{pedido.pedido.status}</div></td>
                    <td>{pedido.pedido.pedido}</td>
                    <td>{pedido.pedido.mapa}</td>
                    <td>{pedido.pedido.gerado}</td>
                    <td>{pedido.pedido.inicio}</td>
                    <td>{pedido.pedido.previsao}</td>
                    <td>{pedido.pedido.peso}</td>
                    <td>{pedido.pedido.itens}</td>
                    <td>{pedido.pedido.pallets}</td>
                    <td>{pedido.pedido.operador}</td>
                  </tr>
                /*<div className="card" id={pedido.pedido.status}>
                  <img src="http://0.gravatar.com/avatar/065ac046a5d478daeea6fdd9a054001d?s=96&d=mm&r=g" alt="Oerador"/>
                    <span id="op">{pedido.pedido.operador}</span>
                      <div className="ctnr">
                        <div className={pedido.pedido.status}>
                          <h4>{pedido.pedido.status}</h4>
                          <h4>Pedido: {pedido.pedido.pedido}</h4>
                          <h4>Mapa: {pedido.pedido.mapa}</h4>
                          <h4>Gerado: {pedido.pedido.gerado}</h4>
                          <h4>Itens: {pedido.pedido.itens}</h4>
                          <h4>Peso: {pedido.pedido.peso} (kg)</h4>
                          <h4>Pallets: {pedido.pedido.pallets}</h4>
                        </div>
                      </div>
                 </div>*/
    )
}

export default Pedido