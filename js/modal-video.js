document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".video");
    const modal = document.getElementById("modal-container");
    const modalVideo = document.getElementById("modal-video");
    const closeModalButtons = document.querySelectorAll(".close, #modal-container");

    videos.forEach(video => {
        video.addEventListener("click", function() {
            const videoSource = this.getAttribute("data-video");
            modalVideo.src = videoSource;
            modal.style.display = "block";
            modal.setAttribute("aria-hidden", "false");
            modal.focus();
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            if (event.target === modal || event.target.classList.contains("close")) {
                modal.style.display = "none";
                modalVideo.pause();
                modalVideo.removeAttribute('src'); // To stop loading the video
                modal.setAttribute("aria-hidden", "true");
            }
        });
    });

    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
            modalVideo.pause();
            modalVideo.removeAttribute('src'); // To stop loading the video
            modal.setAttribute("aria-hidden", "true");
        }
    });
});