"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fun = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      setData(await response.json())
    }
    fun()
  }, [])

  return <ul>
    {data.map(({ title, id }) => <p key={id}>{title}<br></br></p>)}
  </ul>;
}
