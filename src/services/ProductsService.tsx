import axios from "axios";

const URL_API : string = process.env.REACT_APP_API!;

const getProductBySearchBar = async (term: string) => {
  console.log(URL_API);
  const promise = await axios.get(`${URL_API}/products/search?term=${term}`);
  return promise;
}

const getProductById = async (id: number) => {
  const promise = await axios.get(`${URL_API}/products/product/${id}`);
  return promise;
}

const getAllProducts = async () => {
  const promise = await axios.get(`${URL_API}/products`);
  return promise;
}

const productService = {
  getProductBySearchBar,
  getProductById,
  getAllProducts,
};

export default productService;