import Link from "next/link";
import React from "react";

const Layout = ({ title, children, auth }) => {
  const { user = {} } = auth || {};
  return (
    <div className="root">
      <span>
        Welcome, <strong>{user.name || "Guest"}</strong>
      </span>
      <nav className="navbar">
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          {user.email ? (
            //Auth Navigation
            <React.Fragment>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
              <button>Logout</button>
            </React.Fragment>
          ) : (
            // UnAuth Navigation
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
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
};

export default Layout;
