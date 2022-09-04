import Show from "./Show.js";

class Movie extends Show {
    constructor(name, genre, releaseDate, duration) {
        super(name, genre, releaseDate, duration);
    }

    getDuration() {
        return this.duration
    }
}

export default Movie