import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { MenuProvider } from '../context/Menu';
import { Create, Read, Update, Delete } from './CRUD';
import Toolbar from '../components/Toolbar';
import NotFound from './NotFound';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.items = [];
  }

  componentDidMount() {
    this.setState({
      items: [{
        title: 'Create',
        path: '/react/create',
      }, {
        title: 'Read',
        path: '/react/read',
      }, {
        title: 'Update',
        path: '/react/update',
      }, {
        title: 'Delete',
        path: '/react/delete',
      }],
    });
  }

  render() {
    const { items } = this.state;
    return (
      <MenuProvider>
        <Toolbar
          items={items}
        />
        <br />
        <Container>
          <Row>
            <Col>
              <h1>Sushi Factory!</h1>
              <Switch>
                <Route exact path="/react/" component={() => <h1>Holis!</h1>} />
                <Route path="/react/create" component={Create} />
                <Route path="/react/read" component={Read} />
                <Route path="/react/update" component={Update} />
                <Route path="/react/delete" component={Delete} />
                <Route render={() => <NotFound />} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <br />
      </MenuProvider>
    );
  }
}

export default Index;
