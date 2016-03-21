(function(){
    
    var $topMenuLinks = $('div.topNav nav.topMenu  ul  li a.menuLink'),
        $studentLink = $('nav.topMenu >ul >li').last(),
        $studentSubMenu = $studentLink.children('ul.sub-menu'),
        $studentSBlinks = $('div.topNav nav.topMenu ul li > ul.sub-menu > li > a'),
        $regLinks = $('nav.registration');
    
    
    $studentSubMenu.hide();
    $topMenuLinks.eq(0).css({
            'color' : '#169E8D',
            backgroundColor : 'black'
        });
    
    $studentLink.on('click', function(event){
        $studentSubMenu.slideToggle(300);
        
        event.preventDefault(); 
    });
    
    
    $studentSBlinks.eq(0).on('click', function(event){
        
        
        event.preventDefault(); 
    });
    
    
    
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
    
    $topMenuLinks.on('click',function(e){
        clearClick();
        $(this).css({
            'color' : '#169E8D',
            backgroundColor : 'black'
        });
        
        e.preventDefault();
    });
    
    $regLinks.on('click',function(){
        clearClick();
        $studentSubMenu.fadeOut(200);
    })
    
})();



