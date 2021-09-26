import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useLocalStorage } from 'react-use';

import api from '../services/api';

const EventContext = createContext({});

const EventProvider = ({ children }) => {
  // Global State
  const [events, setEvents] = useLocalStorage('events', []);
  const [event, setEvent] = useLocalStorage('event', {});

  // Methods
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/events');

      setEvents(response.data);
    }
    fetchData();
  }, [setEvents]);

  const fetchEvent = useCallback(
    async (event_id) => {
      const response = await api.get(`/events/${event_id}`);

      setEvent(response.data);
    },
    [setEvent]
  );

  return (
    <EventContext.Provider
      value={{
        fetchEvent,
        event,
        events,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

function useEvent() {
  const context = useContext(EventContext);

  if (!context)
    throw new Error('useEvent must be used within an EventProvider');

  return context;
}

export { EventProvider, useEvent };
