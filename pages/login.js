import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import { authInitialProps } from "../lib/auth";

export default function Login(props) {
  return (
    <Layout title="login" {...props}>
      <LoginForm />
    </Layout>
  );
}

Login.getInitialProps = authInitialProps();
