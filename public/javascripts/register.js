/**
 * Created by WEI on 10/3/16.
 */



$(function () {
    $('#reset').click(function () {
        $('#userEmail').empty();
        $('#userName').empty();
        $('#password').empty();
        $('#passwordconfirm').empty();
    });

    $('#register').click(function () {
        var email=$('#userEmail').val();
        var username=$('#userName').val();
        var password=$('#password').val();
        var passwordConfirm=$('#passwordConfirm').val();
        if(!email){
            alert('邮箱不能为空！');
            return;
        }
        if (!username){
            alert('用户名不能为空！');
            return;
        }
        if (password!==passwordConfirm){
            alert('Password Error!');
            return;
        }
        else {
            $.ajax({
                type:'post',
                url:'/user/sign_up',
                data:{username:$('#userName').val(),
                    useremail:$('#userEmail').val(),
                    password:$('#password').val(),
                    passwordconfirm:$('#passwordConfirm').val()},
                cache:false,
                dataType:'json',
                timeout:500,
                success:function (data) {
                    if (data.msg=='true'){
                        $('#successAlert').modal({keyboard:true});
                    }
                }
            });
        }
    });

    $('#goLogin').click(function () {
        location.href='/user/login?userName='+$('#userName').val();
    });
});


