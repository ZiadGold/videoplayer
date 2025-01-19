const videoForm = document.getElementById('video-form');
var videoLink = document.getElementById('video-link');
var videoPlayer = document.getElementById('plyr');
const recentSelectionsList = document.getElementById('recent-selections');
const clearAllBtn = document.getElementById('clearAllBtn');

// Check if there are recent selections in local storage
let recentSelections = [];
if (localStorage.getItem('recentSelections')) {
  recentSelections = JSON.parse(localStorage.getItem('recentSelections'));
  displayRecentSelections();
}

function displayRecentSelections() {
  recentSelectionsList.innerHTML = '';
  recentSelections.forEach((selection) => {
    const selectionItem = document.createElement('li');
    selectionItem.style.margin = "15px";
    const selectionLink = document.createElement('a');
    const deleteBtn = document.createElement('button'); // Add delete button
    selectionLink.href = '#';
    selectionLink.textContent = selection.link;
    selectionLink.addEventListener('click', () => {
      videoPlayer.src = selection.link;
      videoPlayer.currentTime = selection.timestamp;
      videoPlayer.play();
    });
    deleteBtn.style.color = "white";
    deleteBtn.style.backgroundColor = "#4CAF50";
    deleteBtn.style.border = "none";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.padding = "5px";
    deleteBtn.style.margin = "15px";
    deleteBtn.textContent = "Delete"; // Add delete button text
    deleteBtn.addEventListener('click', () => { // Add event listener to delete button
      const selectionIndex = recentSelections.indexOf(selection);
      recentSelections.splice(selectionIndex, 1);
      localStorage.setItem('recentSelections', JSON.stringify(recentSelections));
      displayRecentSelections();
    });
    selectionItem.appendChild(selectionLink);
    selectionItem.appendChild(deleteBtn); // Append delete button to selection item
    recentSelectionsList.appendChild(selectionItem);
  });
}

clearAllBtn.addEventListener('click', () => {
  localStorage.clear();
  recentSelections = [];
  displayRecentSelections();
});

if (1 == 1) {
  // Update timestamp in local storage every 5 seconds
  setInterval(() => {
    videoLink = document.getElementById('video-link');
    var link = videoLink.value;
    if (link == null || link == "") {
      videoPlayer = document.getElementById('plyr');
      link = videoPlayer.src
    }
    //console.log(`${videoPlayer.currentTime} | ${link}`)
    //console.log(recentSelections)
    var currentSelection = recentSelections.find((selection) => selection.link === link);
    //console.log("currentSelection before")
    //console.log(currentSelection)
    if (currentSelection == null){
      currentSelection = {
        link: videoLink.value,
        timestamp: 0
      }; 
    }
    //console.log("currentSelection after")
    //console.log(currentSelection)

    if (currentSelection) {
      if (currentSelection.link === videoPlayer.src) { // added conditional check
        currentSelection.timestamp = videoPlayer.currentTime;
        //console.log(`2 | ${currentSelection.timestamp}`)
        localStorage.setItem('recentSelections', JSON.stringify(recentSelections));
      }
    }



    
  }, 5000);
}

videoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const link = videoLink.value;
  videoPlayer.src = link;
  videoPlayer.currentTime = 0;
  videoPlayer.play();



  // Save recent selection to local storage
  const currentSelection = recentSelections.find((selection) => selection.link === link);
  if (currentSelection) {
    currentSelection.timestamp = 0;
  } else {
    recentSelections.push({
      link: link,
      timestamp: 0
    });
  }
  localStorage.setItem('recentSelections', JSON.stringify(recentSelections));
  displayRecentSelections();
});


var video = videoPlayer;
var lastClickTime = 0;
  
  video.addEventListener('keydown', function(e) {
    //if (e.repeat || video.seeking) return; // ignore repeated key presses and seeking
    if (e.code === 'ArrowRight') { // right arrow key
      video.currentTime -= 45;
    } else if (e.code === 'ArrowLeft') { // left arrow key
      video.currentTime += 45;
      
    }
  }); 
  
  video.addEventListener('dblclick', function(e) {
    var x = e.clientX;
    var currentTime = video.currentTime;
    //if (Math.abs(e.timeStamp - lastClickTime) < 500 || video.seeking) return; // ignore rapid clicks and seeking
    lastClickTime = e.timeStamp;
    if (x < video.offsetWidth / 2) {
      video.currentTime -= 5; // double click on left side of video
    } else {
      video.currentTime += 5; // double click on right side of video
    }
  });

