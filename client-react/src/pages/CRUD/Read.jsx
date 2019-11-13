import React, { Component } from 'react';
import ReactTable from 'react-table';

class Read extends Component {
  constructor(props) {
    super(props);

    this.columnas = [{
      Header: '#',
      accessor: 'id',
    }, {
      Header: 'Nombre',
      accessor: 'nombre',
    }, {
      Header: 'Salmon',
      accessor: 'salmon',
      Cell: bool => bool.value === 1 ? 'Si' : '',
    }, {
      Header: 'Pepino',
      accessor: 'pepino',
      Cell: bool => bool.value === 1 ? 'Si' : '',
    }, {
      Header: 'Aguacate',
      accessor: 'aguacate',
      Cell: bool => bool.value === 1 ? 'Si' : '',
    }, {
      Header: 'Queso',
      accessor: 'queso',
      Cell: bool => bool.value === 1 ? 'Si' : '',
    }];

    this.getSushiData = this.getSushiData.bind(this);

    this.state = {
      sushis: [],
    };
  }

  componentDidMount() {
    this.getSushiData();
  }

  getSushiData() {
    fetch('/api/sushi', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ sushis: res }));
  }

  render() {
    const { sushis } = this.state;
    console.log(sushis);

    return (
      <ReactTable
        data={sushis}
        columns={this.columnas}
        filterable
      />
    );
  }
}

export default Read;
