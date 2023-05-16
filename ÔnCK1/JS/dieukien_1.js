let stt = 1;

function checkMa() {
    var ma = document.getElementById('txtma').value;
    var check_ma = document.getElementById('error_ma');
    var regex_ma = /^(BN-)\d{5}$/;

    if (ma == '' || ma == null)
        check_ma.innerHTML = "Không được để rỗng";
    else if (!regex_ma.test(ma))
        check_ma.innerHTML = "Mã phải có định dạng BN-YYYYY";
    else {
        check_ma.innerHTML = "";
        return ma;
    }
}
function checkMK() {
    var mk = document.getElementById('txtpass').value;
    var check_pass = document.getElementById('error_pass');
    var regex_pass = /^.{6,}$/;

    if (mk == '' || mk == null)
        check_pass.innerHTML = "Không được để rỗng";
    else if (!regex_pass.test(mk))
        check_pass.innerHTML = "Mật khẩu phải từ 6 kí tự trở lên";
    else {
        check_pass.innerHTML = "";
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
        check_ngay.innerHTML = "Ngày nhập vào phải sau ngày hiện tại";
    else {
        check_ngay.innerHTML = "";
        return ngay;
    }
}

function datlich() {
    let ma = document.getElementById('txtma').value;
    let mk = document.getElementById('txtpass').value;
    let ngay = document.getElementById('txtngay').value;

    var phuThu = 0;
    $.each($("input[name='loai']:checked"), function(){
        phuThu += 500000;
    });
    let loaiCK = $('#lstCK option:selected').text();

    if (checkMa() && checkMK() && checkNgay()) {
        let trnew = `<tr>
            <td>${stt++}</td>
            <td>${ma}</td>
            <td>${mk}</td>
            <td>${ngay}</td>
            <td>${phuThu}</td>
            <td>${loaiCK}</td>
        </tr>`

        $('#tblsp').append(trnew);
        // alert('ok');
    }
    else
        alert('Mã, Mật khẩu, ngày phải nhập đúng định dạng');

}

