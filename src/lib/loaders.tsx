import { defer, LoaderFunctionArgs } from 'react-router-dom';
import apiRequest from './apiRequest';

export const singlePageLoader = async ({ request, params }: any) => {
  const res = await apiRequest('/posts/' + params.id);
  return res.data;
};
export const listPageLoader = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<any> => {
  const query = request.url.split('?')[1];
  const res = await apiRequest('/posts?' + query);

  return res.data;
};
