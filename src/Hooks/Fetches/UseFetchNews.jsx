import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchNews() {
  const baseUrl = "http://api.mediastack.com/v1";
  const API_KEY = import.meta.env.VITE_MEDIASTACK_NEWS_API_KEY;
  //   const API_KEY = import.meta.env.VITE_GOOGLE_NEWS_API_KEY;
  const fetchNews = () => {
    return axios.get(`${baseUrl}/news?access_key=${API_KEY}&countries=ng`);
  };
  return useQuery({
    queryKey: ["News"],
    queryFn: fetchNews,
    select: (data) => data.data.data,
  });
}
