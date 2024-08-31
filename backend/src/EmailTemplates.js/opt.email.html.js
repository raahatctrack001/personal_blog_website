export const otpHtml = (email, otp)=>{
    return `<!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          background-color: #f1f1f1;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #ffffff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          font-size: 24px;
          margin-bottom: 20px;
          color: #007bff;
          text-align: center;
        }
        .content {
          font-size: 16px;
          line-height: 1.5;
        }
        .otp {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
          text-align: center;
          margin: 20px 0;
        }
        .footer {
          margin-top: 20px;
          font-size: 14px;
          color: #777;
          text-align: center;
        }
        .footer a {
          color: #007bff;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">OTP Verification for Social Fusion</div>
        <div class="content">
          <p>Hello user of ${email},</p>
          <p>Thank you for registering with Social Fusion! To complete your registration, please use the following OTP:</p>
          <div class="otp">${otp}</div>
          <p>The OTP is valid for the next 15 minutes. If you did not request this, please ignore this email.</p>
        </div>
        <div class="footer">
          <p>For any assistance, feel free to visit our <a href="socialfusion001.sf@gmail.com">Help Center</a>.</p>
          <p>This is an automated message, but if you want, you can reply!!!.</p>
        </div>
      </div>
    </body>
    </html>
    `  }