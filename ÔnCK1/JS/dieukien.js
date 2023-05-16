let stt = 0;
function checkMa() {
    var ma = document.getElementById('txtma').value;
    var check_error_ma = document.getElementById('error_ma');
    var rex = /^(BN)-\d{5}$/;
    if (ma == '' || ma == null) {
        check_error_ma.innerHTML = "Không được để rỗng";
    }
    else if (!rex.test(ma)) {
        check_error_ma.innerHTML = "Mã có định dạng BN-YYYYY";
    }
    else {
        check_error_ma.innerHTML = "";
        return ma;
    }
}
function checkMatKhau() {
    var mk = document.getElementById('txtpass').value;
    var check_pass = document.getElementById('error_pass');
    var rex_pass = /^.{6,}$/;
    if (mk == '' || mk == null)
        check_pass.innerHTML = 'Không được để rỗng';
    else if (!rex_pass.test(mk))
        check_pass.innerHTML = 'Mật khẩu phải có 6 kí tự trở lên';
    else {
        check_pass.innerHTML = '';
        return mk;
    }
}
function checkNgay() {
    var ngay = document.getElementById('txtngay').value;
    var check_ngay = document.getElementById('error_ngay');
    var today = new Date();
    var inputDate = new Date(ngay);
    if (ngay == '' || ngay == null)
        check_ngay.innerHTML = "Không được để rỗng";
    else if (inputDate < today)
        check_ngay.innerHTML = "Ngày khám phải sau ngày hiện tại";
    else {
        check_ngay.innerHTML = "";
        return ngay;
    }
}
function DatLich() {
    let ma = document.getElementById('txtma').value;
    let mk = document.getElementById('txtpass').value;
    let ngay = document.getElementById('txtngay').value;
    let loai = [] ;
    var phuThu = 0;
    $.each($("input[name='loai']:checked"),function(){
        // loai.push($(this).value());
        phuThu += 500000;
    });

    let loaiCK = $('#lstChuyenKhoa option:selected').text();
    if (checkMa() && checkMatKhau() && checkNgay()) {
        let trnew = `<tr>
        <td>${stt++}</td>
        <td>${ma}</td>
        <td>${mk}</td>
        <td>${ngay}</td>
        <td>${phuThu}</td>
        <td>${loaiCK}</td>
    </tr>`
        $('#tblsp').append(trnew);
    }
    else
        alert('Không')
}
    