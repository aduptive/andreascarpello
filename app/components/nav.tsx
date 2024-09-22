import Link from "next/link";

const navItems = {
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <header className="sticky top-0">
      <div className="container mx-auto flex items-center">
        <div className="flex flex-row justify-between items-center py-4">
          <div className="flex flex-row items-center">
            <Link href="/">Andrea Scarpello</Link>
          </div>
        </div>

        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
