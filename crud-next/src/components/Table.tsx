export function Table() {
  return (
    <table className="table-fixed w-full">
      <TableHeader />

      <tbody>
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
        <CustomerItem />
      </tbody>
    </table>
  );
}

function TableHeader() {
  return (
    <thead className="bg-gray-800">
      <tr className="table-row">
        <th className="text-left p-4">ID</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Data de nascimento</th>
        <th className="text-left p-4">Ações</th>
      </tr>
    </thead>
  );
}

function CustomerItem() {
  return (
    <tr>
      <td className="p-4">1</td>
      <td className="p-4">Luiz Oliveira</td>
      <td className="p-4">28/08/2000</td>
      <td className="p-4">28/08/2000</td>
    </tr>
  );
}