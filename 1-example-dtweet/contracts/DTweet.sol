pragma solidity ^0.4.17;

contract DTweet {
    struct Tweet {
        string text;
        uint likes;
        address creator;
        uint timestamp;
    }

    Tweet[] tweets;

    event TweetAdded(string text, address creator, uint likes, uint timestamp);
    event TweetLiked(string text, address creator, uint timestamp, uint likes);

    function DTweet() public {
    }

    function addTweet (string text) public {
        uint _timestamp = now;
        tweets.push(Tweet(text, 0, msg.sender, _timestamp));
        TweetAdded(text, msg.sender, 0, _timestamp);
    }

    function likeTweet (string _text, uint _timestamp) public {
        for (uint index = 0; index < tweets.length; index++) {
            if (keccak256(tweets[index].text) == keccak256(_text)
                &&  keccak256(tweets[index].timestamp) == keccak256(_timestamp)
            ) {
                tweets[index].likes = tweets[index].likes + 1;
                TweetLiked(tweets[index].text, msg.sender, tweets[index].timestamp, tweets[index].likes);
            }
        }
    }

    function getTweet(string _text, uint _timestamp) public view
        returns (string text, address creator, uint likes, uint timestamp)
    {
        for (uint index = 0; index < tweets.length; index++) {
            if (keccak256(tweets[index].text) == keccak256(_text) &&
                keccak256(tweets[index].timestamp) == keccak256(_timestamp)
            ) {
                text = tweets[index].text;
                creator = tweets[index].creator;
                likes = tweets[index].likes;
                timestamp = tweets[index].timestamp;
            }
        }
    }
}