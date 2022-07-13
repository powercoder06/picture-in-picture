const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt tto sleect media stream, pass to video element, then play

async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch(error) {
        // Catch the error
        console.log('whoops,error here', error);
    }
}

button.addEventListener('click', async () => {
    // disable button 
    button.disabled = true;
    // Start PIP
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});
// on load

selectMediaStream();
