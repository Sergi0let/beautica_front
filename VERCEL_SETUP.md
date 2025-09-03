# Налаштування Email на Vercel

## Кроки для налаштування:

### 1. Налаштування змінних середовища в Vercel

1. Перейдіть до [Vercel Dashboard](https://vercel.com/dashboard)
2. Виберіть ваш проект
3. Перейдіть до **Settings** → **Environment Variables**
4. Додайте наступні змінні:

```env
# Email налаштування
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_FROM=your-gmail@gmail.com
EMAIL_ADMIN=s.vashkevych@gmail.com
```

### 2. Налаштування Environment

Для кожної змінної вкажіть:

- **Environment**: `Production` (обов'язково!)
- **Preview**: `Production` (опціонально)
- **Development**: `Production` (опціонально)

### 3. Перезапуск деплою

Після додавання змінних:

1. Перейдіть до **Deployments**
2. Натисніть **Redeploy** на останньому деплої
3. Дочекайтеся завершення деплою

## Перевірка налаштувань:

### 1. Перевірка в логах

Після деплою перевірте логи:

1. Перейдіть до **Deployments** → останній деплой
2. Натисніть **View Function Logs**
3. Знайдіть логи з `🔧 Nodemailer config:`

### 2. Тестування API

Відправте POST запит на ваш API endpoint:

```bash
curl -X POST https://your-domain.vercel.app/api/send-userdata \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест",
    "phone": "+380991234567",
    "description": "Тестове повідомлення"
  }'
```

## Поширені проблеми на Vercel:

### 1. **"Environment Variables not found"**

- Перевірте, чи змінні додані для `Production` environment
- Перезапустіть деплой після додавання змінних

### 2. **"EAUTH error"**

- Перевірте App Password (не звичайний пароль)
- Увімкніть двофакторну автентифікацію в Gmail

### 3. **"ECONNECTION error"**

- Vercel має обмеження на зовнішні з'єднання
- Gmail повинен працювати нормально

### 4. **"Function timeout"**

- Email відправка може займати час
- Vercel має ліміт 10 секунд для Hobby плану

## Діагностика:

### Перевірка логів в Vercel:

```bash
# В логах ви побачите:
🔧 Nodemailer config: {
  service: "gmail",
  user: "✅ Вказано",
  pass: "✅ Вказано",
  from: "your-email@gmail.com",
  admin: "s.vashkevych@gmail.com",
  environment: "production",
  vercel: "✅ Vercel"
}
```

### Успішна відправка:

```bash
✅ Email sent successfully: {
  messageId: "message-id",
  to: "s.vashkevych@gmail.com",
  from: "your-email@gmail.com",
  environment: "production"
}
```

## Важливі примітки:

1. **Environment Variables** повинні бути встановлені для `Production`
2. **App Password** має бути 16 символів
3. **Перезапуск деплою** обов'язковий після зміни змінних
4. **Логи** показують детальну діагностику

## Тестування:

Після налаштування протестуйте форму на вашому сайті або через API endpoint `/api/send-userdata`.
