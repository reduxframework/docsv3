/*-----------------------------------------------------------------------------------

 	Shortcode JS - All shortcode jQuery
 
-----------------------------------------------------------------------------------*/

/* ========================================================
 * bootstrap-tab.js v2.0.1
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function( $ ){

  "use strict"

 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function ( element ) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active a').last()[0]

      $this.trigger({
        type: 'show'
      , relatedTarget: previous
      })

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB DATA-API
  * ============ */

  $(function () {
    $('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  })

}( window.jQuery );



/*-----------------------------------------------------------------------------------*/
/*	jQuery Toggles
/*-----------------------------------------------------------------------------------*/	
//Hide (Collapse) the toggle containers on load
	jQuery(".st-toggle-content").hide(); 
	//Switch the "Open" and "Close" state per click
	jQuery(".st-toggle-action").toggle(function(){
		jQuery(this).addClass("active");
		}, function () {
		jQuery(this).removeClass("active");
	});
	//Slide up and down on click
	jQuery(".st-toggle-action").click(function(){
		jQuery(this).next(".st-toggle-content").slideToggle();
	});


/*-----------------------------------------------------------------------------------*/
/*	jQuery Accordion
/*-----------------------------------------------------------------------------------*/	
jQuery(document).ready(function() {
//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
jQuery('.st-accordion-title').click(function() {
//REMOVE THE ON CLASS FROM ALL BUTTONS
jQuery('.st-accordion-title').removeClass('active');
//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
jQuery('.st-accordion-content').slideUp('normal');
//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
if(jQuery(this).next().is(':hidden') == true) {
//ADD THE ON CLASS TO THE BUTTON
jQuery(this).addClass('active');
//OPEN THE SLIDE
jQuery(this).next().slideDown('normal');
}
});
// CLOSES ALL S ON PAGE LOAD
jQuery('.st-accordion-content').hide();



}); 




jQuery(window).load(function() {
  function changeAccordian(hash) {
    var el = jQuery("a[href='"+hash+"']").first();
    el.click();
    jQuery( 'html, body' ).animate( { scrollTop: el.offset().top-40 }, 800 );
  }
  jQuery('.accordianLinks a').click(function() {
    changeAccordian(jQuery(this).attr('href'));
  });
  if ( location.hash && jQuery('.st-accordion-title').length ) {
    changeAccordian(location.hash);
  }
});