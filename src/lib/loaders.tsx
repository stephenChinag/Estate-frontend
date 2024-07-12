import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ req, params }: any) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
