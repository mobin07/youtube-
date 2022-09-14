//  GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY] HTTP/1.1 -->
//  AIzaSyDFnBC158UUhoJ8_RNja9CDUGNoyzaholw
const API='AIzaSyDFnBC158UUhoJ8_RNja9CDUGNoyzaholw';

const searchVideos=async()=>{
    try{
        const q=document.getElementById('query').value;
        const res=await fetch(` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`);
        const data=await res.json();
        console.log(data);
        append(data.items);

    }catch(err){
        console.log(err);
    }


};

const append=(videos)=>{
    let show_videos=document.getElementById('show_movies');
    show_videos.innerHTML=null;
    videos.forEach(({id:{videoId},snippet:{ title } })=>{
        let div= document.createElement('div');
        let iframe=document.createElement('iframe');
        iframe.src=`https://www.youtube.com/embed/${videoId}`;
        iframe.width='100%';
        iframe.height='90%';
        iframe.allow='fullscreen';
        let name=document.createElement('h5');
        name.innerText=title;

        div.append(iframe,name);

        let data={
            title,
            videoId
        }  
        //this is an object having both keys and value same
        div.onclick=()=>{
            showVideo(data)
        }
        show_videos.append(div);            


    })
}

const showVideo=(x) =>{
    window.location.href="video.html";
    localStorage.setItem("video",JSON.stringify(x))
}