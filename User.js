import Subscription from "./Subscription.js";

class User {
    constructor() {
        this.subscriptions = [];
    };
    
    getSubscriptionsByStreamingServiceName(serviceName) {
        const subscription = this.subscriptions.find(subscription => subscription.streamingService.name == serviceName);
        if(!subscription ) {
            throw new Error('Streaming service is not found');
        };

        return subscription;
    };

    subscribe(streamingService) {
        const checkSubscriptions = this.subscriptions.some(subscription => subscription.streamingService.name == streamingService.name );
        if(checkSubscriptions ) {
            console.warn(`this User is already subscribed on ${streamingService.name}`);
            return;
        };
        const subscription = new Subscription(streamingService);
        this.subscriptions.push(subscription);
    };
};


export default User;