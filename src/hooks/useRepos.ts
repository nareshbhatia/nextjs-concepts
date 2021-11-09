import { useEffect, useState } from 'react';

/**
 * Hook to fetch repos
 */
export const useRepos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [repos, setRepos] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://api.github.com/orgs/facebook/repos'
        );

        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }

        const repos = await response.json();
        setRepos(repos);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);
  return { isLoading, isError, error, repos };
};
