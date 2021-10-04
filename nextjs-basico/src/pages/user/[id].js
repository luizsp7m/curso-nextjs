import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>{user.name}</title>
      </Head>

      <Link href={`/`} passHref>
        <button>Voltar</button>
      </Link>

      <h1>ID: {query.id}</h1>

      <div>
        name: {user.name} / username: {user.username}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await response.json();

  return {
    props: {
      user: data,
    }, 
  }
}