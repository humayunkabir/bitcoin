import Layout from './components/Layout';
import Prices from './components/Prices';
import fetch from 'isomorphic-unfetch';

const Index = ({ data }) => (
  <Layout>
    <div className="row">
      <div className="col">
        <Prices data={data} />
      </div>
      <div className="col">
        <Prices data={data} />
      </div>
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  let data = {};
  try {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    data = await res.json();
  } catch (error) {
    data = error;
  }

  return { data };
}


export default Index;