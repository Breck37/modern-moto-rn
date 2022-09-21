interface LiveSession {
  A: string; // "5:23:28 PM"
  B: StatusType; // "Session Complete"
  C: string; // ?
  D: string; // ?
  L: string; // ?
  T: string; // ?
}

interface ModernSession {
  status: StatusType; // maps from B field
}

export interface MapSession {
  (event: LiveSession): ModernSession;
}

export enum StatusType {
  COMPLETE = "Session Complete",
}
