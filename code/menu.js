var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//----------DHTML Menu Created using AllWebMenus PRO ver 4.2-#654---------------
//C:\Documents and Settings\nathan\My Documents\work\truck\menu.awm
var awmMenuName='menu';
var awmLibraryBuild=654;
var awmLibraryPath='/../code';
var awmImagesPath='/../images/menu_images';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmAltUrl!='' && !awmSupported) window.location.replace(awmAltUrl);
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1)));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","&#39;");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmUseTrs=0;
var awmSepr=["0","","",""];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["festival.png",197,55,"festival_over.png",197,55,"about_over.gif",305,55,"information.gif",305,45,"information_over.gif",305,45,"map.gif",305,34,"map_over.gif",305,34,"stalls.gif",305,42,"stalls_over.gif",305,42,"stages.gif",305,44,"stages_over.gif",305,44,"trees.gif",305,35,"trees_over.gif",305,35,"label.png",197,36,"label_over.png",197,36,"aboutlabel_over.gif",174,36,"releases.gif",174,43,"releases_over.gif",174,43,"artists.gif",174,33,"artists_over.gif",174,33,"tourdates.gif",174,43,"tourdates_over.gif",174,43,"videos.gif",174,37,"videos_over.gif",174,37,"photos.gif",174,46,"photos_over.gif",174,46,"foundation.png",197,43,"foundation_over.png",197,43,"aboutfoundation_over.gif",183,43,"projects.gif",183,38,"projects_over.gif",183,38,"charities.gif",183,39,"charities_over.gif",183,39,"shop.png",197,42,"shop_over.png",197,42,"merchandise_over.gif",272,36,"downloads.gif",272,29,"downloads_over.gif",272,29,"tickets.gif",272,29,"tickets_over.gif",272,29,"community.png",197,44,"community_over.png",197,44,"studio.png",197,45,"studio_over.png",197,45,"recording_over.gif",224,45,"illustration.gif",224,35,"illustration_over.gif",224,35,"photography.gif",224,54,"photography_over.gif",224,54,"contact.png",197,53,"contact_over.png",197,53];
awmCreateCSS(0,1,0,n,n,n,n,n,'none',0,'#000000',0,0);
awmCreateCSS(1,2,0,'#000000',n,n,'14px sans-serif',n,'none',0,'#000000','0px 0px 0px 0',1);
awmCreateCSS(0,2,0,'#FFFFFF',n,n,'14px sans-serif',n,'none',0,'#000000','0px 0px 0px 0',1);
awmCreateCSS(1,2,1,'#000000',n,n,'14px sans-serif',n,'none',0,'#000000','0px 0px 0px 0',1);
awmCreateCSS(0,2,1,'#FFFFFF',n,n,'14px sans-serif',n,'none',0,'#000000','0px 0px 0px 0',1);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,10,10,0,0,0,0,1,0,n,n,100,1,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"","","","",0,1,1,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,n,n,n,0,0,0,0);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,n,n,100,0,2,0);
it=s1.addItemWithImages(3,4,4,"","","","",2,2,2,3,3,3,n,n,n,"../pages.aspx?PageId=246",n,n,n,"../pages.aspx?PageId=246",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",3,4,4,3,3,3,n,n,n,"../pages.aspx?PageId=247",n,n,n,"../pages.aspx?PageId=247",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",5,6,6,3,3,3,n,n,n,"../pages.aspx?PageId=248",n,n,n,"../pages.aspx?PageId=248",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",7,8,8,3,3,3,n,n,n,"../pages.aspx?PageId=249",n,n,n,"../pages.aspx?PageId=249",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",9,10,10,3,3,3,n,n,n,"../pages.aspx?PageId=250",n,n,n,"../pages.aspx?PageId=250",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",11,12,12,3,3,3,n,n,n,"http://www.twothousandtreesfestival.co.uk/",n,n,n,"http://www.twothousandtreesfestival.co.uk/","new",0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"","","","",13,14,14,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,n,n,n,0,0,0,0);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,n,n,100,0,1,0);
it=s1.addItemWithImages(3,4,4,"","","","",15,15,15,3,3,3,n,n,n,"../pages.aspx?PageId=252",n,n,n,"../pages.aspx?PageId=252",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",16,17,17,3,3,3,n,n,n,"../pages.aspx?PageId=253",n,n,n,"../pages.aspx?PageId=253",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",18,19,19,3,3,3,n,n,n,"../pages.aspx?PageId=254",n,n,n,"../pages.aspx?PageId=254",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",20,21,21,3,3,3,n,n,n,"../pages.aspx?PageId=255",n,n,n,"../pages.aspx?PageId=255",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",22,23,23,3,3,3,n,n,n,"../pages.aspx?PageId=257",n,n,n,"../pages.aspx?PageId=257",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",24,25,25,3,3,3,n,n,n,"../pages.aspx?PageId=258",n,n,n,"../pages.aspx?PageId=258",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"","","","",26,27,27,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,n,n,n,0,0,0,0);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,n,n,100,0,3,0);
it=s1.addItemWithImages(3,4,4,"","","","",28,28,28,3,3,3,n,n,n,"../pages.aspx?PageId=259",n,n,n,"../pages.aspx?PageId=259",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",29,30,30,3,3,3,n,n,n,"../pages.aspx?PageId=260",n,n,n,"../pages.aspx?PageId=260",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",31,32,32,3,3,3,n,n,n,"../pages.aspx?PageId=261",n,n,n,"../pages.aspx?PageId=261",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"","","","",33,34,34,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,n,n,n,0,0,0,0);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,n,n,100,0,4,0);
it=s1.addItemWithImages(3,4,4,"","","","",35,35,35,3,3,3,n,n,n,"http://www.backstreet-merch.com/stores/truck/",n,n,n,"http://www.backstreet-merch.com/stores/truck/","new",0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",36,37,37,3,3,3,n,n,n,"http://www.7digital.com/stores/default.aspx?shop=766",n,n,n,"http://www.7digital.com/stores/default.aspx?shop=766","new",0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",38,39,39,3,3,3,n,n,n,"../pages.aspx?PageId=265",n,n,n,"../pages.aspx?PageId=265",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"","","","",40,41,41,3,3,3,n,n,n,"/forum/",n,n,n,"/forum/",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"","","","",42,43,43,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,n,n,n,0,0,0,0);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,n,n,100,0,5,0);
it=s1.addItemWithImages(3,4,4,"","","","",44,44,44,3,3,3,n,n,n,"../pages.aspx?PageId=268",n,n,n,"../pages.aspx?PageId=268",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",45,46,46,3,3,3,n,n,n,"../pages.aspx?PageId=269",n,n,n,"../pages.aspx?PageId=269",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s1.addItemWithImages(3,4,4,"","","","",47,48,48,3,3,3,n,n,n,"../pages.aspx?PageId=270",n,n,n,"../pages.aspx?PageId=270",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
it=s0.addItemWithImages(1,2,2,"","","","",49,50,50,3,3,3,n,n,n,"../pages.aspx?PageId=244",n,n,n,"../pages.aspx?PageId=244",n,0,0,2,n,n,n,n,n,n,0,0,0,0);
s0.pm.buildMenu();
}}

}