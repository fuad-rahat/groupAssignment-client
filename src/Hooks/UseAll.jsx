import { useQuery } from "@tanstack/react-query";

const UseAll = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['assignmentttt'],
    queryFn: async () => {
      const result = await fetch("https://group-assignment-server.vercel.app/all");
      return await result.json();
    },
    staleTime: 0, // Data is immediately considered stale
  });

  return { data, isLoading, isFetching, refetch };
};

export default UseAll;
