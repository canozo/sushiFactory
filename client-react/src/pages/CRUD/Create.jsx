import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class Create extends Component {
  constructor(props) {
    super(props);

    this.getSushiData = this.getSushiData.bind(this);
    this.changeSushi = this.changeSushi.bind(this);
    this.agregarSushi = this.agregarSushi.bind(this);
    this.toggleDD = this.toggleDD.bind(this);

    this.state = {
      ddOpen: false,
      selectedSushi: 'Seleccione un tipo de sushi',
      selectedId: -1,
      sushis: [],
    };
  }

  componentDidMount() {
    this.getSushiData();
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
      .then(res => this.setState({ sushis: res }));
  }

  changeSushi(sushi) {
    this.setState({
      selectedId: sushi.id,
      selectedSushi: sushi.nombre,
    });
  }

  agregarSushi(id) {
    fetch('/api/sushi/', {
      method: 'post',
      body: JSON.stringify({ tipo: id }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => console.log(res));
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
                {sushi.nombre}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <br />
        <Button
          block
          color="primary"
          onClick={() => this.agregarSushi(selectedId)}
        >
          Crear
        </Button>
      </React.Fragment>
    );
  }
}

export default Create;
