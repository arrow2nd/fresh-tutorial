/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

// props は JSON にシリアライズ可能な型である必要があるため
// target の値は Date 型ではなく string 型
export default function Countdown(props: { target: string }) {
  const target = new Date(props.target);
  const [now, setNow] = useState(new Date());

  // マウントされている間、毎秒毎に now の値を現在の日付で更新する
  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now > target) clearInterval(timer);
        return new Date();
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [props.target]);

  // 目標時間を過ぎたらカウントダウンを終了
  if (now > target) {
    return <span>🎉</span>;
  }

  // 残り時間をフォーマットしてレンダリング
  const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000);
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
}
