import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchHeadlines() {
  const API_KEY = import.meta.env.VITE_GOOGLE_NEWS_API_KEY;
  const fetchNewsHeadlines = () => {
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}`
    );
  };
  return useQuery({
    queryKey: ["News"],
    queryFn: fetchNewsHeadlines,
    select: (data) => data.data.articles,
  });
}
