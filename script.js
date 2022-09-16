const rating_btns = $('#rating-btns li')
const container = $('.container div')
const btnSubmit = $("#submit-btn")
var rating_value = 0

rating_btns.each(function (index, element) {
    $(element).on('click', function(){
        rating_btns.each(function (index, element) {
            $(element).removeClass();
        });
        $(this).addClass('active')
        rating_value = $(this).val()
    })
});

btnSubmit.on('click', function() {
    container.each(function (index, element) {
        container.remove()
    });
    CreateNewCard()
})

function CreateNewCard(){
    const container = $('.container')
    str = ''
    str += "<div class='thank-container'></div>"
        str += '<div class="img-thanks-container">'
            str += '<img src="img/illustration-thank-you.svg" class="">'
        str += '</div>'    
        str += '<div class="thanks-text">'
            str += `<p>You select ${rating_value} out of 5.</p>`
        str += '</div>'    
        str += '<div class="thank-label">'
            str += '<h1>Thank you.</h1>'    
            str += `<p>We appreciate you taking time for give us a rating. 
                        If you need some more support don't hesitate in get in touch!</p>`    
        str += '</div>'    
    str += '</div>'    
    
    container.append(str)
}
