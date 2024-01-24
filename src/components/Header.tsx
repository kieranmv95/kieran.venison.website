import ActiveLink from "./ActiveLink";

const Header = () => (
  <header className="sticky top-0 left-0 bg-slate-200 dark:bg-bg-start z-50">
    <nav className="generic-container">
      <ul className="flex gap-5">
        <li>
          <ActiveLink
            href="/"
            className="hover:underline py-4 inline-block"
            activeClassname="text-primary"
            exact
          >
            <span className="text-primary">00.</span>Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/about"
            className="hover:underline py-4 inline-block"
            activeClassname="text-primary"
            exact
          >
            <span className="text-primary">01.</span>About
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/blog"
            className="hover:underline py-4 inline-block"
            activeClassname="text-primary"
          >
            <span className="text-primary">02.</span>Blog
          </ActiveLink>
        </li>
        <li>
          <ActiveLink
            href="/projects"
            className="hover:underline py-4 inline-block"
            activeClassname="text-primary"
          >
            <span className="text-primary">03.</span>Projects
          </ActiveLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
