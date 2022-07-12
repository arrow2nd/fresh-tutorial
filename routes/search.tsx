/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

const names = ["Asahi Serizawa", "Fuyuko Mayuzumi", "Mei Izumi"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = names.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  const resultItems = results.map((name) => <li key={name}>{name}</li>);

  return (
    <div class={tw`p-4`}>
      <form class={tw`flex justify-center`}>
        <input
          class={tw`border border-gray-400`}
          type="text"
          name="q"
          value={query}
        />
        <button class={tw`px-2 text-white bg-blue-500`} type="submit">
          Search
        </button>
      </form>
      <div class={tw`mt-4 flex justify-center`}>
        <ul>
          {resultItems.length === 0 ? <span>No results</span> : resultItems}
        </ul>
      </div>
    </div>
  );
}
