import Image from "next/image";
import BookSearch from "./containers/bookSearch";
import App from "next/app";
export default function Home() {
  return (
    <div className="App">
    <header className="bg-blue-500 text-white p-4 text-center">
      <h1 className="text-2xl">Book Search App</h1>
    </header>
    <main className="p-4">
      <BookSearch />
    </main>
  </div>
  );
}