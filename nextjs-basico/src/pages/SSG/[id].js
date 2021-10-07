export function getStaticPaths() {
  return {
    fallback: false, // false = 404
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
  }
}

export async function getStaticProps({ params }) {

  const result = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await result.json();

  return {
    props: {
      user: data,
    }
  }
}

export default function User({ user }) {
  return (
    <div>
      <h1>Usuário</h1>

      <h2>{user.name}</h2>
    </div>
  )
}