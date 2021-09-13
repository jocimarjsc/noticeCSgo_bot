import { HLTV } from "hltv";
import { orderDescByDate } from "../utils/orderDescByDate";

class getNews {
    async execute() {
        const data = await HLTV.getNews({ year: 2021, month: "september"});
        return data;
    }
}

export default new getNews;

