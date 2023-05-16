function checkSoSerial() {
    var so = document.getElementById('txt_so').value;
    var check_so = document.getElementById('error_so');
    var regex_so = /^([A-Z_0-9]){6,}$/;
    if (so == '' || so == null) {
        check_so.innerHTML = 'Số serial in trên kiện hàng nếu có';
        return so;
    }
    else if (!regex_so.test(so))
        check_so.innerHTML = 'Số serial có thể gồm các ký tự chữ cái hoa, dấu _ và các ký số; chiều dài ít nhất là 6';
    else {
        check_so.innerHTML = '';
        return so;
    }
}
function checkMoTa() {
    var mota = document.getElementById('txt_mota').value;
    var check_mota = document.getElementById('error_mota');
    if (mota == '' || mota == null) {
        check_mota.innerHTML = 'Không được để trống';
    }
    else {
        check_mota.innerHTML = '';
        return mota;
    }
}
function checkTrongLuong() {
    var trongluong = document.getElementById('txt_kg').value;
    var check_kg = document.getElementById('error_kg');
    if (trongluong == '' || trongluong == null) {
        check_kg.innerHTML = 'Không được để trống';
    }
    else if (isNaN(trongluong)) 
        check_kg.innerHTML = 'Không là số';
    else if (trongluong <= 0)
        check_kg.innerHTML = 'Phải lớn hơn 0';
    else {
        check_kg.innerHTML = '';
        return trongluong;
    }
}
function checkPhiVanChuyen() {
    let phi = 0;
    let trongluong = document.getElementById('txt_kg').value;
    
    if (checkTrongLuong()) {
        if (trongluong >= 1 && trongluong <= 20)
            phi = trongluong * 35000;
        else if (trongluong <= 50)
            phi = trongluong * 30000;
        else 
            phi = trongluong * 15000;
        document.getElementById('txt_phi').value = phi;
    }
    else 
        alert('Kiểm tra lại điều kiện trọng lượng');
}
let stt = 1;
function dathang() {
    let so = document.getElementById('txt_so').value;
    let mota = document.getElementById('txt_mota').value;
    let trongluong = document.getElementById('txt_kg').value;
    let hinhanh = document.getElementById('txt_anh').value;
    let phi = document.getElementById('txt_phi').value;
    if (checkSoSerial() && checkMoTa() && checkTrongLuong()) {
        let trnew = `<tr>
            <td>${stt++}</td>
            <td>${so}</td>
            <td>${mota}</td>
            <td>${hinhanh}</td>
            <td>${trongluong}</td>
            <td>${phi}</td>
        </tr>`

        $('#tblsp').append(trnew);
    }
    else 
        alert("Kiểm tra lại điều kiện");
}