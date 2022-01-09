import http from "../../utilities/http";

export const getPackageData = async (id) => {
  try {
    const datapackage = await http.get(`/products/${id}`);
    return datapackage;
  } catch (error) {
    throw error;
  }
};
