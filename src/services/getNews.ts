import { HLTV } from "hltv";
import { orderDescByDate } from "../utils/orderDescByDate";

class getNews {
    async execute() {
        const data = await HLTV.getNews();
        return data;
    }
}

export default new getNews;

