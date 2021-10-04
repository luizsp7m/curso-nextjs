import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home({ users }) {
  const [name, setName] = useState('');

  async function createUser() {
    const result = await fetch(`/api/form`, {
      method: 'POST',
      body: JSON.stringify({
        name: name
      })
    });

    const data = await result.json();

    console.log(data);
  }

  return (
    <div className={styles.container}>
      {users.map((user, index) => (
        <Link key={index} href={`/user/${user.id}`} passHref>
          <span style={{
            cursor: 'pointer',
          }}>{user.id}</span>
        </Link>
      ))}

      <div className={styles.form}>
        <label>Nome: </label>
        <input type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Digite o nome" />
        <button onClick={createUser}>Enviar</button>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  }
}