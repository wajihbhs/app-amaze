import {ShowInterface} from "@/models/ShowInterface";

export class Show implements ShowInterface {

    constructor(
        public id: number,
        public name: string,
        public genres: string[],
        public summary: string,
        public officialSite: string,
        public premiered: string,
        public image: any,
        public rating: any,
        public averageRuntime: any,
    ) {
    }
}
