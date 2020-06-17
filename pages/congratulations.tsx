import { useEffect, useState } from 'react';
import Router from 'next/router';
import { withApollo } from '../lib/apollo';
import Container from '../components/Container';
import NavLink from '../components/NavLink';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Img from '../components/Img';
import Congratulations from '../components/Congratulations';

const CongratulationsPage = () => {
  const [id, setId] = useState<string>('1');

  useEffect(() => {
    const { query } = Router;
    if (query.id) {
      setId(query.id as string);
      Router.push('/congratulations');
    } else {
      Router.push('/');
    }
  }, []);

  return (
    <Container>
      <Congratulations>
        <Title className="text-center">Thank you</Title>
        <SubTitle className="text-center">
          Your order P{id.padStart(4, '000')} has been registered
        </SubTitle>
        <div className="text-center">
          <NavLink href="/" name="Continue shopping" />
        </div>
        <Img src="/success.png" alt="order" />
      </Congratulations>
    </Container>
  );
};

export default withApollo(CongratulationsPage);
