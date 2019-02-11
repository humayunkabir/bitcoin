import Layout from './components/Layout';

const About = () => (
  <Layout>
    <div className="card mt-4">
      <div className="card-header">
        <h4 className="mb-0">Why Next.js?</h4>
      </div>
      <div className="card-body bg-light">
        <p className="lead mb-0">Next.js is a lightweight framework for static and server-rendered applications.</p>
      </div>
    </div>
  </Layout>
);

export default About;