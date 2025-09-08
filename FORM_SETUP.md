# 表单配置说明

## 🎯 当前状态
表单代码已经准备好，但需要配置表单处理服务来接收提交的数据。

## 📋 推荐方案：Formspree

### 步骤1：注册Formspree
1. 访问 https://formspree.io
2. 点击 "Get Started" 注册账户
3. 创建新表单项目

### 步骤2：获取表单地址
1. 在Formspree控制台中创建新表单
2. 获取表单endpoint URL，格式类似：
   ```
   https://formspree.io/f/xpznvlqr
   ```

### 步骤3：更新代码
在 `script.js` 文件中找到这一行：
```javascript
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'; // 需要替换
```

替换为你的实际Formspree URL：
```javascript
const FORMSPREE_URL = 'https://formspree.io/f/xpznvlqr'; // 你的实际ID
```

### 步骤4：配置邮箱
- Formspree会将表单提交发送到你注册时使用的邮箱
- 你也可以在Formspree控制台中添加多个接收邮箱

## 🔄 备用方案

### 方案1：邮件客户端（无需配置）
如果不想使用第三方服务，代码中已包含备用方案：
- 点击提交时会自动打开用户的邮件客户端
- 预填充所有表单信息
- 用户可以直接发送邮件给你

要启用这个方案，在 `script.js` 中将：
```javascript
submitToFormspree(data)
```
替换为：
```javascript
sendToEmail(data)
```

### 方案2：其他表单服务
- **Netlify Forms**: 如果部署到Netlify
- **EmailJS**: 纯前端邮件发送
- **Google Forms**: 嵌入Google表单

## 📧 邮件模板
表单提交后，你会收到这样的邮件：

```
主题：麒麟科技咨询 - 抖音广告开户

姓名：张三
邮箱：zhangsan@example.com
电话：+86 138 0013 8000
咨询服务：抖音广告开户
详细需求：希望了解海外企业在中国投放抖音广告的流程...

提交时间：2024-03-15 14:30:25
```

## ⚡ 快速启用

**最简单的方法**：
1. 注册Formspree账户
2. 创建表单获取URL
3. 在script.js中替换URL
4. 提交代码更新

**或者立即使用邮件方案**：
1. 在script.js中修改一行代码
2. 用户提交时直接打开邮件客户端

## 🔐 安全性
- Formspree提供垃圾邮件防护
- 支持reCAPTCHA集成
- 有提交频率限制

选择最适合你的方案即可！