function downloadSong() {
    const link = document.getElementById("songLink").value;
    const result = document.getElementById("result");

    if (link === "") {
        alert("❌ Please enter Spotify song link!");
        return;
    }

    result.innerHTML = "⏳ Fetching download link...";

    fetch("https://spotify-downloader-api.p.rapidapi.com/download", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "ccd86e2305msh511cd4a40db839bp14911fjsn20a0dabdbe26",
            "X-RapidAPI-Host": "spotify-downloader-api.p.rapidapi.com"
        },
        body: JSON.stringify({
            url: link
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.download_url) {
            result.innerHTML = `<a href="${data.download_url}" target="_blank">⬇ Click to Download</a>`;
            alert("✅ Download link generated!");
        } else {
            alert("❌ Unable to download this song.");
        }
    })
    .catch(error => {
        alert("❌ Error occurred!");
        console.error(error);
    });
}
