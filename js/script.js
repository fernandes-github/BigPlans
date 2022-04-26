$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('.menubar li a').click(function(e) {

        $('.menubar li').removeClass('active');

        var $parent = $(this).parent();
        $parent.hover();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
    
    $('#datepicker').datepicker({autoclose: true, format: 'dd/mm/yyyy',}).on('changeDate', function(e){
        $('#datepicker input').css('color', '#ff2469');
    });

    if(!Modernizr.touch){
        $('ul.nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true);
          $(this).addClass('open');
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true);
          $(this).removeClass('open');
        });
    }

    $('select').on('select2:select', function (evt) {
      $(this).next().find('.select2-selection__rendered').css('color', '#ff2469');
    });

    $('.like-counter').click(function(evt){4
        evt.preventDefault();
        var count = +$('.like-count').text();
        count++
        if(!$('.like-count').parent().hasClass('liked'))
            $('.like-count').text(count).parent().addClass('liked')
    })

    $('.reviews-open,.ideas-open').click(function(evt){
        evt.preventDefault();
        var tabId = $(this).attr('data-href');
        $('[href="'+tabId+'"').click();
        $('html,body').animate({scrollTop: $(tabId).offset().top})
    });

    $('select').select2({
        minimumResultsForSearch: Infinity
    });

    $('.quote-btn-top').click(function(){
        $(this).hide()
    }).click()

    $('.quote-btn-bottom').click(function(){
        setTimeout(function(){ $('.quote-btn-top').show() }, 50 )
    })

    $('.fileupload > div').click(function(){
        $('#choose-file').click();      
    });

    $('#choose-file').change(function(e){
        $('p.no-file-selected').text(e.target.files[0].name)
    })

    $('.share-icons ul li a').click(function(evt){
        evt.preventDefault();
    });

    $('#datepicker input').click(function(){
        $(this).parent().addClass('focus')
    }).blur(function(){
        $(this).parent().removeClass('focus')
    });

    var $myGroup = $('#mobile-collapsibl');
    $myGroup.on('show.bs.collapse','.collapse', function() {
        $myGroup.find('.collapse.in').collapse('hide');
    });
    
    /*sticky header on scroll*/

    $(window).scroll(function(){
        $x=parseInt($(".top-black-header").height()+$(".bg-img").height());
        if($(window).scrollTop()>$x){
            $('.search-row').addClass('navbar-fixed-top');
        }
        else{
            $('.search-row').removeClass('navbar-fixed-top');
        }
    });

    $('#listing-tabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    $('.form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    $("#sendEnquiryForm").validate({
            rules: {
                name:"required",
                title:"required",
                message:"required",
                contact: {
                    required: true,
                    number: true
                },
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name:"Your name is required. ",
                contact: {
                    required: "Contact No. is required. ",
                    number: "Please enter valid Contact No.",
                },
                email: {
                    required: "Your email is required. ",
                    email: "Your email must be between 5 and 100 characters long and look like an e-mail address." ,
                },
                title:"Message title is required.",
                message:"Message body is required.",
            },
        errorClass:'errors-spacer',
        validClass:'success',
        errorElement:'div',
      submitHandler: function (form) {
            var $form = $(this);
             $.ajax({
                url: form.action,
                type: form.method,
                data: $(form).serialize(),
                success: function(response) {
                    $('#verified-pro').modal('hide');
                    $('#enquiry-success-message').modal('show');
                }            
            });
        return false;
        }   
     });
    $('#sendEnquiryForm input').on('keyup blur', function () {
        if($('#sendEnquiryForm').valid()) {
           $('#send-enquiry').prop('disabled', false);
        }else {
           $('#send-enquiry').prop('disabled', 'disabled');
        }
    });
});