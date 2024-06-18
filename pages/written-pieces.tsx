// pages/written-pieces.tsx
import Layout from '../app/layout';

const WrittenPieces: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Written Pieces</h1>
        <p className="text-lg">Here are my writings...</p>
      </div>
    </Layout>
  );
};

export default WrittenPieces;
