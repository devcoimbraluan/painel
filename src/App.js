import React, { PureComponent } from 'react';
import './style.css'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

class App extends PureComponent {

  constructor(props) {
    super(props)
    
    this.state = {
      offset: 0,
      pedidos: [],
      orgtableData: [],
      perPage: 18,
      currentPage: 0
    }

    this.handlePageClick = this.handlePageClick.bind(this)
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected
    const offset = selectedPage * this.state.perPage
    
    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.loadMoreData()
    })
  }
    loadMoreData() {
      const data = this.state.orgtableData

      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        pedidos:slice
      })
    }
    componentDidMount() {
    this.getData()
  }
  getData() {
    axios 
        .get('http://localhost:8000/json')
        .then(res => {
          var tdata = res.data
          console.log('data-->' +JSON.stringify(tdata))
          var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
          this.setState({ 
            pageCount: Math.ceil(tdata.length / this.state.perPage),
            orgtableData : tdata,
            pedidos:slice
           });
        })
  }
  render() {
    const contar_linhas = ('#table tr').length;
    return (
      <div id="container">
        <body>
        <table className="Table">
            <thead>
              <tr>
                <th bgcolor="black">Status</th>
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
          <tbody>
    
          {
              this.state.pedidos.map((tdata, i) => (
                  <tr div id="status">
                    <td><div id={tdata.pedido.status}>{tdata.pedido.status}</div></td>
                    <td>{tdata.pedido.pedido}</td>
                    <td>{tdata.pedido.mapa}</td>
                    <td>{tdata.pedido.gerado}</td>
                    <td>{tdata.pedido.inicio}</td>
                    <td>{tdata.pedido.previsao}</td>
                    <td>{tdata.pedido.peso}</td>
                    <td>{tdata.pedido.itens}</td>
                    <td>{tdata.pedido.pallets}</td>
                    <td>{tdata.pedido.operador}</td>
                  </tr>                   
                 ))
                        }
            </tbody>
          </table>
          <span id="pagatual">{this.state.currentPage + 1}</span>
         </body>
         <footer>
         <div className="progress-bar-container">
              <div className="progress-bar stripes animated reverse slower">
                <span className="progress-bar-inner"></span>
                <span id="total">Total de Mapas: {contar_linhas}</span>
              </div>
            </div>
            </footer>
      </div>
      
    )
  };
};

export default App;
