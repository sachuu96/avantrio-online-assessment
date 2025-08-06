import { useState, useEffect } from "react";
import { getStory } from "./service";

export const useGetStory = () => {
  // const { error, setError } = useState(null);
  // const { isLoading, setIsLoading } = useState(false);
  // const { response, setResponse } = useState(null);

  useEffect(() => {
    try {
      const create = async () => {
        return await getStory();
      };
      // setIsLoading(true);
      const res = create();
      console.log(res);
      // setResponse(create());
      // setIsLoading(false);
    } catch (error) {
      // setError(error);
    }
  });
  // return { error, isLoading, response };
};
