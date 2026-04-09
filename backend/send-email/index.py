import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту администратора."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    message = body.get("message", "").strip()
    form_type = body.get("form_type", "feedback")

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    smtp_host = os.environ["SMTP_HOST"]
    smtp_port = int(os.environ["SMTP_PORT"])
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]
    notify_email = os.environ["NOTIFY_EMAIL"]

    if form_type == "booking":
        cabin = body.get("cabin", "не указан")
        dates = body.get("dates", "не указаны")
        checkout = body.get("checkout", "не указана")
        guests = body.get("guests", "не указано")
        subject = f"Новая заявка на бронирование — {name}"
        html_body = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #0891b2;">🏡 Новая заявка на бронирование</h2>
            <table style="width:100%; border-collapse: collapse;">
                <tr><td style="padding:8px; color:#666;">Имя:</td><td style="padding:8px; font-weight:bold;">{name}</td></tr>
                <tr style="background:#f9f9f9;"><td style="padding:8px; color:#666;">Телефон:</td><td style="padding:8px; font-weight:bold;"><a href="tel:{phone}">{phone}</a></td></tr>
                <tr><td style="padding:8px; color:#666;">Домик:</td><td style="padding:8px;">{cabin}</td></tr>
                <tr style="background:#f9f9f9;"><td style="padding:8px; color:#666;">Дата заезда:</td><td style="padding:8px;">{dates}</td></tr>
                <tr><td style="padding:8px; color:#666;">Дата выезда:</td><td style="padding:8px;">{checkout}</td></tr>
                <tr style="background:#f9f9f9;"><td style="padding:8px; color:#666;">Гостей:</td><td style="padding:8px;">{guests}</td></tr>
            </table>
            <p style="margin-top:20px; color:#888; font-size:12px;">Заявка отправлена с сайта базы отдыха у моря</p>
        </div>
        """
    else:
        subject = f"Новое сообщение с сайта — {name}"
        html_body = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #0891b2;">💬 Новое сообщение с сайта</h2>
            <table style="width:100%; border-collapse: collapse;">
                <tr><td style="padding:8px; color:#666;">Имя:</td><td style="padding:8px; font-weight:bold;">{name}</td></tr>
                <tr style="background:#f9f9f9;"><td style="padding:8px; color:#666;">Телефон:</td><td style="padding:8px; font-weight:bold;"><a href="tel:{phone}">{phone}</a></td></tr>
                <tr><td style="padding:8px; color:#666;">Сообщение:</td><td style="padding:8px;">{message or "—"}</td></tr>
            </table>
            <p style="margin-top:20px; color:#888; font-size:12px;">Заявка отправлена с сайта базы отдыха у моря</p>
        </div>
        """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = smtp_user
    msg["To"] = notify_email
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, notify_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }