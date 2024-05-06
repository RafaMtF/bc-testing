import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold text-center">Home</h1>
      <Link
        href="/fornecedores"
        className="bg-gray-400 text-white p-2 rounded-md"
      >
        Fornecedores
      </Link>
    </div>
  );
}
