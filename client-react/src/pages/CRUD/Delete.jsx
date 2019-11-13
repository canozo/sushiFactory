import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class Delete extends Component {
  constructor(props) {
    super(props);

    this.updateSushiData = this.updateSushiData.bind(this);
    this.changeSushi = this.changeSushi.bind(this);
    this.eliminarSushi = this.eliminarSushi.bind(this);
    this.toggleDD = this.toggleDD.bind(this);

    this.state = {
      ddOpen: false,
      selectedSushi: 'Seleccione un registro de sushi',
      selectedId: -1,
      sushis: [],
    };
  }

  componentDidMount() {
    this.updateSushiData();
  }

  updateSushiData() {
    fetch('/api/sushi/', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => this.setState({
        sushis: res,
        selectedSushi: 'Seleccione un registro de sushi',
        selectedId: -1
      }));
  }

  changeSushi(sushi) {
    this.setState({
      selectedId: sushi.id,
      selectedSushi: sushi.nombre,
    });
  }

  eliminarSushi(id) {
    fetch('/api/sushi/', {
      method: 'delete',
      body: JSON.stringify({ id }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .then(() => this.updateSushiData());
  }

  toggleDD() {
    const { ddOpen } = this.state;
    this.setState({ ddOpen: !ddOpen });
  }

  render() {
    const { selectedSushi, selectedId, sushis, ddOpen } = this.state;

    return (
      <React.Fragment>
        <Dropdown isOpen={ddOpen} toggle={this.toggleDD}>
          <DropdownToggle className="btn-block" caret>
            {selectedSushi}
          </DropdownToggle>
          <DropdownMenu className="btn-block">
            {sushis.map(sushi => (
              <DropdownItem
                key={sushi.id}
                onClick={() => this.changeSushi(sushi)}
              >
                Sushi #{sushi.id}, Rollo {sushi.nombre}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <br />
        <Button
          block
          color="danger"
          onClick={() => this.eliminarSushi(selectedId)}
        >
          Eliminar
        </Button>
      </React.Fragment>
    );
  }
}

export default Delete;
