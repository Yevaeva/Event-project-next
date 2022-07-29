import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
      <h1>The Home Page</h1>
      <EventList items={ featuredEvents} />
    </div>
  );
}
