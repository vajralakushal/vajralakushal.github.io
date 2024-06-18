// pages/index.tsx
import Layout from '../app/layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 text-center sm:text-left md:text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Personal Website</h1>
        <p className="text-lg md:text-xl">This is where I share my projects and writings.</p>
      </div>
    </Layout>
  );
};

export default Home;
