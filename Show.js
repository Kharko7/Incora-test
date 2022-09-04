class Show {
    constructor(name, genre, releaseDate) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
    };

    getDuration() {
        throw new Error('this method should be implemented in children class');
    };
};

export default Show;