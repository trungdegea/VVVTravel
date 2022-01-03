import http from "../../utilities/http";

export const getPackageData = async (id) => {
  try {
    // console.log(id)
    const datapackage = await http.get(`/products/${id}`);
    return datapackage;
  } catch (error) {
    throw error;
  }
};
