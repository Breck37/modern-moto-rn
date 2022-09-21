import { MapEvent } from "./interfaces/event";
import { mapRider } from "./map-rider";

export const mapEvent: MapEvent = (event) => ({
  riders: event.B.map(mapRider),
  currentTime: event.DT,
  eventName: event.E,
  fastestLapRiderNumber: event.MBY,
  fastestLapTime: event.MLT,
  currentSession: event.S,
  currentTrack: event.T,
});
