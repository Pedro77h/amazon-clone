import Link from "next/link";
import { IProduct } from "../@types/IProduct";
import { Product } from "../components/Product";
import useProducts from "../hooks/useProducts";
import * as S from "../styles/homeStyles";

export default function Home() {
  const { data, error, loading } = useProducts();

  if (loading) return <p>Loading</p>;

  if (error) return <p>error</p>;

  return (
    <S.HomeContainer>
      <S.BackgroundImg
        src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background"
      />
      <S.ProductRows>
        {!!data &&
          data.products.map((product: IProduct) => (
            <Link href={`/products/${product.id}`}>
              <Product
                id={product.id}
                image={product.images[0].url}
                price={product.price}
                rating={4}
                title={product.name}
              />
            </Link>
          ))}
      </S.ProductRows>
    </S.HomeContainer>
  );
}
0