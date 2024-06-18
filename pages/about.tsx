// pages/about.tsx
import Layout from '../app/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg">Details about me...</p>
      </div>
    </Layout>
  );
};

export default About;
