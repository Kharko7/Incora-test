class Show {
    constructor(name, genre, releaseDate, duration) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.duration = duration;
    }

    getDuration() {
        throw new Error('this method should be implemented in children class');
    }
}

export default Show