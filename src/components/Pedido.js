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
    )
}

export default Pedido