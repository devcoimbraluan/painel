import React from 'react'
import Pedido from './Pedido'
import {PEDIDOS_POR_PAG} from '../utils/constant'

const Pedidos = ({pedidos, page}) => {
    const startIndex = (page - 1) * PEDIDOS_POR_PAG
    const selectedPedidos = pedidos.slice(startIndex, startIndex + PEDIDOS_POR_PAG)
    return selectedPedidos.map(pedido => (
        <Pedido pedido={pedido}/>
    ))
}

export default Pedidos