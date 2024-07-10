import axios from "axios";
const baseUrl = import.meta.env.VITE_DEV_URL;
import { useQuery } from "@tanstack/react-query";

export default function UseFetchUserNews() {
  const fetchUserNews = () => {
    return axios.get(`${baseUrl}/posts`);
  };
  return useQuery({
    queryKey: ["UserNews"],
    queryFn: fetchUserNews,
    select: (res) => res.data,
  });
}
