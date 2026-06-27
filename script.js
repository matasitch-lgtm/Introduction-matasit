function changeProfile() {
    const profileImage = document.querySelector('.profile'); /*เลือก Class profile เพื่อเปลี่ยน Source */
    const selectedProfile = document.querySelector('button[name="profile"]:focus'); /*เลือกปุ่มที่ถูกคลิก */
    if (selectedProfile) {
        profileImage.src = `./images/${selectedProfile.value}.png`;
    }
}   
