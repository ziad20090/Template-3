(function () {
    // 1. إنشاء عنصر سكريبت جديد
    var script = document.createElement('script');
    
    // 2. تحديد رابط مكتبة Eruda من موقع cdnjs
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    
    // 3. إضافة السكريبت إلى الصفحة
    document.body.appendChild(script);
    
    // 4. تشغيل الأداة بمجرد اكتمال تحميل السكريبت
    script.onload = function () {
        eruda.init();
    };
})();
