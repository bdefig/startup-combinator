import 'whatwg-fetch';

export function sendRating(startupText, thumb) {
    const url = 'https://us-central1-startup-combinator.cloudfunctions.net/thumb';
    let message = {};
    message.method = 'post';
    message.headers = {
        'Content-Type': 'application/json'
    };
    message.body = JSON.stringify({
        startupText: startupText,
        thumb: thumb
    });
    return fetch(url, message);
}