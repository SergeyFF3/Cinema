"use client";

import { getProduct } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getProduct().then((res) => setMovie(res));
  }, []);

  return <h1>Cinema 123</h1>;
}
