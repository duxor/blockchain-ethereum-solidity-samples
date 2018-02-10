UI.tweetButton.addEventListener('click', function () {
    let tweetText = UI.tweetInput.value;
    if (tweetText.length < 1) {
        alert('Please check your input');
        return;
    }

    Blockchain.contract.addTweet(tweetText, (err, res) => {
        console.log('Added, transaction: ' + res);
        UI.tweetInput.value = '';

        web3.eth.getBlockNumber((error, latestBlock) => {
            console.log(latestBlock);
            Blockchain.contract.TweetAdded({}, {fromBlock: latestBlock, toBlock: 'latest'})
                .watch((error, response) => {
                        try {
                            console.log(response);
                            appendTweet({
                                text: response.args.text,
                                address: response.args.creator,
                                likes: parseInt(response.args.likes),
                                timestamp: parseInt(response.args.timestamp),
                            });
                        } catch (e) {
                            console.log('Local error: ', e);
                            console.log('Server error: ', error);
                            console.log('Server response: ', response);
                        }
                    }
                );
        });

    });
});
Blockchain.contract.TweetAdded({}, {fromBlock: 0, toBlock: 'latest'})
    .watch((error, response) => {
            try {
                Blockchain.contract.getTweet(response.args.text, parseInt(response.args.timestamp), (err, res) => {
                    try {
                        appendTweet({
                            text: res[0],
                            address: res[1],
                            likes: parseInt(res[2]),
                            timestamp: parseInt(res[3]),
                        });
                    } catch (e) {
                        console.log('Local error: ', e);
                        console.log('Server error: ', err);
                        console.log('Server response: ', res);
                    }
                });
            } catch (e) {
                console.log('Local error: ', e);
                console.log('Server error: ', error);
                console.log('Server response: ', response);
            }
        }
    );

const appendTweet = (tweetParams) => {
    let tweetDiv = document.createElement('div');
    tweetDiv.className = 'alert alert-warning ' + tweetParams.address + tweetParams.timestamp;

    let tweetH = document.createElement('h1');
    tweetH.innerHTML = tweetParams.text;

    let tweetLikesP = document.createElement('p');
    tweetLikesP.className = 'likes';
    tweetLikesP.innerHTML = 'Likes: ' + tweetParams.likes;

    let tweetAddressP = document.createElement('p');
    tweetAddressP.className = 'small';
    tweetAddressP.innerHTML = 'Creator: ' + tweetParams.address;

    let tweetTimestampP = document.createElement('p');
    tweetTimestampP.className = 'small';
    let date = new Date(tweetParams.timestamp * 1000);
    tweetTimestampP.innerHTML = 'Date: ' +
        (date.getDate() < 10 ? '0' : '' ) + date.getDate() + '.' +
        (date.getMonth() < 9 ? '0' : '' ) + (1 + date.getMonth()) + '.' +
        date.getFullYear() + '. ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds();

    let tweetButton = document.createElement('button');
    tweetButton.className = 'btn btn-danger float-right';
    tweetButton.innerHTML = 'Like!';
    tweetButton.addEventListener('click', function () {
        console.log(tweetParams);
        Blockchain.contract.likeTweet(tweetParams.text, tweetParams.timestamp, (err, res) => {
            $(this).closest('div').find('.likes')[0].innerHTML = 'Likes: ' +
                (1 + parseInt($(this).closest('div').find('.likes')[0].innerHTML.slice(7)));
        });
    });

    tweetH.appendChild(tweetButton);
    tweetDiv.appendChild(tweetH);
    tweetDiv.appendChild(tweetLikesP);
    tweetDiv.appendChild(tweetAddressP);
    tweetDiv.appendChild(tweetTimestampP);
    UI.tweets.appendChild(tweetDiv);
}
