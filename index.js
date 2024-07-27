const { WebcastPushConnection } = require('tiktok-live-connector');

// Username of someone who is currently live

let tiktokUsername = "viranikaa2";

// Create a new wrapper object and pass the username

let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

// Connect to the chat (await can be used as well)

tiktokLiveConnection.connect().then(state => {

    console.info(`Connected to roomId ${state.roomId}`);

}).catch(err => {

    console.error('Failed to connect', err);

})

// Define the events that you want to handle

// In this case we listen to chat messages (comments)

tiktokLiveConnection.on('chat', data => {

    console.log(`gift:${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);

})

// And here we receive gifts sent to the streamer

tiktokLiveConnection.on('gift', data => {

    console.log(`GIFT:${data.nickname} (userId:${data.userId}) sends ${data.giftName}`);

})

// ...and more events described in the documentation below