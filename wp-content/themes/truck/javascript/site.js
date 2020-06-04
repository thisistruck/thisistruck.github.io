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

$.truck = {
	init: function(){
		this.navigation.init();
		this.twitter.latest();
	},
	cufons: function(){
		Cufon.replace('#nav-primary a',{hover: true})('#nav-footer a',{hover: true})('h1',{hover: true})('h2',{hover: true})('h3',{hover: true})('h4',{hover: true})('h5',{hover: true});
	},
	navigation: {
		init: function(){
			$('#nav-primary ul li, #nav-footer ul li').last().css('margin-right', '0px');
			$('#nav-primary ul li ul li:last-child').css('margin-bottom', '0px');
			this.topnav();
		},
		topnav: function(){
			jQuery("#nav-primary ul li").each(function(){
				if(jQuery(this).find(".sub-menu").length > 0) {
					jQuery(this).find("a:first").addClass('parent');
				}
			});
			jQuery("#nav-primary a.parent").live('click', function(e) { e.preventDefault(); });
			$("#nav-primary ul").superfish({ 
			    delay:       1000,                            // one second delay on mouseout 
			    animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
			    speed:       'fast',                          // faster animation speed 
			    autoArrows:  false,                           // disable generation of arrow mark-up 
			    dropShadows: false                            // disable drop shadows 
			}); 
			
			$('#nav-primary ul li ul').each(function(){
				$(this).prepend('<div class="nav-arrow"></div>');
			});
		},
		bottomnav: function(){
		
		}
	},
	twitter: {
		latest: function(){
			$.jTwitter('truckfestival', function(data){
				$(".latest-tweet").html(data[0].text);
				$(".latest-tweet").fadeIn();
			});	
		}
	}
}

$.truck.cufons();
$(document).ready(function(){
	$.truck.init();
});

}