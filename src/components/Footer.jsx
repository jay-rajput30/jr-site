import { Github, Linkedin, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full flex flex-row justify-evenly">
      <Github color="#b8c1ec" strokeWidth="1" />
      <Linkedin color="#b8c1ec" strokeWidth="1" />
      <Twitter color="#b8c1ec" strokeWidth="1" />
    </footer>
  );
}
