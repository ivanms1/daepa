import { signOut } from 'next-auth/react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => signOut()}>logout</button>
    </div>
  );
}

export default Home;

Home.auth = true;
