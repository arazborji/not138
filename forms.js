/* برای افزودن فرم‌ها، فایل را در پوشه forms قرار دهید و یک مورد به آرایه زیر اضافه کنید.
نمونه:
{ title: "فرم درخواست", description: "توضیح کوتاه", file: "forms/request.pdf" }
*/
const formItems = [];
const formsList = document.getElementById("formsList");
if (formsList && formItems.length) {
  formsList.innerHTML = formItems.map(item => `
    <article class="form-item">
      <strong>${item.title}</strong>
      <p>${item.description || ""}</p>
      <a class="btn btn-primary" href="${item.file}" download>دریافت فایل</a>
    </article>`).join("");
  document.querySelector(".empty-state")?.setAttribute("hidden", "");
}
