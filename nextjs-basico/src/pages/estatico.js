export default function Estatico({ number }) {
  return (
    <div>
      Número: {number}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      number: Math.round(Math.random() * 100),
    },
  }
}