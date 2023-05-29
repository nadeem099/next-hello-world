import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

interface Event {
  id: 1;
  title: "Event 1";
  description: "description 1";
  category: "sports";
  date: "April 25";
}

interface Props {
  eventList: Event[];
}

export default function Events({ eventList }: Props) {
  const [events, setEvents] = useState<Event[]>(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:3030/events?category=sports"
    );
    const data: Event[] = await response.json();
    setEvents(data);
    router.push("events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.title} {event.date} {event.category}
          </h2>
          <p>{event.description}</p>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const filter = query.category ? `category=${query.category}` : "";
  const response = await fetch(`http://localhost:3030/events?${filter}`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
