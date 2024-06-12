var numbers = [];

// Gán sự kiện click cho các nút
document.getElementById("addNumber").onclick = addNumber;
document.getElementById("tinhTongSoDuong").onclick = tinhTongSoDuong;
document.getElementById("demSoDuong").onclick = demSoDuong;
document.getElementById("timSoNhoNhat").onclick = timSoNhoNhat;
document.getElementById("timSoDuongNhoNhat").onclick = timSoDuongNhoNhat;
document.getElementById("timSoChan").onclick = timSoChan;
document.getElementById("hoanDoiGiaTri").onclick = hoanDoiGiaTri;
document.getElementById("sapXepMang").onclick = sapXepMang;
document.getElementById("timSoNguyenTo").onclick = timSoNguyenTo;
document.getElementById("demSoNguyen").onclick = demSoNguyen;
document.getElementById("soSanhMang").onclick = soSanhMang;

// Thêm số vào mảng
function addNumber() {
    var input = document.getElementById("numberInput").value;
    if (input.trim() !== "") {
        var newNumbers = input.split(",").map(num => Number(num.trim()));
        var trueNumbers = newNumbers.filter(num => !isNaN(num));
        if (trueNumbers.length > 0) {
            numbers = numbers.concat(trueNumbers);
            document.getElementById("numberInput").value = "";
            displayNumbers();
        } else {
            alert("Vui lòng nhập vào số hợp lệ.");
        }
    } else {
        alert("Vui lòng nhập vào một số.");
    }
}

// Hiển thị mảng số đã nhập
function displayNumbers() {
    var numberDiv = document.getElementById("numberDiv");
    numberDiv.innerHTML = "";
    numbers.forEach(num => {
        var numberSpan = document.createElement("span");
        numberSpan.textContent = num;
        numberSpan.classList.add("number");
        numberDiv.appendChild(numberSpan);
    });
}

// Tính tổng các số dương
function tinhTongSoDuong() {
    var sum = 0;
    for (var num of numbers) {
        if (num > 0) {
            sum += num;
        }
    }
    document.getElementById("result").innerHTML = "Tổng các số dương bằng: " + sum;
    document.getElementById("result").style.display = "block";
}

// Đếm số dương có trong mảng
function demSoDuong() {
    var count = 0;
    for (var num of numbers) {
        if (num > 0) {
            count++;
        }
    }
    document.getElementById("result").innerHTML = "Số lượng số dương có trong mảng là: " + count;
    document.getElementById("result").style.display = "block";
}

// Tìm số nhỏ nhất trong mảng
function timSoNhoNhat() {
    var min = Math.min(...numbers);
    document.getElementById("result").innerHTML = "Số nhỏ nhất trong mảng là: " + min;
    document.getElementById("result").style.display = "block";
}

// Tìm số dương nhỏ nhất
function timSoDuongNhoNhat() {
    var duongNumbers = numbers.filter(num => num > 0);
    var soDuongNhoNhat = duongNumbers.length > 0 ? Math.min(...duongNumbers) : "Không có số dương";
    document.getElementById("result").innerHTML = "Số dương nhỏ nhất trong mảng là: " + soDuongNhoNhat;
    document.getElementById("result").style.display = "block";
}

// Tìm số chẵn cuối cùng trong mảng
function timSoChan() {
    var chanCuoiCung = -1;
    for (var i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            chanCuoiCung = numbers[i];
            break;
        }
    }
    document.getElementById("result").innerHTML = "Số chẵn cuối cùng là: " + chanCuoiCung;
    document.getElementById("result").style.display = "block";
}

// Hoán đổi 2 giá trị trong mảng
function hoanDoiGiaTri() {
    var index1 = Number(document.getElementById("hoanDoiInput1").value) - 1;
    var index2 = Number(document.getElementById("hoanDoiInput2").value) - 1;
    if (!isNaN(index1) && !isNaN(index2) && index1 >= 0 && index2 >= 0 && index1 < numbers.length && index2 < numbers.length) {
        var temp = numbers[index1];
        numbers[index1] = numbers[index2];
        numbers[index2] = temp;
        displayNumbers();
        document.getElementById("result").innerHTML = "Vị trí mảng sau khi hoán đổi: " + numbers.join(", ");
        document.getElementById("result").style.display = "block";
    } else {
        alert("Chỉ số không hợp lệ");
    }
}

// Sắp xếp mảng theo thứ tự tăng dần
function sapXepMang() {
    numbers.sort((a, b) => a - b);
    displayNumbers();
    document.getElementById("result").innerHTML = "Mảng theo thứ tự tăng dần là: " + numbers.join(", ");
    document.getElementById("result").style.display = "block";
}

// Tìm số nguyên tố đầu tiên trong mảng
function timSoNguyenTo() {
    var soNguyenTo = num => {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    var firstNguyenTo = numbers.find(num => soNguyenTo(num));
    document.getElementById("result").innerHTML = "Số nguyên tố đầu tiên trong mảng là: " + (firstNguyenTo !== undefined ? firstNguyenTo : -1);
    document.getElementById("result").style.display = "block";
}

// Đếm số nguyên trong mảng số thực
function demSoNguyen() {
    var realArray = document.getElementById("soThucInput").value.split(",").map(Number);
    var count = realArray.filter(num => Number.isInteger(num)).length;
    document.getElementById("result").innerHTML = "Tổng số nguyên có trong mảng là: " + count;
    document.getElementById("result").style.display = "block";
}

// So sánh số dương và số âm
function soSanhMang() {
    var soDuong = numbers.filter(num => num > 0).length;
    var soAm = numbers.filter(num => num < 0).length;
    var result = soDuong > soAm ? "Số Dương nhiều hơn" : (soAm > soDuong ? "Số Âm nhiều hơn" : "Lượng số Dương và số Âm bằng nhau");
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.display = "block";
}
