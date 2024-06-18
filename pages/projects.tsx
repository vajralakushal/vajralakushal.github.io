// pages/projects.tsx
import Layout from '../app/layout';

const Projects: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8 text-center sm:text-left md:text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg md:text-xl">Here are my projects...</p>
      </div>
    </Layout>
  );
};

export default Projects;
