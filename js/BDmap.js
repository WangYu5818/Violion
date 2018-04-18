var map = new BMap.Map("container");
// 创建地图实例  
var point = new BMap.Point(116.434557,39.864658);
map.centerAndZoom(point, 15);
// 创建点坐标  
map.centerAndZoom(point, 15);
// 初始化地图，设置中心点坐标和地图级别  
// 创建标注
var marker = new BMap.Marker(point);
map.addOverlay(marker);

//移动到新的中心点
// window.setTimeout(function () {
//     map.panTo(new BMap.Point(116.409, 39.918));
// }, 2000);

// 全景
var stCtrl = new BMap.PanoramaControl();
stCtrl.setOffset(new BMap.Size(40, 120));
map.addControl(stCtrl);

map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
// map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());
