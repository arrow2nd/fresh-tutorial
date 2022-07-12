/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);

  return (
    <div class={tw`flex h-screen justify-center items-center`}>
      <p>
        the big event is happing <Countdown target={date.toString()} />.
      </p>
    </div>
  );
}
