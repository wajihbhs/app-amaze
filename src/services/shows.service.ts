import amazeApi from "@/services/amazeApi";
import {Show} from "@/models/Show";

const SHOWS_URL = '/shows?limit=10';

export class ShowsService {
    public static async getMovies(): Promise<Show[]> {
        const list: Show[] = [];

        const shows: Show[] = await amazeApi.get(SHOWS_URL).then((response) => response.data as Array<Show>);

        for (const show of shows) {
            list.push(new Show(show.id, show.name, show.genres, show.summary, show.officialSite, show.premiered, show.image, show.rating, show.averageRuntime));
        }

        return list;
    }
}
