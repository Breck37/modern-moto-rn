import { useEffect, useState } from "react";
import { mapSession } from "../api";
import { StatusType } from "../api/interfaces";
import { MOTO_SESSION_URL } from "../constants";
import { get } from "../utils";

export function useRaceSession() {
  const [status, setStatus] = useState<StatusType | "">("");
  useEffect(() => {
    const request = async () => {
      const event = await get(MOTO_SESSION_URL, mapSession);
      console.log("SESSION EVENT", { event });
      setStatus(event?.status);
    };
    request();
    // const requestInterval = setInterval(request, 20000);

    // return () => {
    // clearInterval(requestInterval);
    // }
  }, []);

  return {
    status,
    loading: status === "",
  };
}
