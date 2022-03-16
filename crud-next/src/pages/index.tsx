import { Layout } from "../components/Layout";
import { Table } from "../components/Table";

export default function Home() {
  return (
    <Layout title="Início">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-bold">Usuários</h1>
          <p className="text-gray-400 py-2">Uma lista de todos os usuários que você cadastrou, incluindo o ID, nome e data de nascimento</p>
        </div>

        <button className="bg-sky-600 p-3 rounded transition-colors hover:bg-sky-500">Criar usuário</button>
      </div>

      <Table />
    </Layout>
  );
}