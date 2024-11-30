let ism = prompt("Iltimos, ismingizni kiriting:");
let age = prompt("Yoshingizni kiriting:");
let ball = prompt("Balingizni kiriting:");

const resultDiv = document.getElementById("result"); // DOM orqali natijani chiqarish

// Kiritilgan ballni raqamga o'girish
ball = parseInt(ball);

// Ma'lumotlarni tekshirish va natijani chiqarish
if (!isNaN(ball)) { // Ball raqam ekanligini tekshirish
  if (ball >= 70) {
    resultDiv.innerHTML = `
      <p><strong>Ism:</strong> ${ism}</p>
      <p><strong>Yosh:</strong> ${age}</p>
      <p><strong>Ball:</strong> ${ball}</p>
      <p class="success">Siz universitetga kirdingiz!</p>
    `;
  } else {
    resultDiv.innerHTML = `
      <p><strong>Ism:</strong> ${ism}</p>
      <p><strong>Yosh:</strong> ${age}</p>
      <p><strong>Ball:</strong> ${ball}</p>
      <p class="failure">Afsuski, siz universitetga kira olmadingiz.</p>
    `;
  }
} else {
  alert("Iltimos, ballni to'g'ri kiriting!");
}




result.style.color = "red"; // Oxirgi xabarning matn rangi

result.style.fontSize = "24px"; // Matn o'lchami
result.style.backgroundColor = "yellow"; // Fon rangi
result.style.textAlign = "center"; // Markazlashtirish
result.style.padding = "20px"; // Ichki bo'sh joy
result.style.border = "2px solid black"; // Qora chegara
result.style.width = "300px"; // Blok kengligi
// result.style.margin = "10px auto";