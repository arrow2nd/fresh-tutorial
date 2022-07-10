/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

export const hander: Handlers = {
  async GET(_req, ctx) {
    const res = await ctx.render();
    res.headers.set("X-Custom-Header", "Hello");
    return res;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>THis is the about page.</p>
    </main>
  );
}
