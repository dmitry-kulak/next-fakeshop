import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-gray-700 py-4">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div>Бункер лого</div>
          </Link>

          <ul className="hidden space-x-6 md:flex">
            <Link href="/" className="hover:text-amber-400">
              Главная
            </Link>
            <Link href="/rules" className="hover:text-amber-400">
              Правила
            </Link>
          </ul>

          <button className="hidden rounded-full bg-amber-600 p-3 px-6 pt-2 text-white md:block">
            Новая игра
          </button>
        </div>
      </nav>
    </header>
  );
};
