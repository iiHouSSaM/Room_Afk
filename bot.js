//this my first Music code  

// make folder  and rename to this  settings.json  

// Put inside folder  settings.json   this >>>>>>>>> 

//module.exports = {
  //  TOKEN: 'NTY2NTkxOTQ4NTM4NzczNTA0.XLI6ZA.pvwbydl-OSe_GhKfHQZt7E8mwh8',    
  //  YT_API_KEY: 'AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4', 
 //   prefix: '$',
 //   devs: ['343743154429755392']
//}


var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

function isYoutube(str) {
    console.log('function isYoutube is running')
    return str.toLowerCase().indexOf("youtube.com") > -1;
}
const Discord = require("discord.js");
//const client = new Discord.client();
const client = new Discord.Client(); //my better version hahahaahahhh
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");

var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

const yt_api_key = config.yt_api_key;
const bot_controller = config.bot_controller;
const prefix = config.prefix;
const discord_token = config.discord_token;

var queue = [];
//var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
//b
var musicServers = {}; //all servers playing music
var musicServer = {}; //current music server
var musicQueue = []; //queue in current server
var musicList = []; //names of music queue
var musicResults = []; //all results of search query
var musicSearch; //query for youtube search
var isPlaying = false; //is music playing
var isStreaming = false; //if music is streaming
var isSearch = true; //if query is for search
var isLooping = false; //if music is looping
var isSearching = false; //if searching

client.login(discord_token)

client.on('message', function(message) {
    if (message.author.equals(client.user)) return; //check if the client sent the message, if so ignore
    if (!message.content.startsWith(prefix)) return; //check for prefix
    var args = message.content.substring(prefix.length).split(" "); //take each argument
    console.log('function client.on is running')
    switch (args[0].toLowerCase()) {
        case "play":
            isSearch = true;
            if (args[1]) { //if link or search query is provided, run code
                serverID = JSON.parse(message.guild.id);
                if (!message.member.voiceChannel) { //check if on voice channel
                    message.reply('u not in voice channel b')
                    return
                };
                if (isSearching == true) {
                    message.reply('choose a song before you search again')
                    return
                }
                if (args[1].indexOf('.com') && !args[1].indexOf('youtube.com')) {
                    message.reply('only youtube b')
                }
                if (!musicServers[serverID]) musicServers[serverID] = {
                    musicQueue: []
                };
                if (args[1].indexOf('youtube.com') >= 0) { //if its a link, run code
                    musicServers[serverID].musicQueue.push(args[1]);
                    musicServer = musicServers[serverID];
                    info(message)
                    isPlaying = true;
                    isSearch = false;
                } else { //if its a search query, run code
                    for (var i = 1; i < args.length; i++) { //for loop to loop through search query
                        musicSearch = musicSearch + ' ' + args[i]
                    }

                    youtube.search(musicSearch, 5, function(error, result) {
                        if (error) {
                            console.log(error);
                        } else {
                            //push results to public variable
                            for (var i = 0; i < 5; i++) {
                                //console.log(result.items[i])
                                musicResults[i] = result.items[i]
                            }
                            //choose song out of results
                            var ret = "\n\n`";
                            for (var i = 0; i < 4; i++) {
                                //console.log(musicResults[i].snippet)
                                console.log(i)
                                //console.log(ret += (i + 1) + ": " + musicResults[i].snippet.title + "\n")
                                ret += (i + 1) + ": " + musicResults[i].snippet.title + "\n";
                            }
                            ret += "`"
                            message.reply('search results:' + ret);
                            isSearching = true;
                            isSearch = true;
                        }
                    });//Toxic Codes / n3k4a
                }
                if (!message.guild.voiceConnection && isSearch == false) message.member.voiceChannel.join().then(function(connection) {
                    play(connection, message)
                });
                else if (isStreaming == false && isSearch == false) {
                    play(connection, message)
                }
            } else {
                message.reply('pls provide a link or search query')
                return;
            }
            break;
        case "choose":
            serverID = JSON.parse(message.guild.id);
            args[1] = args[1] - 1;
            message.reply('now playing: ' + musicResults[args[1]].snippet.title)
            musicServers[serverID].musicQueue.push('https://www.youtube.com/watch?v=' + musicResults[args[1]].id.videoId);
            console.log(musicServers[serverID].musicQueue[0])
            musicServer = musicServers[serverID];
            isPlaying = true;
            isSearching = false;
            info(message)
            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message)
            });
            else if (isStreaming == false && message.guild.voiceConnection) {
                play(connection, message)
            }
            break;
        case "join":
            message.member.voiceChannel.join()
            message.reply('joining now!')
            break;
        case "skip":
            if (musicServer.musicQueue[0]) {
                serverID = JSON.parse(message.guild.id);
                musicServer = musicServers[serverID];
                musicList.shift()
                musicServer.dispatcher.end()
            }
            break;
        case "song":
            message.reply('currently playing ' + musicList[0].title + ' ' + duration)
            break;
        case "queue":
            var ret = "\n\n`";
            for (var i = 0; i < musicList.length; i++) {
                ret += (i + 1) + ": " + musicList[i].title + (i === 0 ? " **(current)**" : "") + "\n";
            }
            ret += "`"
            message.reply(ret);
            break;
        case "pause":
            if (isPlaying == true) musicServer.dispatcher.paused = true, message.reply('paused')
            else message.reply('not playing anything b')
            break;
        case "resume":
            if (isPlaying == true) musicServer.dispatcher.paused = false, message.reply('resumed')
            else message.reply('not playing anything b')
            break;
        case "loop":
            if (isLooping == true) {
                isLooping = false
            }
            if (isLooping == false) {
                isLooping = true
            }
            break;
            client.on('ready', function() {
                console.log("I am ready!");
            });
    }
});


client.on('ready', function() {//Toxic Codes / n3k4a//Toxic Codes / n3k4a
    console.log("I am ready!");
});//Toxic Codes / n3k4a//Toxic Codes / n3k4a


function play(connection, message) {
    isStreaming = true;
    musicServer.dispatcher = connection.playStream(ytdl(musicServer.musicQueue[0], {
        filter: "audioonly"
    }));
    console.log('joined')
    info(connection, message)
    if (isLooping == false) musicServer.musicQueue.shift();
    musicServer.dispatcher.on("end", function() {
        if (musicServer.musicQueue[0]) musicList.shift(), message.reply('now playing ' + musicInfo.title.toLowerCase() + ' `' + duration + '` '), play(connection, message);
        else isPlaying = false, isStreaming = false, connection.disconnect();
    });
}

function info(message) {
    fetchVideoInfo(getYouTubeID(musicServer.musicQueue[0])).then(function(musicInfo) {
        musicList.push(musicInfo)
        if ((musicInfo.duration / 60) >= 1) { //if duration is more than a minute
            if ((musicInfo.duration / 3600) >= 1) { //if duration is more than a hour
                var hours = Math.floor(musicInfo.duration / 3600);
                if (Math.floor((musicInfo.duration / 60) - (hours * 3600)) < 0) {
                    var minutes = 0
                } else {
                    var minutes = Math.floor((musicInfo.duration / 60) - (hours * 3600));
                }
                var seconds = Math.floor((musicInfo.duration - (minutes * 60)) - (hours * 3600));
                if (minutes < 10) { //if less than 10 mins
                    if (seconds < 10) { //if less than 10 secconds
                        duration = `${hours}:0${minutes}:0${seconds}`
                    } else {
                        duration = `${hours}:0${minutes}:${seconds}`
                    }
                } else { //if more than 10 mins
                    if (seconds < 10) { //if less than 10 secconds
                        duration = `${hours}:${minutes}:0${seconds}`
                    } else {
                        duration = `${hours}:${minutes}:${seconds}`
                    }
                }
            } else { //if duration is less than an hour, more than a minute
                if (Math.floor(musicInfo.duration / 60) < 10) { //if less than 10 minutes
                    var minutes = Math.floor(musicInfo.duration / 60);
                    var seconds = musicInfo.duration - minutes * 60;
                    if (seconds < 10) { //if less than 10 secconds
                        duration = `0${minutes}:0${seconds}`
                    } else {
                        duration = `0${minutes}:${seconds}`
                    }
                } else {
                    var minutes = Math.floor(musicInfo.duration / 60);
                    var seconds = musicInfo.duration - minutes * 60;
                    duration = `${minutes}:${seconds}`
                }
            }
        } else { //if duration is less than a minute
            if (musicInfo.duration < 10) { //if less than 10 secconds
                var seconds = musicInfo.duration;
                duration = `0${seconds}`
            } else {
                var seconds = musicInfo.duration;
                duration = `${seconds}`
            }
        }
        message.reply('added ' + musicInfo.title + ' `' + duration + '` to the queue')
    });
}//Toxic Codes / n3k4a


function playMusic(id, message) {//Toxic Codes / n3k4a
    console.log('function playMusic is running')
    voiceChannel = message.member.voiceChannel;

    voiceChannel.join().then(function(connection) {
        stream = ytdl("https://youtube.com/watch?v=" + id, {
            filter: 'audioonly'
        });
        console.log("https://youtube.com/watch?v=" + id)
        skipReq = 0;
        skippers = [];

        dispatcher = connection.playStream(stream);
    });
}//Toxic Codes / n3k4a

function getID(str, cb) {
    console.log('function getID is running')
    if (isYoutube(str)) {
        cb(getYouTubeID(str));
    } else {
        search_video(str, function(id) {//Toxic Codes / n3k4a
            cb(id);
        });//Toxic Codes / n3k4a
    }//Toxic Codes / n3k4a
}//Toxic Codes / n3k4a

function add_to_queue(strID) {
    console.log('function add_to_queue is running')//Toxic Codes / n3k4a
    if (isYoutube(strID)) {
        queue.pish(getYouTubeID(strID));
    } else {
        queue.push(strID);
    }//Toxic Codes / n3k4a
}//Toxic Codes / n3k4a

function search_video(query, callback) {//Toxic Codes / n3k4a
    console.log('function search_video is running')
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        //console.log(body)
        //console.log(body.items[0])//Toxic Codes / n3k4a
    });//Toxic Codes / n3k4a

}; //Toxic Codes / n3k4a
