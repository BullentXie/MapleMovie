$(function() {
    getMovId();
});

function getMovId() {
    var movId = decodeURI(window.location.href).split('?')[1];
    movId = parseInt(movId);
    // console.log(movId);
    return movId;
}

$(document).ready(function(){
    var mid = getMovId();
    console.log(mid);
    var allMovId = {
        'mid': mid
    }
    console.log("allMovId=");
    console.log(allMovId);
    
    //从后端获取json数据
    let allMovies;
    function getMovies(callback){
        var data;
        $.ajax({
            type : 'POST',
            url : 'http://localhost:8090/getsinglemovieinfo',
            cache:false,
            async:false,
            data : JSON.stringify(allMovId),
            contentType : 'application/json',
            dataType : 'json',
            success : function(data) {
                console.log("----------- success-------------");
                data = data.res;
                console.log('data has load！');
                console.log(data);
                callback(data);
            },
            error : function(data) {       
            },
            dataType : 'json',   
        });
    }
    getMovies(function(data){
        console.log("1111")
        console.log(data)
        allMovies = data;
        console.log(allMovies)
    });
    console.log("2222");
    console.log(allMovies.name);
    document.getElementById("mov-dti-name").innerHTML = allMovies.name;
    document.getElementById("mov-dti-actors").innerHTML = "主演："+allMovies.actors;
    document.getElementById("mov-dti-summary").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+allMovies.summary;
    document.getElementById("mov-dti-pic").src = allMovies.img;
})