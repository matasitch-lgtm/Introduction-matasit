function changeProfile() {
    const profileImage = document.querySelector('.profile'); /*เลือก Class profile เพื่อเปลี่ยน Source */
    const selectedProfile = document.querySelector('button[name="profile"]:focus'); /*เลือกปุ่มที่ถูกคลิก */
    if (selectedProfile) {
        profileImage.src = `./images/${selectedProfile.value}.png`;
    }
}   

async function getStocks() {
    const stockList = document.querySelector("#stock-list");

    stockList.textContent = "กำลังโหลด...";

    try {
        const url =
            "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo";

        const response = await fetch(url);
        const data = await response.json();

        const stock = data["Global Quote"];
        const price = stock?.["05. price"];

        if (!price) {
            throw new Error("ไม่พบข้อมูลหุ้น");
        }

        stockList.textContent =
            `IBM: $${Number(price).toFixed(2)}`;
    } catch (error) {
        stockList.textContent = "โหลดราคาหุ้นไม่สำเร็จ";
        console.error(error);
    }
}

function showProject(image, title, detail) {
    const dialog = document.querySelector("#project-dialog");

    document.querySelector("#project-image").src = image;
    document.querySelector("#project-title").textContent = title;
    document.querySelector("#project-detail").textContent = detail;

    dialog.showModal();
}

function closeProject() {
    document.querySelector("#project-dialog").close();
}