import { Button } from 'ui';
import { signIn } from 'next-auth/react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  );
}

export default Login;
