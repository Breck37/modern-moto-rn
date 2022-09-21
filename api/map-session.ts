import { MapSession } from "./interfaces/session";

export const mapSession: MapSession = (event) => {
  return {
    status: event.B,
  };
};
