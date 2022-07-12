/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avater_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_req, ctx) {
    const { username } = ctx.params;
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (res.status !== 200) {
      return ctx.render(null);
    }

    const user: User = await res.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div class={tw`flex h-screen justify-center items-center`}>
      <img
        class={tw`border`}
        src={`https://github.com/${data.name}.png`}
        width={64}
        height={64}
      />
      <div class={tw`ml-4`}>
        <span class={tw`text(xl black)`}>{data.name}</span>
        <p class={tw`text-gray-500`}>{data.login}</p>
      </div>
    </div>
  );
}
