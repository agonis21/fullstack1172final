const User = require('../models/userModel');
const Video = require('../models/videoModel');

exports.getDashboard = async (req, res) => {
    console.log("GET video/dashboard");

    const db_videos = await Video.find();
    
    console.log(req.cookies);

    
    const videos = [
        {
            url: "vZ4PJf04byo",
            uploader: "Ahsem",
            date: "#3"
        }

        
    ];

    db_videos.forEach(function(vid){
        videos.push({
            url: vid.videolink,
            uploader: vid.videouploader,
            title: vid.videotitle,
            date: vid.createdAt 
        });
    });


    res.render("dashboard", {videos});
};

exports.getUploadVideo = async (req, res) => {
    res.render("newvideoupload");
}


exports.postUploadVideo = async (req, res) => {
    console.log("POST videos/new_video");

    //credit: https://blog.devgenius.io/how-to-extract-the-id-of-a-youtube-or-vimeo-url-with-javascript-ad5e2d1049a
    const getYouTubeVideoIdFromUrl = (url) => {
        // Our regex pattern to look for a youTube ID
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        //Match the url with the regex
        const match = url.match(regExp);
        //Return the result
        return match && match[2].length === 11 ? match[2] : undefined;
    };

    const newVideo = new Video({
        videotitle: req.body.videoTitle,
        videolink: getYouTubeVideoIdFromUrl(req.body.videoURL),
        videouploader: req.cookies.userhandle
    });

    const savedVideo = await newVideo.save();
    console.log("Video is saved.");

    res.redirect("dashboard");
}


exports.getAccountInfo = async (req, res) => {
    const user = await User.findOne({
        userhandle: req.cookies.userhandle
    });
    
    //console.log(user);
    res.render("accountinfo", {
        fullname: user.fullname,
        userhandle: user.userhandle,
        userpassword: user.userpassword,
        createdAt: user.createdAt
    });
}

exports.getLogoutRequest = async (req, res) => {
    res.cookie('userhandle', 'none', { maxAge: 86400000, httpOnly: true });

    res.redirect("../..");
}