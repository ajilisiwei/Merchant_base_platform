/**
 * Created by WEI on 10/3/16.
 */



$(function () {
    $('#reset').click(function () {
        $('#userEmail').val('');
        $('#userName').val('');
        $('#password').val('');
        $('#passwordConfirm').val('');
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
        if (!password || !password){
            alert('密码不能为空！');
            return;
        }
        if (password!==passwordConfirm){
            alert('两次输入的密码不一致!');
            return;
        }
        else {
            var user={
                    username:$('#userName').val(),
                    useremail:$('#userEmail').val(),
                    password:$('#password').val(),
            };
            $.ajax({
                type:'post',
                url:'/user/sign_up',
                data:{user:JSON.stringify(user)},
                cache:false,
                dataType:'json',
                timeout:500,
                success:function (data) {
                    if (data.userNameExist='true'){
                        $('#warnAlert').modal({keyboard:true});
                        return;
                    }
                    if (data.success=='true'){
                        $('#successAlert').modal({keyboard:true});
                        return;
                    }
                    else {
                        alert('注册失败');
                    }
                }
            });
        }
    });

    $('#goLogin').click(function () {
        location.href='/user/login?userName='+$('#userName').val();
    });

    $('#goLoginForWarn').click(function () {
        location.href='/user/login?userName='+$('#userName').val();
    });
});


