interface RiderSectionTime {
    section: string;
    time: string;
}


interface LiveTimingRider {
    position: number;
    lap: number;
    bestLap: string;
    fullName: string;
    hometown: string;
    lastLap: string;
    number: string;
    status: string;
    team: string;
    bike: string;
    sections: RiderSectionTime[];
}