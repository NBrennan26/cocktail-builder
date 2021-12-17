// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect } from "react";

// const UseFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const runFetch = async () => {
//       setIsLoading(true);
//       try {
//         const res = await fetch(url, { mode: "cors" });
//         const json = await res.json();
//         setData(json);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//       }
//     };
//     runFetch();
//   }, []);
//   console.log(error)
//   console.log(data)
//   return { data, error, isLoading };
// };

// export default UseFetch;

const getCocktails = async (url) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error)
  }
};

export default getCocktails

// getCocktails("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka")
//   .then((data) => console.log(data.drinks))
