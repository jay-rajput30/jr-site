export default function Navbar() {
  return (
    <nav className="flex flex-row gap-8 p-2 justify-between items-center border-2 border-solid border-borderStroke rounded-md shadow-md shadow-borderStroke lg:text-xl w-full lg:w-10/12 mx-auto">
      <h2 className="font-bold text-secondary font-mono">JR</h2>
      <div className="flex flex-row gap-4 lg:gap-12">
        <a href="/" className="focus:font-bold active:font-bold text-secondary">
          home
        </a>
        <a
          href="/projects"
          className="focus:font-bold  active:font-bold text-secondary"
        >
          projects
        </a>
        <a
          href="/blog"
          className="focus:font-bold active:font-bold text-secondary"
        >
          blog
        </a>
      </div>
    </nav>
  );
}
