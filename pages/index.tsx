import Layout from '../components/layout';
import Card from '../components/Card';
import { withApollo } from '../lib/apollo';
import Cart from '../components/Cart';
import DeliveryDate from '../components/DeliveryDate';
import CartSumary from '../components/CartSumary';
import Search from '../components/Search';
import Container from '../components/Container';

const IndexPage = () => {
  return (
    <Container>
      <Layout.Row justify="space-around">
        <Layout.Col sm="24" md="24" lg="22" className="m-b-4">
          <Layout.Row justify="start">
            <Layout.Col lg="11">
              <Search className="w-100" />
            </Layout.Col>
          </Layout.Row>
        </Layout.Col>
        <Layout.Col sm="24" md="12" lg="10">
          <Card className="m-b-4">
            <Cart />
          </Card>
        </Layout.Col>
        <Layout.Col sm="24" md="11" lg="10">
          <DeliveryDate className="m-b-4" />
          <CartSumary />
        </Layout.Col>
      </Layout.Row>
    </Container>
  );
};

export default withApollo(IndexPage);
