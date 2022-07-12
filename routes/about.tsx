/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const res = await ctx.render();
    res.headers.set("X-Custom-Header", "Hello");
    return res;
  },
};

export default function AboutPage() {
  return (
    <div class={tw`flex h-screen justify-center items-center`}>
      <div class={tw`text-5xl`}>🍋</div>
      <div class={tw`ml-4`}>
        <span class={tw`text-xl`}>About</span>
        <p class={tw`text(md gray-500)`}>This is the about page.</p>
      </div>
    </div>
  );
}
