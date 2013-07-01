var func = function()
{

		$('input:text').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
					$(this).css({'color':'#000'});
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
						$(this).css({'color':'#a3a3a3'});
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });
		
		//
		$(".header").sticky({ topSpacing: 0 });

		//
		$('.all-b').toggle(function(e){
			$(".hide-pos").show();
			$(".all-b a").html('Показать ближайшие мероприятия');},
			function(){
			$(".hide-pos").hide();
			$(".all-b a").html('Показать все мероприятия календаря');
			$(window).scrollTop($(".calendar-box").offset().top -180);
			e.preventDefault();
		});

		$('.all-b2').toggle(function(e){
			$(".hide-pos2").show();
			$(".all-b2 a").html('Показать ближайшие новости');},
			function(){
			$(".hide-pos2").hide();
			$(".all-b2 a").html('Показать все новости');
			$(window).scrollTop($(".news-box").offset().top -180);
			e.preventDefault();
		});
		
		//
		$('.subs-box span').toggle(function(e){
			$(this).hide();
			$(".subs-form").show();},
			function(){
			$(this).show();
			$(".subs-form").hide();
			e.preventDefault();
		});

		//
		$('.partner-box .title a').live("click", function(e) {
			e.preventDefault();
			$(this).parent().find('span').replaceWith(function(index, oldHTML){
				return $('<a href="#"></a>').html(oldHTML);
			});
			$(this).replaceWith(function(index, oldHTML){
				return $('<span></span>').html(oldHTML);
			});
		});
		

			$(".insp").hide();
			$('.partner-box .title').click(function(e) {
			e.preventDefault();
			$("div.sp").slideToggle("fast");
			$("div.insp").slideToggle("fast");
		});
		

		//
		$("a.ancLinks").click(function (e) {
			e.preventDefault();
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top - 180;
			$(this).siblings("li").removeClass("current").parents('li').toggleClass("current");
      if($.browser.safari){
        $('body').animate( { scrollTop: destination }, 1100 );
      }else{
        $('html').animate( { scrollTop: destination }, 1100 );
      }
    });

		// обработка скроллинга
     $(window).bind('load resize scroll', function() {
		if ($('body').length == 1) {
			var curScroll = $(window).scrollTop();
			if (!$('body').data('scrollAnimation')) {
				if (curScroll < $('#goTwo').offset().top - 180) {
					$('.mmenu li').removeClass('current');
					$('.about').addClass('current');
				} else if (curScroll < $('#goThree').offset().top - 180) {
					$('.mmenu li').removeClass('current');
					$('.calendar').addClass('current');
				} else if (curScroll < $('#goFour').offset().top - 180) {
					$('.mmenu li').removeClass('current');
					$('.partner').addClass('current');
				} else if (curScroll < $('#goFive').offset().top - 180) {
					$('.mmenu li').removeClass('current');
					$('.news').addClass('current');
				}
			}
			if ($(window).scrollTop() == $(document).height() - $(window).height()) {
				$('.mmenu li').removeClass('current');
				$('.contact').addClass('current');
			}
		}
    });

		// disabled link - потом удалить
		$(".help a, .pos01 a, .pos02 a, .pos03 a, .partner-inner a").click(function(e){
			e.preventDefault();
		});

		// ttip
		$("a.ttip").easyTooltip();


		//
		$(".calendar-inner table").click(function(e){
			$(this).next("div.drop").slideToggle("slow")
			.siblings("div.drop:visible").slideUp("slow");
			$(this).toggleClass("active");
			$(this).siblings("table").removeClass("active");
			e.preventDefault();
		});

		//
		$('ul.tabs').delegate('li:not(.current)', 'click', function(e) {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.drop').find('div.tbox').hide().eq($(this).index()).fadeIn(150);
			e.preventDefault();
		});
		
		//
		$(".event2_1").click(function(e){
		$(".event2").find('table').toggleClass("active");
		  $("div.drop").eq(1).show();
			e.preventDefault();
		});
		

		//
		$(".news-inner table").click(function(e){
			$(this).next("div.news-full").slideToggle("slow")
			.siblings("div.news-full:visible").slideUp("slow");
			$(this).toggleClass("active");
			$(this).siblings("table").removeClass("active");
			e.preventDefault();
		});
		
		//	
		$('.fancybox').fancybox();
		
		$('.fancybox-gal').fancybox({
				wrapCSS    : 'fancybox-custom',
				helpers: {
					title : {
						type : 'inside'
					}
				}
		});
		
		$('.fancybox-reg').fancybox({
				wrapCSS    : 'fancybox-regbox',
				helpers: {
					title : {}
				}
		});
		
		$('.fancybox-privacy').fancybox();
		
		//
		 $(".checkboxclass").click(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("labelselected");
        }else{
            $(this).next("label").removeClass("labelselected");
        }
    });
		

};

$(func);

