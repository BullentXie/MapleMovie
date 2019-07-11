class MovieBigBoxCard extends React.Component {
    render() {
        let {allMovies} = this.props;
        // let {allMoviesIntro} = this.props;
        return (
            <div className="movie-bigBox">
                {
                    allMovies.map((item, index) => {
                        return <MovieBoxCard allMovies={item} key={index} />
                    })
                }
            </div>
        )
    }
}

class MovieBoxCard extends React.Component {
    constructor(props) {
        super(props);
        this.clickMovBoxFunc = this.clickMovBoxFunc.bind(this);
    }
    clickMovBoxFunc() {
        // window.location.href="./movie-details.html";
        let movies = this.props.allMovies;
        let mov = eval(movies);
        let movId = mov.mid;
        // let intro = mov.movIntro;
        
        var url="./movie-details.html"+"?"+movId;
        window.location.assign(encodeURI(url));
    }
    render() {
        return (
            <div className="movie-box" onClick={this.clickMovBoxFunc}>
                <img className="movie-box-pic" src={this.props.allMovies.img} />
                <div className="video-card-title">
                    <div className="title">{this.props.allMovies.name}</div>
                </div>
                <div className="video-bg">【{this.props.allMovies.name}】<h6>电影类型：{this.props.allMovies.type}</h6><p>{this.props.allMovies.summary}</p></div>
            </div>
        )
    }
}

$(document).ready(function(){
    // var uid = decodeURI(window.location.href).split('?')[1];
    // var input = {
    //     "uid": uid
    // }
    
    // console.log("alluid=");
    // // console.log(allUserId);
    
    // console.log(input);
    //访问后台服务器
    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "http://localhost:8090/getmovieinfo",
    //     "method": "POST",
    //     "headers": {
    //         "Content-Type": "application/json",
    //         "cache-control": "no-cache",
    //     },
    //     "processData": false,
    //     "data": "{\n\t\"uid\":\"{uid}\"}".format(input)
    // }
    // console.log(uid);
        
    // $.ajax(settings).done(function (response) {
    //     console.log(settings.data);
    //     console.log(response);
    //     console.log("2");
    //     var movDetails = {
    //         movRes: response.mid,
    //         movName: response.name,
    //         movDetails: response.summary,
    //         movPic: response.img
    //     };
    //     console.log(movDetails);
    //     var userinfo = '{\"uid\":{uid},\"password\":{password}}'.format(res);
    //     sessionStorage.setItem("userinfo",userinfo);
    //     console.log(res.id);
    //     var url="./user.html"+"?"+res.id;
    //     window.location.assign(encodeURI(url));
    //     // location.href="http://localhost:8080/Maple-frontend/user.html";
    // });


    // 从后端取得相关数据
    // String.prototype.format = function(args) {
    //     var result = this;
    //     if (arguments.length > 0) {
    //         if (arguments.length == 1 && typeof (args) == "object") {
    //             for (var key in args) {
    //                 if(args[key]!=undefined){
    //                     var reg = new RegExp("({" + key + "})", "g");
    //                     result = result.replace(reg, args[key]);
    //                 }
    //             }
    //         }
    //         else {
    //             for (var i = 0; i < arguments.length; i++) {
    //                 if (arguments[i] != undefined) {
    //                     var reg= new RegExp("({)" + i + "(})", "g");
    //                     result = result.replace(reg, arguments[i]);
    //                 }
    //             }
    //         }
    //     }
    //     return result;
    // }

    

})

//获取uid
var uid = decodeURI(window.location.href).split('?')[1];
console.log(uid);
// let allMovies;
var allUserId = {
    'uid': uid
}
console.log("alluserid=");
console.log(allUserId);

//从后端获取json数据
let allMovies;
function getMovies(callback){
    var data;
    $.ajax({
        type : 'POST',
        url : 'http://localhost:8090/getmovieinfo',
        cache:false,
        async:false,
        data : JSON.stringify(allUserId),
        contentType : 'application/json',
        dataType : 'json',
        success : function(data) {
            console.log("----------- success-------------");
            data = data.res;
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
console.log("2222")
console.log(allMovies)
console.log("mov1");
console.log(allMovies);

ReactDOM.render(<MovieBigBoxCard allMovies={allMovies} />, document.getElementById("movie-bigBox"));



// $.ajax({
//     type : 'POST',
//     url : 'http://localhost:8090/getmovieinfo',
//     cache:false,
//     async:false,
//     data : JSON.stringify(allUserId),
//     contentType : 'application/json',
//     dataType : 'json',
//     success : function(data) {
//         console.log("----------- success-------------");
//         // var allMovies = $.parseJSON(data);
//         // console.log(allMovies);
//         allMovies = data.res;
//         // console.log(allMovies.img);
//         // console.log(allMovies);
//         // getMovies(allMovies);
//         // ReactDOM.render(<MovieBigBoxCard allMovies={allMovies} />, document.getElementById("movie-bigBox"));
//     },
//     error : function(data) {
            
//     },
//     dataType : 'json',
        
// });

// function getMovies(allMovies) {
//     ReactDOM.render(<MovieBigBoxCard allMovies={allMovies} />, document.getElementById("movie-bigBox"));
// }

	
// let allMovies = [
//     {'mid':'1', 'name': '流浪地球', 'summary': '流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0流浪地球简介0', 'img': './static/img/index/recommend-movie/rec-mov-1.jpg'},
//     {'mid':'2', 'name': '蜘蛛侠', 'summary': '流浪地球简介1', 'img': './static/img/index/recommend-movie/rec-mov-2.jpg'},
//     {'mid':'3', 'name': '巫师的世界', 'summary': '流浪地球简介2', 'img': './static/img/index/recommend-movie/rec-mov-3.jpg'},
//     {'mid':'4', 'name': '复仇者联盟', 'summary': '流浪地球简介3', 'img': './static/img/index/recommend-movie/rec-mov-4.jpg'},
//     {'mid':'5', 'name': '黑寡妇', 'summary': '流浪地球简介4', 'img': './static/img/index/recommend-movie/rec-mov-5.jpg'},
// ];
// let allMoviesIntro = ['流浪地球简介','蜘蛛侠3简介','惊奇队长简介','4','5'];

// ReactDOM.render(<MovieBigBoxCard allMovies={allMovies} />, document.getElementById("movie-bigBox"));