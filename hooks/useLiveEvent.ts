import { useEffect, useState } from "react";
import { mapEvent } from "../api";
import { ModernEvent, ModernRider, StatusType } from "../api/interfaces";
import { MOTO_LIVE_URL } from "../constants";
import { get } from "../utils";

interface LiveEventParams {
  status: StatusType | "";
}

interface LiveEventResult {
  event: ModernEvent;
  topThree?: ModernRider[];
}

export function useLiveEvent({ status }: LiveEventParams): LiveEventResult {
  const [event, setEvent] = useState<ModernEvent>(null);

  useEffect(() => {
    const request = async () => {
      const eventResult = await get(MOTO_LIVE_URL, mapEvent);
      console.log({ eventResult });
      setEvent(eventResult);
    };

    // TODO - Implement block on request check
    if (status && status !== StatusType.COMPLETE) {
    }
    request();
    // const requestInterval = setInterval(request, 20000);

    // return () => {
    // clearInterval(requestInterval);
    // }
  }, [status]);

  function extractTopThree() {
    if (!event?.riders?.length) return null;

    return event.riders.slice(0, 3);
  }

  return {
    event,
    topThree: extractTopThree(),
  };
}
