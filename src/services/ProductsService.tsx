import axios from "axios";

const URL_API : string = 'http://localhost:5000';

const getProductBySearchBar = async (term: string) => {
  console.log(term);
  // console.log(URL_API); localhost:5000/products/search?term=bacon
  const promise = await axios.get(`http://localhost:5000/products/search?term=${term}`);
  return promise;
}

const getProductById = async (id: number) => {
  const promise = await axios.get(`${URL_API}/products/product/${id}`);
  return promise;
}

const productService = {
  getProductBySearchBar,
  getProductById,
};

export default productService;