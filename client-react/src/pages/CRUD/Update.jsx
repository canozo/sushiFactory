import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class Update extends Component {
  constructor(props) {
    super(props);

    this.updateSushiData = this.updateSushiData.bind(this);
    this.getSushiData = this.getSushiData.bind(this);
    this.changeSushiType = this.changeSushiType.bind(this);
    this.changeSushi = this.changeSushi.bind(this);
    this.actualizarSushi = this.actualizarSushi.bind(this);
    this.toggleDDType = this.toggleDDType.bind(this);
    this.toggleDD = this.toggleDD.bind(this);

    this.state = {
      ddOpenType: false,
      selectedSushiType: 'Seleccione un tipo de sushi',
      selectedType: -1,
      selectedSushi: 'Seleccione un registro de sushi',
      selectedId: -1,
      sushiTypes: [],
      sushis: [],
    };
  }

  componentDidMount() {
    this.updateSushiData();
    this.getSushiData();
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
      .then(res => this.setState({ sushis: res }));
  }

  getSushiData() {
    fetch('/api/sushi/types', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ sushiTypes: res }));
  }

  changeSushiType(sushi) {
    this.setState({
      selectedType: sushi.id,
      selectedSushiType: sushi.nombre,
    });
  }

  changeSushi(sushi) {
    this.setState({
      selectedId: sushi.id,
      selectedSushi: sushi.nombre,
    });
  }

  actualizarSushi(id, nuevoTipo) {
    fetch('/api/sushi/', {
      method: 'put',
      body: JSON.stringify({ id, nuevoTipo }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(() => {
        this.updateSushiData();
        this.setState({
          selectedSushiType: 'Seleccione un tipo de sushi',
          selectedType: -1,
          selectedSushi: 'Seleccione un registro de sushi',
          selectedId: -1,
        });
      });
  }

  toggleDDType() {
    const { ddOpenType } = this.state;
    this.setState({ ddOpenType: !ddOpenType });
  }

  toggleDD() {
    const { ddOpen } = this.state;
    this.setState({ ddOpen: !ddOpen });
  }

  render() {
    const {
      selectedSushiType,
      selectedType,
      sushiTypes,
      ddOpenType,
      ddOpen,
      sushis,
      selectedSushi,
      selectedId,
    } = this.state;

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
        <Dropdown isOpen={ddOpenType} toggle={this.toggleDDType}>
          <DropdownToggle className="btn-block" caret>
            {selectedSushiType}
          </DropdownToggle>
          <DropdownMenu className="btn-block">
            {sushiTypes.map(sushi => (
              <DropdownItem
                key={sushi.id}
                onClick={() => this.changeSushiType(sushi)}
              >
                {sushi.nombre}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <br />
        <Button
          block
          color="primary"
          onClick={() => this.actualizarSushi(selectedId, selectedType)}
        >
          Actualizar
        </Button>
      </React.Fragment>
    );
  }
}

export default Update;
