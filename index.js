import User from "./User.js";
import StreamingService from "./StreamingService.js";
import Movie from "./Movie.js";
import Series from "./Series.js";
import Episode from "./Episode.js";

const episodeIntroduction = new Episode('Introduction', 'detective', new Date('12/11/2021'), '00:25');
const episodeTravel = new Episode('Travel', 'detective', new Date('12/11/2021'), '00:24');

const hulk = new Movie('Hulk', 'action', new Date('10/12/2022'), '02:23');
const sherlock = new Series('Sherlock', 'detective', new Date('12/11/2021'), [episodeIntroduction, episodeTravel]);
const betman = new Movie('Betman', 'fantasy', new Date('07/22/2022'), '02:12');
const avatar = new Movie('Avatar', 'adventure', new Date('04/01/2021'), '02:32');
const holiday = new Movie('Holiday', 'comedy', new Date('09/24/2022'), '01:21');
const deadpool = new Movie('Deadpool', 'action', new Date('01/03/2021'), '02:00');

const start = () => {
  try {
    const megogoService = new StreamingService('Megogo', [hulk, sherlock, betman, avatar, holiday]);
    const user1 = new User();
    user1.subscribe(megogoService);
    megogoService.addShow(deadpool);
    const megogoSubscription = user1.getSubscriptionsByStreamingServiceName('Megogo');
    megogoSubscription.watch('Hulk');
    megogoSubscription.watch('Hulk');
    megogoSubscription.watch('Sherlock');
    megogoSubscription.getRecommendationTrending();
    console.log(sherlock.duration)
  } catch (error) {
    console.log(error);
  };
};

start();





