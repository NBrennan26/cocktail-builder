const getCocktails = async (url) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error)
  }
};

export default getCocktails
