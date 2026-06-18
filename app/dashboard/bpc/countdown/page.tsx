"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Countdown() {
  const router = useRouter();
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      router.push("/dashboard/bpc/success");
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h1>Processing...</h1>
      <h2>{count}</h2>
    </div>
  );
}
