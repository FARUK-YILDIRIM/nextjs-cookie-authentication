import Link from "next/link";

const Layout = ({ title, children }) => (
  <div className="root">
    <span>
      Welcome, <strong>Guest</strong>
    </span>
    <nav className="navbar">
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <button>Logout</button>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </nav>
    <h1>{title}</h1>
    {children}

    <style jsx>
      {`
        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .navbar {
          with: 100%;
          display: flex;
          justify-content: space-around;
        }
        a {
          margin-right: 0.5em;
        }
        button {
          text-decoration: 0;
          padding: 0;
          font: inherit;
          border-style: none;
          color: rgb(0, 0, 238);
        }
      `}
    </style>
  </div>
);

export default Layout;
