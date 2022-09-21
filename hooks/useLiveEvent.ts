import { useEffect, useState } from "react";
import { mapEvent } from "../api";
import { StatusType } from "../api/interfaces";
import { MOTO_LIVE_URL } from "../constants";
import { get } from "../utils";

interface LiveEventParams {
  status: StatusType | "";
}

export function useLiveEvent({ status }: LiveEventParams) {
  const [event, setEvent] = useState(null);

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

  return {
    event,
  };
}
