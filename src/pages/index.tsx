import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Next.js Concepts</h1>

      <h2>Pre-rendering</h2>
      <p>
        By default, Next.js pre-renders every page. This means that Next.js
        generates HTML for each page in advance, instead of having it all done
        by client-side JavaScript. Pre-rendering can result in better
        performance and SEO.
      </p>
      <p>
        Each generated HTML is associated with minimal JavaScript code necessary
        for that page. When a page is loaded by the browser, its JavaScript code
        runs and makes the page fully interactive. (This process is called
        hydration.)
      </p>

      <h2>Pre-rendering Techniques</h2>

      <h3>Static Rendering</h3>
      <ul>
        <li>A page without data, like this one</li>
        <li>Generates full HTML at build time</li>
      </ul>

      <h3>SSG (Static Site Generation)</h3>
      <ul>
        <li>A page with data</li>
        <li>Generates full HTML + JSON at build time</li>
        <li>
          Uses <em>getStaticProps</em> to fetch data at build time
        </li>
        <li>
          <Link href="/ssg">
            <a>Example</a>
          </Link>
        </li>
      </ul>

      <h3>SSR (Server-side Rendering)</h3>
      <ul>
        <li>A page with data</li>
        <li>Generates full HTML at runtime for each request</li>
        <li>
          Uses <em>getServerSideProps</em> to fetch data at runtime
        </li>
        <li>
          <Link href="/ssr">
            <a>Example</a>
          </Link>
        </li>
      </ul>

      <h3>CSR (Client-side Rendering)</h3>
      <ul>
        <li>A page with data</li>
        <li>Can be mixed with Static Rendering, SSG or SSR</li>
        <li>Generates partial HTML at build time for static and SSG pages</li>
        <li>Fills “holes” using JavaScript on the client</li>
        <li>
          <Link href="/csr">
            <a>Example</a>
          </Link>
        </li>
      </ul>

      <p>
        <small>
          Tip: Test different rendering techniques by slowing down your network in
          Chrome DevTools, and observe FCP (First Contentful Paint) & TTI (Time
          To Interactive)
        </small>
      </p>
    </div>
  );
}
