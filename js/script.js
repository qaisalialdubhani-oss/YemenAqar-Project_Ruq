$(document).ready(function() {
    
    // 1. تقنية AJAX لجلب النوافذ المنبثقة
    $('#btn-ajax-1').click(function() {
        $.ajax({
            url: 'ajax/modal1.html', method: 'GET',
            success: function(data) {
                $('#ajaxContent').html(data);
                $('#mainModalLabel').text('التشريعات والبيانات القانونية');
                $('#mainModal').modal('show');
            }
        });
    });

    $('#btn-ajax-2').click(function() {
        $.ajax({
            url: 'ajax/modal2.html', method: 'GET',
            success: function(data) {
                $('#ajaxContent').html(data);
                $('#mainModalLabel').text('تقرير البيانات الضخمة (Live Data)');
                $('#mainModal').modal('show');
            }
        });
    });

    // 2. معرض الصور التفاعلي
    $('.thumbnail').click(function() {
        $('#main-image').hide().attr('src', $(this).attr('src')).fadeIn(300);
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
    });

    // 3. التحقق من صحة النماذج (Form Validation)
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert("✅ تمت العملية بنجاح! تم حفظ البيانات المشفرة في خوادم الشركة.");
                form.reset();
                form.classList.remove('was-validated');
                return;
            }
            form.classList.add('was-validated');
        }, false);
    });

    // 4. عدادات الإحصائيات (Animation)
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) { $(this).text(Math.ceil(now)); }
        });
    });
});