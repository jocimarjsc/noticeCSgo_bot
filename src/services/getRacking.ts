import { HLTV } from "hltv";
import { orderDescByDate } from "../utils/orderDescByDate";

class getRacking {
    async execute() {
        const data = await HLTV.getTeamRanking();
        const rackings = data.sort(orderDescByDate);
        const racking = `
        <b>🏆 Rancking 2021 🏆</b>
-------------------------------------- \n ${rackings.map(team => {
            return `<b>${team.place} - ${team.team.name}</b>\n ${team.change === 0 ? "Se manteve na posição: " + team.change + " ⚪": team.change > 0 ? "Subiu: " + team.change + " 🟢":"Desceu: " + team.change + " 🔴"}
-------------------------------------- \n`
        }).join(" ")}
        `
        return racking;
    }
}

export default new getRacking;

