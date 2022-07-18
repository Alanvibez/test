$(document).ready(function() {
    
    /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
    $('#send').click(function () {
        // собираем данные с формы
        let user_name = $('#name').val();
        let user_email = $('#last_name').val();
        let user_phone  = $('#mail').val();
        let user_nation  = $('#nation').val();
        let user_gender  = $('#gender').val();
        let user_password = $('#con_pass').val();

        if(user_name.length==0){
          $('#name').val("hello").css({'font-size':'14px', 'color':'gray'})
          setTimeout(function(){
            $('#name').val();
          },1000);
          return false;
        }

        else if(user_email.length==0){
          $('#user_email').css('border-bottom','red');
          setTimeout(function(){
            $('#user_email').removeClass('bounce');
          },1000);
          return false;
        }
        
        else if(user_phone.length==0){
          $('#user_phone').addClass('bounce');
          setTimeout(function(){
            $('#user_phone').removeClass('bounce');
          },1000);
          return false;
        }

        // отправляем данные
        $.ajax({
            url: "contact.php",
            type: "post",
            data: {
                "name": user_name,
                "email": user_email,
                "phone": user_phone,
                "message": user_message
            },
            success: function (result) {
                /* В случае удачной обработки и отправки выполнится следующий код*/
                $('#user_name').val('');
                $('#phone').val('');
                $('#user_email').val('');
                $('#user_message').val('');
                $('.modal').css("display","block")
                $('#send').prop('disabled',true)
            }
        });
    });
})