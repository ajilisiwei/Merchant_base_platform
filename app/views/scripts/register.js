/**
 * Created by WEI on 10/3/16.
 */

$('#reset').click(function () {
    $('#userEmail').val(' ');
    $('#userName').val(' ');
    $('#password').val(' ');
    $('#passwordconfirm').val(' ');
});

$('#register').click(function () {
    var password=$('#password').val();
    var passwordconfirm=$('#passwordconfirm').val();
    alert(password+passwordconfirm);
});
