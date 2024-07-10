import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchNews(id) {
  const baseUrl = import.meta.env.VITE_DEV_URL;
  const fetchNews = (id) => {
    return axios.get(`${baseUrl}/posts/${id}`);
  };
  return useQuery({
    queryKey: ["News", id],
    queryFn: () => fetchNews(id),
    select: (data) => data.data,
  });
}
