<script>
// قاموس يربط بين أسماء الصفحات ومسارات الصور
const pageIcons = {
    'index': '/images/home-icon.ico',
    'login': '/images/login-icon.ico',
    'dashboard': '/images/dashboard-icon.ico',
    'profile': '/images/profile-icon.ico',
    // أضف المزيد حسب حاجتك: 'اسم_الصفحة': 'مسار_الصورة'
};

// دالة لاستخراج اسم الصفحة من URL
function getPageName() {
    const path = window.location.pathname; // يحصل على المسار مثل "/index.html"
    const page = path.split('/').pop(); // يأخذ الجزء الأخير "index.html"
    return page.replace('.html', ''); // يزيل الامتداد ".html" ويعيد "index"
}

// دالة لتغيير الأيقونة
function setDynamicFavicon() {
    const pageName = getPageName();
    const iconPath = pageIcons[pageName] || '/images/default-icon.ico'; // يستخدم الصورة الافتراضية إذا لم يجد تطابقاً
    
    // البحث عن رابط Favicon الحالي أو إنشاؤه
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = iconPath;
}

// تنفيذ الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', setDynamicFavicon);
</script>
