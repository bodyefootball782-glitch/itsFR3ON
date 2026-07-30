// ======================
// itsFR3ON Website Script
// ======================

// غيّرها إلى true إذا كنت لايف
const isLive = false;

// الحصول على عنصر الحالة
const status = document.getElementById("status");

// تغيير الحالة
if (isLive) {

    status.innerHTML = "🟢 ONLINE";

    status.style.color = "#7CFF7C";

    status.style.borderColor = "#7CFF7C";

} else {

    status.innerHTML = "⚪ OFFLINE";

    status.style.color = "#FFFFFF";

    status.style.borderColor = "#D4AF37";

}

// تأثير بسيط عند تحميل الصفحة
window.onload = () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1s";
        document.body.style.opacity = "1";

    }, 100);

};