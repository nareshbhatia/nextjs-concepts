import Link from 'next/link';

function SSG({ repos }) {
  return (
    <div className="container">
      <h1>Facebook Repos (SSG)</h1>
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

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/orgs/facebook/repos');
  const repos = await res.json();

  return {
    props: {
      repos,
    },
  };
}

export default SSG;
