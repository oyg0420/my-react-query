import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

type Fruit = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const getFruits = async () => {
  const result = await axios.get<Fruit[]>('http://localhost:4000/fruits');
  return result.data;
};

function FruitList() {
  const { data, isLoading, isFetching, isError, error } = useQuery<Fruit[], Error>('fruits', getFruits, {
    onError: error => {
      alert(error?.message);
    },
  });

  /**
   * useEffect + isError 조합으로 error side effect 생성
   */
  // useEffect(() => {
  //   if (isError) {
  //     alert(error?.message);
  //   }
  // }, [isError, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map(fruit => {
        return <div key={fruit.id}>{fruit.image}</div>;
      })}
    </div>
  );
}

export default FruitList;
