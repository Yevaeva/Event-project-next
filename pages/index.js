import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';

export default function HomePage(props) {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  console.log('retessh')
  const filePath = path.join(process.cwd(), 'data','dummy-backend.json')
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData)

  if (!data) {
    return {
      redirect: {
        destination:'/no-data'
      }
    }
  }
  if (!data.products.length) {
    return {notFound:true}
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
