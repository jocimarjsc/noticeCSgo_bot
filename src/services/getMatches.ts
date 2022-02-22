import { HLTV, MatchFilter } from "hltv";

class getMatches {
    async execute() {
        const data = await HLTV.getMatches({ filter: MatchFilter.TopTier});

        const matches = data.map(matche => {
            return `${matche.event} ---------- ${matche.date} \n ${matche.team1} x ${matche.team2} \n ${matche.format}`
        })
        return matches
    }
}

export default new getMatches;

