import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="/">
            <a>Demo Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <a href="https://twitter.com/gentrymediapro" rel="me">Twitter</a>    
          <a href="https://twitter.com/sukumu4" rel="me"> Twitter sukumu </a>
          <a href="https://www.linkedin.com/in/simba-gentry-99267b71/" rel="me"> LinkedIn </a>
          <a href="https://medium.com/@sukumu73" rel="me"> Medium </a>
          <a href="https://github.com/sukumu" rel="me">GitHub</a>
	        <a href="https://webmentions-next.netlify.app" rel="me">Netlify App</a>           
        </nav>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
        }
        nav a {
          margin-right: 20px;
          color: #00a395;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
