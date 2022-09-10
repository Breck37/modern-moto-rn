import { LiveSections, MapRider, ModernSections } from "./interfaces"

const formatSections = (sections: LiveSections[]): ModernSections[] => {
  return sections.map((section) => ({
    section: section.SN,
    time: section.ST,
  }))
}

export const mapRider: MapRider = (rider) => ({
  position: rider.A,
  bestLap: rider.BL,
  fullName: rider.F,
  hometown: rider.H,
  lap: rider.L,
  lastLap: rider.LL,
  number: rider.N,
  status: rider.S,
  team: rider.T,
  bike: rider.V,
  sections: formatSections(rider.SR),
})