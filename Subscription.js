class Subscription {
    constructor(streamingService) {
        this.streamingService = streamingService;
    }

    watch(showName) {
        if(!this.streamingService.shows.some(item => item.name == showName )){
            console.warn( "this show doesn't exist")
            return
        }
        const viewsCount = this.streamingService.viewsByShowNames.get(showName);

        this.streamingService.viewsByShowNames.set(showName, viewsCount + 1);
    }

    getRandomItemFromArray(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];

        return item;
    }
    getRecommendationTrending() {
        const mostViewedShowsOfYear = this.streamingService.getMostViewedShowsOfYear(new Date().getFullYear());

        return this.getRandomItemFromArray(mostViewedShowsOfYear)
    }

    getRecommendationByGenre(genre) {
        const mostViewedShowsOfGenre = this.streamingService.getMostViewedShowsOfGenre(genre);

        return this.getRandomItemFromArray(mostViewedShowsOfGenre)
    }
}

export default Subscription