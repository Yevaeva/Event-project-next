import { useRouter } from 'next/router';
import React from 'react'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const finsEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={finsEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;