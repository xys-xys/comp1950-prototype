(function(){
    
    var $topMenuLinks = $('div.topNav nav.topMenu  ul  li a.menuLink'),
        $studentLink = $('nav.topMenu >ul >li').last(),
        $studentSubMenu = $studentLink.children('ul.sub-menu'),
        $studentSBlinks = $('div.topNav nav.topMenu ul li > ul.sub-menu > li > a'),
        $regLinks = $('nav.registration'),
        $home = $('body div.mainWrapper .home'),
        $outlines = $('body div.mainWrapper .outlines'),
        $blog = $('body div.mainWrapper .blog'),
        $blogContainer = $('body div.mainWrapper .blog div > object'),

	// Larry Edition
	$mobileMenu = $('#mobile-menu');
    

    
    
    
    init();
    
    
    // INITIALIZATION AND INSTANTIATIONS  
    function init(){
        clearWrapper(); 
        $studentSubMenu.hide();
        $topMenuLinks.eq(0).css({
                'color' : '#169E8D',
                backgroundColor : 'black'
            });
        $home.fadeIn(300); 
    }
    

    
    
    // STUDENT ACCESS SUB-MENU
    $studentSBlinks.eq(0).on('click', function(event){
        
        
        event.preventDefault(); 
    });
    
    
    function clearWrapper(){
        $home.hide();
        $outlines.hide();
        $blog.hide();
        $outlines.find('h3').slideUp(300);
        $blog.find('h3').slideUp(300);

    }
    
    
    // CLEAR TOPNAV MENU LINKS
    function clearClick(){
        
        var itemsLn = $topMenuLinks.length;

        
        for (var i=0;i<itemsLn;i++){
            var index = $(this).index();
            $topMenuLinks.eq(i).css({
                'color' : '#FFF',
                backgroundColor : 'transparent'
            });
        
        }
    }
    
    // TOP MENU CLICK EVENT (GENERAL)
    $topMenuLinks.on('click',function(e){
        clearClick();
        
        $(this).css({
            'color' : '#169E8D',
            backgroundColor : 'black'
        });
        $studentSubMenu.slideUp(300);
        e.preventDefault();
    });
    
    
    // REGISTRATION LINKS CLICK EVENT
    $regLinks.on('click',function(){
        clearClick();
        $studentSubMenu.slideUp(300);

        
    });
    
    // STUDENT ACCESS LINK CLICK EVENT
    // Larry Edition - make it collapse
    $studentLink.on('click', function(event){
	if( $studentSubMenu.css('display')=='none' ){
		$studentSubMenu.slideDown(300);
	}else{
		$studentSubMenu.slideUp(300);
	}        
        event.preventDefault(); 
    });
    
    // HOME
    $topMenuLinks.eq(0).on('click', function(){
        clearWrapper(); 
        $home.fadeIn(300);
    });
    
    // OUTLINE
    $topMenuLinks.eq(1).on('click', function(){
        clearWrapper(); 
        $outlines.fadeIn(300);
        $outlines.find('h3').slideDown(300);
    });
    
    // BLOG
    $topMenuLinks.eq(2).on('click', function(){
        clearWrapper(); 
        $blog.fadeIn(300);
        $blog.find('h3').slideDown(300);
        $blogContainer.fadeIn(300);
    });

    // Larry Edition
    $mobileMenu.on('click',function(){
	$('div.topNav > nav').toggle(0, function(){
		$(this).toggleClass('mobile-down').css('display', '');
	});
    })
    
})();



