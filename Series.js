import Show from "./Show.js";

class Series extends Show {
    constructor(name, genre, releaseDate, duration, episodes) {
        super(name, genre, releaseDate, duration);
        this.episodes = episodes;
    }

    getDuration() {
        const hm = this.duration;
        const a = hm.split(':');
        const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60
        const newSeconds = this.episodes * seconds;
        const date = new Date(newSeconds * 1000);
        let hh = date.getUTCHours();
        let mm = date.getUTCMinutes();

        if (hh < 10) { hh = "0" + hh; }
        if (mm < 10) { mm = "0" + mm; }

        return hh + ':' + mm
    }
}

export default Series