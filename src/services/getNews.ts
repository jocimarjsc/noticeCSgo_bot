import { HLTV } from "hltv";
import { orderDescByDate } from "../utils/orderDescByDate";

class getNews {
    async execute() {
        const date = new Date();
        const months = new Array("january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december")
        const Month = date.getMonth()

        const NewDate = {
            year: date.getFullYear(),
            month: months[Month]
        }
        console.log(NewDate)
        const data = await HLTV.getNews();
        return data;
    }
}

export default new getNews;

