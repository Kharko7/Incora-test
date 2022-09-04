class StreamingService {
    constructor(name, shows = []) {
        this.name = name;
        this.shows = shows;
        this.viewsByShowNames = new Map(this.shows.map(show => [show.name, 0]));
    };

    sortShowsByViewsCount(shows) {
        const sortedShows = shows.sort((a, b) => {
            const viewsCountA = this.viewsByShowNames.get(a.name);
            const viewsCountB = this.viewsByShowNames.get(b.name);
            return viewsCountB - viewsCountA;
        });

        return sortedShows;
    };

    addShow(newShow) {
        const checkDuplicate = this.shows.find(show => 
            show.name === newShow.name &&
            show.genre === newShow.genre
        );

        if (checkDuplicate) {
            console.warn("this show exist");
            return;
        };
        this.shows.push(newShow);
        this.viewsByShowNames.set(newShow.name, 0);
    };

    getMostViewedShowsOfYear(year) {
        const filteredShows = this.shows.filter(item => item.releaseDate.getFullYear() == year);

        return this.sortShowsByViewsCount(filteredShows).slice(0, 10);
    };

    getMostViewedShowsOfGenre(genre) {
        const filteredShows = this.shows.filter(item => item.genre == genre);

        return this.sortShowsByViewsCount(filteredShows).slice(0, 10);
    };
};

export default StreamingService;