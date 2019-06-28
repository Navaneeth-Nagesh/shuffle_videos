function shuffle(videos) {
    let video_length = videos.length;
    let temp;
    let index;

    while (video_length > 0) {
        index = Math.floor(Math.random() * video_length);
        video_length--;
        temp = videos[video_length];
        videos[video_length] = videos[index];
        videos[index] = temp;
    }
    
    return videos;
}

const videos = ['hello.mp4', 'world.mp4', 'new.mp4', 'object.mp4', 'cloud.mp4', 'sun.mp4', 'moon.mp4', 'java.mp4', 'script.mp4', 'alphabets.mp4'];
console.log(shuffle(videos));