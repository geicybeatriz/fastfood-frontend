import axios from "axios";

const URL_API : string = process.env.REACT_APP_API_LOCAL!;

const getProductBySearchBar = async (term:string) => {
  // console.log(URL_API);
  const promise = await axios.get(`${URL_API}/products/search?term=${term}`);
  return promise;
}

const productService = {
  getProductBySearchBar,
};

export default productService;