export default function exercicio01() {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      {list.map((item, index) => <span style={{
        display: 'block'
      }} key={index}>{item}</span>)}
    </div>
  );
}