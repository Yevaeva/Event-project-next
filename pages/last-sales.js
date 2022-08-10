import React, { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  // const [loading, setLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-64b2d-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     "https://nextjs-course-64b2d-default-rtdb.firebaseio.com/sales.json").then(
  //       (response) => response.json()
  //     )
  //   .then((data) => {
  //     const tranformedSales = [];
  //     for (const key in data) {
  //       tranformedSales.push(
  //         { id: key, username: data[key].username, volume: data[key] }.volume
  //       );
  //     }
  //     setSales(tranformedSales);

  //     setLoading(false);
  //   });
  // }, []);
  useEffect(() => {
    if (data) {
      const tranformedSales = [];
      for (const key in data) {
        tranformedSales.push(
          { id: key, username: data[key].username, volume: data[key] }.volume
        );
        setSales(tranformedSales);
      }
    }
  }, [data]);
  if (error) {
    return <p>Failed</p>;
  }
  if (!data && !sales) {
    return <p>...loading</p>;
  }
  // if (!sales) {
  //   return <p>No data</p>;
  // }
  return (
    <div>
      <ul>
        {sales.map((sale) => (
          <li key={sales.id}>
            {sale.username} {sale.volume}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-course-64b2d-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  const tranformedSales = [];
  for (const key in data) {
    tranformedSales.push(
      { id: key, username: data[key].username, volume: data[key] }.volume
    );
  }
  return { props: { sales: tranformedSales }, revalidate: 10 };
}

export default LastSalesPage;
