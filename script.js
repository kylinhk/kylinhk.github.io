// ===== DOM内容加载完成后执行 =====
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeFormHandling();
    initializeAnimations();
});

// ===== 导航栏功能 =====
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // 汉堡菜单切换
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 导航链接点击后关闭移动端菜单
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 平滑滚动到锚点
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== 滚动效果功能 =====
function initializeScrollEffects() {
    // 返回顶部按钮
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 滚动时元素淡入效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.service-card, .advantage-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== 表单处理功能 =====
function initializeFormHandling() {
    const consultationForm = document.getElementById('consultationForm');
    
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message')
            };

            // 表单验证
            if (!validateForm(data)) {
                return;
            }

            // 显示提交状态
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';
            submitButton.disabled = true;

            // 模拟表单提交（实际项目中应该发送到服务器）
            setTimeout(() => {
                showSuccessMessage();
                this.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// ===== 表单验证 =====
function validateForm(data) {
    const errors = [];

    // 验证姓名
    if (!data.name || data.name.trim().length < 2) {
        errors.push('请输入有效的姓名');
    }

    // 验证邮箱
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('请输入有效的邮箱地址');
    }

    // 验证服务选择
    if (!data.service) {
        errors.push('请选择咨询服务');
    }

    // 验证电话（可选但如果填写需要验证格式）
    if (data.phone && data.phone.trim() !== '') {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(data.phone)) {
            errors.push('请输入有效的电话号码');
        }
    }

    if (errors.length > 0) {
        showErrorMessage(errors.join('；'));
        return false;
    }

    return true;
}

// ===== 消息显示功能 =====
function showSuccessMessage() {
    showMessage('感谢您的咨询！我们会在24小时内与您联系。', 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showMessage(message, type) {
    // 移除现有消息
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // 创建消息元素
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${message}
    `;

    // 添加样式
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
        color: ${type === 'success' ? '#155724' : '#721c24'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 1001;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        max-width: 90%;
        text-align: center;
        animation: slideDown 0.3s ease;
    `;

    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(messageDiv);

    // 3秒后自动移除消息
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => {
                messageDiv.remove();
                style.remove();
            }, 300);
        }
    }, 3000);
}

// ===== 初始化动画效果 =====
function initializeAnimations() {
    // 为统计数字添加计数动画
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateNumbers = () => {
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            if (!isNaN(text)) {
                const finalNumber = parseInt(text);
                animateCounter(stat, 0, finalNumber, 2000);
            }
        });
    };

    // 当统计区域进入视窗时开始动画
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // 鼠标跟随效果（仅在桌面端）
    if (window.innerWidth > 768) {
        initializeMouseFollower();
    }
}

// ===== 数字计数动画 =====
function animateCounter(element, start, end, duration) {
    if (isNaN(end)) return;
    
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // 使用缓动函数
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = end;
        }
    };
    
    requestAnimationFrame(updateCounter);
}

// ===== 鼠标跟随效果 =====
function initializeMouseFollower() {
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // 创建跟随元素
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    follower.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(211, 47, 47, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(follower);

    // 跟踪鼠标位置
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 平滑跟随动画
    const updateFollower = () => {
        const dx = mouseX - followerX;
        const dy = mouseY - followerY;
        
        followerX += dx * 0.1;
        followerY += dy * 0.1;
        
        follower.style.left = followerX - 10 + 'px';
        follower.style.top = followerY - 10 + 'px';
        
        requestAnimationFrame(updateFollower);
    };
    
    updateFollower();

    // 悬停效果
    const hoverElements = document.querySelectorAll('a, button, .service-card, .advantage-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform = 'scale(2)';
            follower.style.background = 'rgba(211, 47, 47, 0.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            follower.style.transform = 'scale(1)';
            follower.style.background = 'rgba(211, 47, 47, 0.3)';
        });
    });
}

// ===== 页面加载完成后的额外初始化 =====
window.addEventListener('load', function() {
    // 预加载关键图片或资源
    preloadResources();
    
    // 添加页面加载完成的类名用于CSS动画
    document.body.classList.add('loaded');
});

// ===== 预加载资源 =====
function preloadResources() {
    // 这里可以预加载图片或其他资源
    const imagesToPreload = [
        // 添加需要预加载的图片URL
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// ===== 错误处理 =====
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 可以在这里添加错误报告逻辑
});

// ===== 性能监控 =====
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('页面加载时间:', loadTime + 'ms');
        }, 0);
    });
}