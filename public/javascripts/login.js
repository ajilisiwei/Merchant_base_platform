$(function () {
    $('#login').click(function () {
        var username=$('#username').val();
        var password=$('#password').val();
        if (!username){
            alert('请输入用户名或邮箱！'); return;
        }
        if (!password){
            alert('请输入密码！');return;
        }
        $.ajax({
            type:'post',
            url:'/user/sign_in',
            data:{
                username:username,
                password:password
            },
            cache:false,
            dataType:'json',
            timeout:500,
            success:function (data) {
                if (data.msg=='true'){
                     // $('#successedAlert').show();
                     location.href='/';
                }
            }
        });
    });
});