/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function GreetPage({ params }: PageProps) {
  return (
    <main>
      <p>Greetings to you, {params.name}!</p>
    </main>
  );
}
