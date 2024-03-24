import { Input } from "../Input/Input";

import './Header.css';

export function Header() {
  return (
    <header className="Header">
      <Input />

      <nav className="navigation">
        <a href="/">Link</a>
        <a href="/">Link</a>
        <a href="/">Link</a>
      </nav>
    </header>
  );
}

