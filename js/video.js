const video =
    document.getElementById("birthdayVideo");

if(video){

    video.addEventListener("ended",()=>{



        document
            .querySelector(".video-wrapper")
            .appendChild(message);

    });

}