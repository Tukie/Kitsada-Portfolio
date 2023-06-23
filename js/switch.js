// Get the button element
var button_en = document.getElementById("switch_en");
var button_en2 = document.getElementById("switch_en2");
var button_th = document.getElementById("switch_th");
var button_th2 = document.getElementById("switch_th2");

//  nav
let nav_home = document.getElementById("nav_home");
let nav_about = document.getElementById("nav_about");
let nav_workExp = document.getElementById("nav_workExp");
let nav_skill = document.getElementById("nav_skill");
let nav_mywork = document.getElementById("nav_mywork");
let nav_contact = document.getElementById("nav_contact");

// banner
let welcome = document.getElementById("welcome");
let myname = document.getElementById("myname");
let resume = document.getElementById("resume");

// about
let aboutTitle = document.getElementById("about_title");
let aboutDetail = document.getElementById("about_detail");
let hisTitle = document.getElementById("his_title");
let nameLastLabel = document.getElementById("name_last_label");
let nameLast = document.getElementById("name_last");
let addressLabel = document.getElementById("adress_label");
let address = document.getElementById("address");
let telLabel = document.getElementById("tel_label");
let emailLabel = document.getElementById("email_label");
let lineLabel = document.getElementById("line_label");
let websiteLabel = document.getElementById("website_label");
let hisGradu = document.getElementById("his_gradu");
let schoolFirst = document.getElementById("school_first");
let schoolFirstGrade = document.getElementById("school_first_grade");
let schoolSecond = document.getElementById("school_second");
let schoolSecondGrade = document.getElementById("school_second_grade");
let schoolName1 = document.getElementById("school_name1");
let schoolName2 = document.getElementById("school_name2");
let university = document.getElementById("univercity");
let universityName = document.getElementById("university_name");
let universityGrade = document.getElementById("university_grade");

// workEXP
let workEXPTitle = document.getElementById("workEXP_title");
let workEXPDetail = document.getElementById("workEXP_detail");
let workEXPDate = document.getElementById("workEXP_date");
let workCompanyNameLabel = document.getElementById("work_company_name_label");
let workCompanyName = document.getElementById("work_company_name");
let workEXPPositionLabel = document.getElementById("workEXP_position_label");
let workEXPPosition = document.getElementById("workEXP_position");
let jobDescribe = document.getElementById("job_describe");

// Skill
let skillTitle = document.getElementById("skill_title");
let skillDetail = document.getElementById("skill_detail");
let skillPart1 = document.getElementById("skill_part1");
let skillPart2 = document.getElementById("skill_part2");
let skillBulidCom = document.getElementById("skill_bulid_com");
let skillNet = document.getElementById("skill_net");

// portfolio
let portfolioTitle = document.getElementById("portfolio_title");
let portfolioDetail = document.getElementById("portfolio_detail");
let portfolioPart1 = document.getElementById("portfolio_part1");
let portfolioPart2 = document.getElementById("portfolio_part2");
let portfolioPart3 = document.getElementById("portfolio_part3");
let web1 = document.getElementById("web1");
let web2 = document.getElementById("web2");
let web3 = document.getElementById("web3");
let developBy1 = document.getElementById("develop_by1");
let developBy2 = document.getElementById("develop_by2");
let developBy3 = document.getElementById("develop_by3");
let see1 = document.getElementById("see1");
let see2 = document.getElementById("see2");
let see3 = document.getElementById("see3");

// contact
let contactTitle = document.getElementById("contact_title");
let contactDetail = document.getElementById("contact_detail");
let contactName = document.getElementById("contact_name");
let contactEmail = document.getElementById("contact_email");
let contactMessage = document.getElementById("contact_message");
let sent = document.getElementById("sent");

// footer
let footer = document.getElementById("footer");

// Function to change the locale of the button
function changeLocale(locale) {
  if (locale === "en") {
    // nav
    nav_home.textContent = "Home";
    nav_about.textContent = "About";
    nav_workExp.textContent = "Experience";
    nav_skill.textContent = "Skills";
    nav_mywork.textContent = "Portfolio";
    nav_contact.textContent = "Contact";

    // banner
    welcome.textContent = "Welcome to My portfolio Website I'm";
    myname.innerHTML = "Kitsada<br>Butnam";
    resume.textContent = "Resume";

    //about
    aboutTitle.textContent = "About me";
    aboutDetail.textContent = "Introduction to CV and Educational History";
    hisTitle.textContent = "Personal profile";
    nameLastLabel.textContent = "Name - Lastname";
    nameLast.textContent = "Kitsada Butnam";
    addressLabel.textContent = "Address";
    address.textContent =
      "52 Moo 8, Ban Na Sing, Na Sing Subdistrict, Sri Wilai District, Bueng Kan Province 38210";
    telLabel.textContent = "Telephone";
    emailLabel.textContent = "E-mail";
    lineLabel.textContent = "Line";
    websiteLabel.textContent = "Website";
    hisGradu.textContent = "Education history";
    schoolFirst.textContent = "Junior High School";
    schoolFirstGrade.textContent = "GPA 3.62";
    schoolSecond.textContent = "Junior High School";
    schoolSecondGrade.textContent = "GPA 3.53";
    schoolName1.textContent = "Sriwilai Wittaya";
    schoolName2.textContent = "Sriwilai Wittaya";
    university.textContent = "University";
    universityName.textContent = "Udon Thani Rajabhat University";
    universityGrade.textContent = "GPA 3.85";

    // EXP
    workEXPTitle.textContent = "Work experience";
    workEXPDetail.textContent = "Information about my work history.";
    workEXPDate.textContent = "April 1, 2565 - June 17, 2565";
    workCompanyNameLabel.textContent = "Company Name";
    workCompanyName.textContent =
      "BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES, BANGKOK, THAILAND (BAAC)";
    workEXPPositionLabel.textContent = "Position";
    workEXPPosition.textContent = "Internship student";
    jobDescribe.innerHTML =
      "<span class='fw-bold'>Job Description: </span>Customer Service Opening new accounts for customers. Processing ATM card applications, including A-GEN cards and gold cards. Assisting customers with the A-Mobile application and Mobile Banking application of the bank. Support Functions for Financial Services: Printing and photocopying documents. Handling cash boxes for ATM replenishment. Support Functions for Credit Services: Printing invoice statements and folding them. Data entry for insurance applications, Taweesap 99, and Morakot Cooperative.";

    // Skills
    skillTitle.textContent = "Skills and abilities";
    skillDetail.textContent =
      "Skills and abilities that I possess and can apply in the workplace";
    skillPart1.textContent = "Software";
    skillPart2.textContent = "Hardware";
    skillBulidCom.textContent = "PC Building";
    skillNet.textContent = "Network Analytics";

    // portfolio
    portfolioTitle.textContent = "Work Samples";
    portfolioDetail.textContent =
      "These are the works I have done for previous clients, and I hope to showcase them to demonstrate my abilities and the quality of my work.";
    portfolioPart1.textContent = "Design";
    portfolioPart2.textContent = "Web development";
    web1.textContent = "Community Learning Center";
    web2.textContent = "Time attendance system";
    web3.textContent = "Laptop Shop";
    developBy1.textContent = "Develop By";
    developBy2.textContent = "Develop By";
    developBy3.textContent = "Develop By";
    see1.textContent = "See";
    see2.textContent = "See";
    see3.textContent = "See";
    portfolioPart3.textContent = "Certificates";

    // contact
    contactTitle.textContent = "Contact";
    contactDetail.innerHTML =
      "Please provide the information through the form below to contact me and <br> let me know that you are interested in communicating with me";
    contactName.textContent = "Name";
    contactEmail.textContent = "E-mail";
    contactMessage.textContent = "Messages";
    sent.textContent = "Sent Message";

    // footer
    footer.textContent =
      "Copyright © 2023 by Kitsada Butnam // Designed by Kitsada Butnam";

    button_en2.classList.add("d-none");
    button_en.classList.add("d-none");
    button_th2.classList.remove("d-none");
    button_th.classList.remove("d-none");



  } else if (locale === "th") {
    // th
    nav_home.textContent = "หน้าหลัก";
    nav_about.textContent = "เกี่ยวกับ";
    nav_workExp.textContent = "ประสบการณ์";
    nav_skill.textContent = "ทักษะความสามารถ";
    nav_mywork.textContent = "ผลงาน";
    nav_contact.textContent = "ติดต่อ";

    // banner
    welcome.textContent = "ยินดีต้อนรับ สู่เว็บไซต์สะสมผลงาน";
    myname.innerHTML = "นายกฤษดา<br>บุตนาม";
    resume.textContent = "เรซูเม";

    //about
    aboutTitle.textContent = "เกี่ยวกับ";
    aboutDetail.textContent =
      "ข้อมูลเบื้องต้นเกี่ยวกับประวัติส่วนตัวและประวัติการศึกษา";
    hisTitle.textContent = "ประวัติส่วนตัว";
    nameLastLabel.textContent = "ประวัติส่วนตัว";
    nameLast.textContent = "นายกฤษดา บุตนาม";
    addressLabel.textContent = "ที่อยู่";
    address.textContent =
      "52 หมู่ 8 บ.นาสิงห์ ต.นาสิงห์ อ.ศรีวิไล จ.บึงกาฬ 38210";
    telLabel.textContent = "เบอร์โทรศัพท์";
    emailLabel.textContent = "อีเมลล์";
    lineLabel.textContent = "ไลน์ไอดี";
    websiteLabel.textContent = "เว็บไซต์";
    hisGradu.textContent = "ประวัติการศึกษา";
    schoolFirst.textContent = "มัธยมศึกษาตอนต้น";
    schoolFirstGrade.textContent = "เกรดเฉลี่ย 3.62";
    schoolSecond.textContent = "มัธยมศึกษาตอนปลาย";
    schoolSecondGrade.textContent = "มัธยมศึกษาตอนปลาย";
    schoolName1.textContent = "โรงเรียนศรีวิไลวิทยา";
    schoolName2.textContent = "โรงเรียนศรีวิไลวิทยา";
    university.textContent = "อุดมศึกษา";
    universityName.textContent = "มหาวิทยาลัยราชภัฏอุดรธานี";
    universityGrade.textContent = "เกรดเฉลี่ย 3.85";

    // EXP
    workEXPTitle.textContent = "ประสบการณ์ทำงาน";
    workEXPDetail.textContent = "ข้อมูลเบื้องต้นเกี่ยวกับประวัติการทำงาน";
    workEXPDate.textContent = "1 เมษายน 2565 - 17 มิถุนายน 2565";
    workCompanyNameLabel.textContent = "ชื่อบริษัท";
    workCompanyName.textContent =
      "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร สาขาศรีวิไล";
    workEXPPositionLabel.textContent = "ตำแหน่ง";
    workEXPPosition.textContent = "นักศึกษาฝึกงาน";
    jobDescribe.innerHTML =
      "<span class='fw-bold'>ลักษณะงานที่ทำ : </span>งานให้บริการลูกค้า เปิดบัญชี ทําบัตร ATM บัตร A-GEN บัตรทอง ทําแอพพลิเคชั่น A-Mobile แอพพลิเคชั่น Mobile Banking ของธนาคาร สนับสนุนการทํางานสายงานการเงิน พิมพ์เอกสาร ถ่ายเอกสาร ยกกล่องเงินเพื่อนําไปเติมเข้าตู้ ATM สนับสนุนการทํางานสายงานสินเชื่อ พิมพ์ใบแจ้งหนี้ พับใบแจ้งหนี้ คีย์ข้อมูลทําประกัน ธ.ก.ส. ทวีรัก 99 ธ.ก.ส. มอบรัก";

    // Skills
    skillTitle.textContent = "ทักษะความสามารถ";
    skillDetail.textContent =
      "ทักษะความสามารถที่มีและสามารถนำไปปรับใช้ในการทำงานได้";
    skillPart1.textContent = "ซอฟต์แวร์";
    skillPart2.textContent = "ฮาร์ดแวร์";
    skillBulidCom.textContent = "ประกอบคอมพิวเตอร์";
    skillNet.textContent = "ระบบเครือข่ายอินเทอร์เน็ต";

    // portfolio
    portfolioTitle.textContent = "ผลงาน";
    portfolioDetail.textContent =
      "ผลงานเหล่านี้เป็นผลงานที่เคยทำให้ผู้ว่าจ้าง หวังว่าจะได้แสดงให้เห็นถึงความสามารถและคุณภาพของงานที่เคยทำ";
    portfolioPart1.textContent = "ด้านการออกแบบ";
    portfolioPart2.textContent = "ด้านการพัฒนาเว็บไซต์";
    web1.textContent = "ศูนย์เรียนรู้ชุมชนจังหวัดบึงกาฬ";
    web2.textContent = "ระบบเครือข่ายอินเทอร์เน็ต";
    web3.textContent = "เว็บไซต์ขายโน๊ตบุ๊คออนไลน์";
    developBy1.textContent = "พัฒนาโดย";
    developBy2.textContent = "พัฒนาโดย";
    developBy3.textContent = "พัฒนาโดย";
    see1.textContent = "เข้าชม";
    see2.textContent = "เข้าชม";
    see3.textContent = "เข้าชม";
    portfolioPart3.textContent = "เกียรติบัตร";

    // contact
    contactTitle.textContent = "ติดต่อ";
    contactDetail.innerHTML =
      "หากคุณสนในสามารถติดต่อได้โดยการให้ข้อมูลผ่านฟอร์มที่ปรากฏด้านล่างนี้";
    contactName.textContent = "ชื่อ - นามสกุล";
    contactEmail.textContent = "ที่อยู่อีเมลล์";
    contactMessage.textContent = "ข้อความ";
    sent.textContent = "ส่งข้อความ";

    // footer
    footer.textContent =
      "ลิขสิทธิ์ © 2023 กฤษดา บุตนาม // ออกแบบ โดย กฤษดา บุตนาม";

    button_en2.classList.remove("d-none");
    button_en.classList.remove("d-none");
    button_th2.classList.add("d-none");
    button_th.classList.add("d-none");
  }
}
