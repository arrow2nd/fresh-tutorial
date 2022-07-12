/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  const links = [
    "about",
    "github/arrow2nd",
    "greet/cat",
    "search",
    "countdown",
    "api/random-uuid",
  ];

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>Welcome to `fresh`.</p>
      <div>
        {links.map((link) => (
          <a class={tw`m-1 px-4 py-2 bg-green-300`} href={link}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
