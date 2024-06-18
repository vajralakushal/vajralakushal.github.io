// pages/written-pieces.tsx
import Layout from '../app/layout';

const WrittenPieces: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8 text-center sm:text-left md:text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Written Pieces</h1>
        <p className="text-lg md:text-xl">Here are my writings...</p>
      </div>
    </Layout>
  );
};

export default WrittenPieces;
