import Link from 'next/link';
import { useRepos } from '../hooks/useRepos';

function CSR() {
  const { isLoading, isError, error, repos } = useRepos();

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (isError) {
    return <div className="container">{error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Facebook Repos (CSR)</h1>
      <ol>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ol>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default CSR;
