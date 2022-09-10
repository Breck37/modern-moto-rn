export interface LiveSections {
  SN: string; // section - 
  ST: string; // time
}

export interface ModernSections {
  section: string;
  time: string;
}

export interface LiveRider {
  A: number; // position -
  BL: string; // bestLap 
  F: string; // fullName 
  H: string; // hometown 
  L: number; // lap 
  LL: string; // lastLap 
  N: string; // number 
  S: string; // status 
  T: string; // team 
  V: string; // bike 
  SR: LiveSections[] // sections 
}

export interface ModernRider {
  position: number;
  bestLap: string;
  fullName: string;
  hometown: string;
  lap: number;
  lastLap: string;
  number: string;
  status: string;
  team: string;
  bike: string;
  sections: ModernSections[]
}

export type MapRider = (rider: LiveRider) => ModernRider;