import { LiveRider, ModernRider } from "./rider";

interface LiveEvent {
  // A: ?, unknown
  B: LiveRider[]; // riders
  DT: string; // Current Time
  E: string; // Event
  MBY: string; // Fastes Lap rider number
  MLT: string; // Fastest lap time
  // MSR: ; // Sections - not important
  // R: ?; unkonwn
  S: string; // event session
  // SC: ?; unkonwn
  // SCT: ?; unkonwn
  T: string; // city / track
}

export interface ModernEvent {
  riders: ModernRider[]; // riders
  currentTime: string; // Current Time
  eventName: string; // Event
  fastestLapRiderNumber: string; // Fastes Lap rider number
  fastestLapTime: string; // Fastest lap time
  currentSession: string; // event session
  currentTrack: string; // city / track
}

export type MapEvent = (event: LiveEvent) => ModernEvent;
