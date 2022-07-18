$(".btn").attr("disabled", "disabled");
$("#con_pass").prop("disabled", true);


$("#mail").on("keyup", function () {
    var mail = $("#mail").val();
    if (mail.length > 0 && mail == "alice.miller@yahoo.com")
        $(".mail svg").css("opacity", "1");
    else
        $(".mail svg").css("opacity", "0");


});



$("#pass").on('keyup', function () {

    var validated = true;
    if (this.value.length < 8)
        validated = false;
    if (!/\d/.test(this.value)) 
        validated = false;
    if (!/[a-z]/.test(this.value))
        validated = false;
    if (!/[A-Z]/.test(this.value))
        validated = false;
    if (/[^0-9a-zA-Z]/.test(this.value))
        validated = false;


    if (validated == false)
        $('.password div').css("opacity", "1");
        $("#pass").css("border-bottom", "1px solid red");
        $("#con_pass").prop("disabled", true);


    if (validated == true) {
        $('#pass').css("border-bottom", "1px solid green");
        $('.password div').css("opacity", "0");
        $("#con_pass").prop("disabled", false);

    };

});

$("#con_pass").on("keyup", function () {

    var pass = $("#pass").val(); // Получаем содержимое 1-го поля
    var con_pass = $(this).val(); // Получаем содержимое 2-го поля
    if (pass != con_pass) { // Условие, если поля не совпадают

        $(".btn").attr("disabled", "disabled");
        $("#con_pass").css("border-bottom", "1px solid red");
        $("#pass").css("border-bottom", "1px solid #7C7C7C");
        

    } else { // Условие, если поля совпадают

        $(".btn").removeAttr("disabled"); // Разрешаем отправку формы
        $("#con_pass").css("border-bottom", "1px solid green"); // Скрываем сообщение
        $("#pass").css("border-bottom", "1px solid green"); // Скрываем сообщение

    }
});



$(document).ready(function () {

    /*ПРОВЕРЯЕМ НАЖАТА ЛИ КНОПКА ОТПРАВКИ*/
    $('#send').click(function () {
        // собираем данные с формы
        let user_name = $('#name').val();
        let user_lname = $('#last_name').val();
        let user_mail = $('#mail').val();
        let user_nation = $('#nation').val();
        let user_gender = $('#gender').val();

        if (user_name.length == 0) {
            $('#name').css('border-bottom', '1px solid red')
            setTimeout(function () {
                $('#name').css('border-bottom', '1px solid #F2F2F2');
            }, 1000);
            return false;
        } 
           
        else if (user_lname.length == 0) {
            $('#last_name').css('border-bottom', '1px solid red');
            setTimeout(function () {
                $('#last_name').css('border-bottom', '1px solid #F2F2F2');
            }, 1000);
            return false;
        } 
        
        else if (user_mail.length == 0 || user_mail !== "alice.miller@yahoo.com") {
            $('#mail').css({'border-bottom': '1px solid red',"color":"red"});
            setTimeout(function () {
                $('#mail').css({'border-bottom': '1px solid #F2F2F2',"color":"#111111"});
            }, 1000);
            return false;
        }

        // отправляем данные
        $.ajax({
            url: "contact.php",
            type: "post",
            data: {
                "name": user_name,
                "lname": user_lname,
                "mail": user_mail,
                "nation": user_nation,
                "gender": user_gender  
            },
            success: function (result) {
                $(".main").css("display","none");
                $(".complete").css("display","flex");
                $('#name').val('');
                $('#last_name').val('');
                $('#mail').val('');
                $('#pass').val('');
                $('#con_pass').val('');

            }
        });
    });
})