import { Product } from "@/graphql/product/schema";
import Sorter from "../util/sorter";
import { Grid } from "@mui/joy";
import ProductCard from "./card";
import React, { useEffect } from "react";

export default function ProductList({ products, showSorter }: { products: Product[], showSorter: boolean }) {
  const [sortedProducts, setSortedProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  return (
    <>
      {showSorter &&
        <Sorter
          setSortedProducts={setSortedProducts}
          products={sortedProducts}
        />
      }
      <Grid container spacing={2} p={1} m={0}>
        {sortedProducts.map((product, index) => (
          <Grid xl={3} lg={4} md={6} sm={6} xs={12} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
