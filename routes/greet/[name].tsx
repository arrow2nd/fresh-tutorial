/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";

export default function GreetPage({ params }: PageProps) {
  return (
    <div class={tw`flex h-screen justify-center items-center`}>
      <p>Greetings to you, {params.name}!</p>
    </div>
  );
}
