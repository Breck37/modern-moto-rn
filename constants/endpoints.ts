interface EndpointArgs {
  weekId: string;
  season: string;
}

type EndpointFunction = (args: EndpointArgs) => string;

interface SeasonEndpoints {
  smallBikeEntryList: EndpointFunction;
  smallBikeOfficialResults: EndpointFunction;
  smallBikeQualifying: EndpointFunction;
  bigBikeEntryList: EndpointFunction;
  bigBikeOfficialResults: EndpointFunction;
  bigBikeQualifying: EndpointFunction;
  liveTiming: string;
}

interface MxEndpoints extends SeasonEndpoints {
  smallBikeLapTimesMoto1: EndpointFunction;
  smallBikeLapTimesMoto2: EndpointFunction;
  bigBikeLapTimesMoto1: EndpointFunction;
  bigBikeLapTimesMoto2: EndpointFunction;
}

interface SxEndpoints extends SeasonEndpoints {
  smallBikeHeat1: EndpointFunction;
  smallBikeHeat2: EndpointFunction;
  bigBikeHeat1: EndpointFunction;
  bigBikeHeat2: EndpointFunction;
  smallBikeLapTimes: EndpointFunction;
  bigBikeLapTimes: EndpointFunction;
}
export const MOTO_SESSION_URL =
  "http://americanmotocrosslive.com/xml/mx/RaceData.json";
export const MOTO_LIVE_URL =
  "http://americanmotocrosslive.com/xml/mx/RaceResults.json";
const MOTO_URL = "http://americanmotocrossresults.com/xml/MX/events";

export const mx: MxEndpoints = {
  smallBikeEntryList: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M2ENTRYLIST.PDF`,
  smallBikeOfficialResults: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M2F2PRESS.pdf`,
  smallBikeQualifying: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M2QCOVR.pdf`,
  smallBikeLapTimesMoto1: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M2F1RID.pdf`,
  smallBikeLapTimesMoto2: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M2F2RID.pdf`,
  bigBikeEntryList: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M1ENTRYLIST.PDF`,
  bigBikeOfficialResults: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M1F2PRESS.pdf`,
  bigBikeQualifying: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M1QCOVR.pdf`,
  bigBikeLapTimesMoto1: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M1F1RID.pdf`,
  bigBikeLapTimesMoto2: ({ weekId, season }: EndpointArgs) =>
    `${MOTO_URL}/M${season}${weekId}/M1F2RID.pdf`,
  liveTiming: "ttp://americanmotocrosslive.com/xml/mx/RaceResults.json",
};

const SX_URL = "https://results.amasupercross.com/xml/sx/events";
export const SUPER_LIVE_URL =
  "https://live.amasupercross.com/xml/sx/RaceResults.json";

export const sx: SxEndpoints = {
  smallBikeEntryList: ({ weekId, season }) =>
    `${SX_URL}/S${season}${weekId}/S2ENTRYLIST.PDF`,
  smallBikeQualifying: ({ weekId, season }) =>
    `${SX_URL}/S${season}${weekId}/S2QCOVR.pdf`,
  smallBikeHeat1: ({ weekId, season }) =>
    `${SX_URL}/${season}${weekId}/S2H1RES.pdf`,
  smallBikeHeat2: ({ weekId, season }) =>
    `${SX_URL}/${season}${weekId}/S2H2RES.pdf`,
  smallBikeLapTimes: ({ weekId, season }) =>
    `${SX_URL}/S${season}${weekId}/S2F1RID.pdf`,
  smallBikeOfficialResults: ({ weekId, season }) =>
    `${SX_URL}/S${season}${weekId}/S2F1PRESS.pdf`,
  bigBikeEntryList: ({ weekId, season }) =>
    `${SX_URL}/S${season}${weekId}/S1ENTRYLIST.PDF`,
  bigBikeQualifying: ({ weekId, season }) =>
    `${SX_URL}/S${season}${weekId}/S1QCOVR.pdf`,
  bigBikeHeat1: ({ weekId, season }) =>
    `${SX_URL}/${season}${weekId}/S1H1RES.pdf.pdf`,
  bigBikeHeat2: ({ weekId, season }) =>
    `${SX_URL}/${season}${weekId}/S1H2RES.pdf.pdf`,
  bigBikeLapTimes: ({ weekId, season }) =>
    `${SX_URL}/S${season}${weekId}/S1F1RID.pdf`,
  bigBikeOfficialResults: ({ weekId, season }) =>
    `${SX_URL}/S${season}${weekId}/S1F1PRESS.pdf`,
  liveTiming: "https://live.amasupercross.com/xml/sx/RaceData.json",
};
