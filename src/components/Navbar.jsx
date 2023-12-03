export default function Navbar() {
  return (
    <nav className="flex flex-row gap-8 p-2 justify-between items-center border-2 border-solid border-borderStroke rounded-md shadow-md shadow-borderStroke">
      <h2 className="font-bold text-secondary font-mono">JR</h2>
      <div className="flex flex-row gap-4">
        <a href="/" className="focus:font-bold text-secondary">
          home
        </a>
        <a href="/projects" className="focus:font-bold text-secondary">
          projects
        </a>
        <a href="/blog" className="focus:font-bold text-secondary">
          blog
        </a>
      </div>
    </nav>
  );
}
