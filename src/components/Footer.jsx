import { Github, Linkedin, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="w-full flex flex-row justify-between items-center  md:w-1/4 md:mx-auto p-1">
      <small>connect: </small>
      <a href="https://github.com/jay-rajput30" target="_blank"><Github color="#b8c1ec" strokeWidth="2" /></a>
      <a href="https://in.linkedin.com/in/jay-rajput-23304bab" target="_blank"><Linkedin color="#b8c1ec" strokeWidth="2" /></a>
      <a href="https://twitter.com/jay_r30" target="_blank"><Twitter color="#b8c1ec" strokeWidth="2" /></a>
    </footer>
  );
}
