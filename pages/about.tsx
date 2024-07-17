// pages/about.tsx
import Layout from '../app/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8 text-center sm:text-left md:text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-xl">Details about me...</p>
      </div>
    </Layout>
  );
};

export default About;
