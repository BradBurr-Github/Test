

//const video1El = document.getElementById('videoDay1');
//const apiYTKey = 'AIzaSyB6cpGWbXF__AFrSE8Pqe356TwClNtOfWw';
//const apiYTKey = 'AIzaSyBzPdxIhS805a1DF3IUy6HHhuznNFrN8Hw';
const apiYTKey =   'AIzaSyDkL8GaFWdS1FIb2oxX_gLDTu8S84mK12U';

function logVideoAddress(youTubeVideo) {
  console.log(youTubeVideo);
}

// ASync Function to fetch the YouTube video
const fetchYouTubeVideo = async (recipeName) => {
  let trimmedRecipeName = recipeName.trim() + '+recipe+how+to';
  let concatRecipeName = trimmedRecipeName.replaceAll(' ', '+');
  let apiYouTubeCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiYTKey}&type=video&maxResults=1&q=${concatRecipeName}`;
  const response = await fetch(apiYouTubeCall);
  const data = await response.json();
  return data;
};

// Function to retrieve a YouTube video with recipe key words passed in
function getYouTubeVideoForRecipe(recipeName) {
  let result = fetchYouTubeVideo(recipeName)
  .then(data => {
    let youTubeVideo = `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`;
    logVideoAddress(youTubeVideo);
  })
  .catch(error => {
    window.alert('The YouTube video could not be found for this recipe.')
  })
};


getYouTubeVideoForRecipe('cheesecake');

//console.log(`Video: ${vYT}`);



