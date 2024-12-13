
// switch video in video section
export function switchVideo(url) {
    const player = document.getElementById('videoPlayer');

    // Avoiding iframe from reloading the content even though nothing changed.
    if (player.src !== url) {
        player.src = url;
    }
}