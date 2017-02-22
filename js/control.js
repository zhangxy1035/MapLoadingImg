/**
 * Created by cancer on 2017-02-22.
 */
var map = new AMap.Map('container',{
    resizeEnable: true,
    zoom: 10,
    center: [122.75, 40.85]
//    MapStyle:'blue_night'
});
//map.setMapStyle('blue_night');


var infoWindow = new AMap.InfoWindow({offset:new AMap.Pixel(0,-10)});
var marker = new AMap.Marker({
    position: [122.18, 40.65],
    map:map
});
marker.content='Merchant point'+("zhang");
marker.on('click',markerClick);
marker.emit('click',{target:marker});
function markerClick(e){
    infoWindow.setContent(e.target.content);
//    infoWindow.open(map, e.target.getPosition());
    openInfo(e);
}
//在指定位置打开信息窗体
function openInfo(e) {
    //构建信息窗体中显示的内容
    var info = [];
//    info.push("<div><div><img style=\"width:90; height:89;float:left;\" src=\" img\/1.jpg \"/></div> ");
    info.push("<div><div><img style=\"width:90; height:89;float:center;\" src=\" img\/1.jpg \"/></div> ");
//    info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>高德软件</b>");
    info.push("电话 : 010-84107000   邮编 : 100102</div>");
//    info.push("地址 :北京市朝阳区望京阜荣街10号首开广场4层</div></div>");
    infoWindow = new AMap.InfoWindow({
        content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
    });
    infoWindow.open(map, e.target.getPosition());
}
map.setFitView();