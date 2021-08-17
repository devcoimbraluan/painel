import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import Pedidos from './components/pedidos'
import { PEDIDOS_POR_PAG } from './utils/constant'
import '../src/style.css'

function App () {
    const [pedidos, setPedidos] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const fetchPedidos = async () => {
            const res = await axios.get('http://10.150.7.15:8000/json')
            setPedidos(res.data)
            setTotalPages(Math.ceil(res.data.length / PEDIDOS_POR_PAG))
        }
        fetchPedidos()
    }, [])

    const pag = num => {
        if (totalPages < page + 1) {
            setPage(1)
        }else{setPage(page + 1)}
    }
    setTimeout(pag, 10000)
    
    return (
        <div>
            {<>
                <div id="font">
                
                <div className="progress-bar-container">
            <div className="progress-bar">
                <span className="progress-bar-inner"></span>
            </div>
          </div>
                <table className="Table">
            <thead>
              <tr>
                <th bgcolor="black" id="pagatual"><span id="pagina">Página: {page} de {totalPages}</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Status</th>
                <th bgcolor="black">Pedido</th>
                <th bgcolor="black">Mapa</th>
                <th bgcolor="black">Gerado</th>
                <th bgcolor="black">Início</th>
                <th bgcolor="black">Previsão</th>
                <th bgcolor="black">Peso (kg)</th>
                <th bgcolor="black">Itens</th>
                <th bgcolor="black">Pallets</th>
                <th bgcolor="black">Operador</th>
              </tr>
            </thead>
          <Pedidos pedidos={pedidos} page={page}/>
          </table>
          </div>
            </>}
            
            <br />
        </div>
    )
}

export default App;