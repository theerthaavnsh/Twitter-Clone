const form = document.getElementById('new-tweet');
const tweetsList = document.getElementById('tweets-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const textarea = form.querySelector('textarea');
  const tweetText = textarea.value;
  const tweetDate = new Date().toLocaleString();

  const tweet = document.createElement('li');
  tweet.classList.add('tweet');
  tweet.innerHTML = `
    <p class="tweet-text">${tweetText}</p>
    <p class="tweet-date">${tweetDate}</p>
  `;

  tweetsList.appendChild(tweet);
  textarea.value = '';
});
