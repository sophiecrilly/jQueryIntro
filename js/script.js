// alert('javascript has loaded');

// $
// jQuery

// $(selector).effect()
            // .action
            // .event


$('#blueBox').hide();

$('#greenBox').click(function(){
    $('#blueBox').show();
})

$('#redBox').click(function(){
    $('#blueBox').hide();
})

$('#modalExample1Button').click(function(){
    // console.log('button has been clicked');
    $('#modalExample1').removeClass('hidden').addClass('flex');
    // $('#modalExample1').addClass('flex');
    $('body').addClass('noScroll');
});

$('#modalExample1Close').click(function(){
    // console.log('close button has been clicked');
    $('#modalExample1').addClass('hidden').removeClass('flex');
    $('body').removeClass('noScroll');
})
