<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinTech Webinar Invitation</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .poster {
            width: 600px;
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            border-radius: 24px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            position: relative;
        }

        .header {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 50%);
            animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }

        .logo-space {
            width: 80px;
            height: 40px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            margin: 0 auto 20px;
            border: 2px dashed rgba(255, 255, 255, 0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.7);
            z-index: 2;
            position: relative;
        }

        .headline {
            font-size: 2.8rem;
            font-weight: 800;
            color: white;
            margin-bottom: 15px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            z-index: 2;
            position: relative;
        }

        .subheadline {
            font-size: 1.3rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.95);
            margin-bottom: 30px;
            z-index: 2;
            position: relative;
        }

        .event-info {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 25px;
            margin: 0 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 2;
            position: relative;
        }

        .event-item {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            color: white;
            font-weight: 500;
        }

        .event-item:last-child {
            margin-bottom: 0;
        }

        .event-icon {
            font-size: 1.2rem;
            margin-right: 12px;
            width: 24px;
        }

        .content {
            padding: 40px 30px;
        }

        .highlights-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1e293b;
            text-align: center;
            margin-bottom: 30px;
            position: relative;
        }

        .highlights-title::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #3b82f6, #06b6d4);
            border-radius: 2px;
        }

        .highlights {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 35px;
        }

        .highlight-item {
            display: flex;
            align-items: center;
            padding: 18px;
            background: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
            border-radius: 12px;
            border-left: 4px solid #3b82f6;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .highlight-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .highlight-icon {
            font-size: 1.5rem;
            margin-right: 15px;
            color: #3b82f6;
            min-width: 24px;
        }

        .highlight-text {
            font-weight: 600;
            color: #1e293b;
            font-size: 0.95rem;
        }

        .cta-section {
            text-align: center;
            margin-bottom: 30px;
        }

        .cta-button {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 18px 45px;
            border-radius: 50px;
            font-size: 1.3rem;
            font-weight: 700;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(16, 185, 129, 0.5);
        }

        .qr-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%);
            padding: 25px;
            border-radius: 16px;
            margin-bottom: 25px;
        }

        .qr-text {
            flex: 1;
        }

        .qr-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 5px;
        }

        .qr-subtitle {
            font-size: 0.9rem;
            color: #64748b;
        }

        .qr-code {
            width: 80px;
            height: 80px;
            background: linear-gradient(145deg, #ffffff, #f1f5f9);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        .qr-placeholder {
            width: 60px;
            height: 60px;
            background: repeating-linear-gradient(
                45deg,
                #3b82f6,
                #3b82f6 3px,
                #ffffff 3px,
                #ffffff 6px
            );
            border-radius: 6px;
        }

        .footer {
            background: linear-gradient(145deg, #1e293b 0%, #334155 100%);
            padding: 25px 30px;
            text-align: center;
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .financial-icons {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.05;
            overflow: hidden;
            pointer-events: none;
        }

        .floating-icon {
            position: absolute;
            font-size: 2rem;
            color: #3b82f6;
            animation: float 6s ease-in-out infinite;
        }

        .floating-icon:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .floating-icon:nth-child(2) { top: 40%; right: 15%; animation-delay: 1s; }
        .floating-icon:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 2s; }
        .floating-icon:nth-child(4) { bottom: 20%; right: 10%; animation-delay: 3s; }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        @media (max-width: 640px) {
            .poster { width: 100%; max-width: 500px; }
            .headline { font-size: 2.2rem; }
            .highlights { grid-template-columns: 1fr; }
            .qr-section { flex-direction: column; gap: 15px; }
        }
    </style>
</head>
<body>
    <div class="poster">
        <div class="financial-icons">
            <div class="floating-icon">📊</div>
            <div class="floating-icon">💰</div>
            <div class="floating-icon">📈</div>
            <div class="floating-icon">🏦</div>
        </div>
        
        <div class="header">
            <div class="logo-space">LOGO</div>
            <h1 class="headline">Live FinTech Demo<br>Classic Meets Modern</h1>
            <p class="subheadline">Inventory, PO, SO, P&L Reports – All in One Place</p>
            
            <div class="event-info">
                <div class="event-item">
                    <span class="event-icon">📅</span>
                    <span><strong>Date:</strong> [Insert Date]</span>
                </div>
                <div class="event-item">
                    <span class="event-icon">⏰</span>
                    <span><strong>Time:</strong> [Insert Time]</span>
                </div>
                <div class="event-item">
                    <span class="event-icon">📍</span>
                    <span><strong>Platform:</strong> Google Meet</span>
                </div>
                <div class="event-item">
                    <span class="event-icon">🔗</span>
                    <span><strong>Register:</strong> [Insert Link]</span>
                </div>
            </div>
        </div>

        <div class="content">
            <h2 class="highlights-title">What You'll Experience</h2>
            
            <div class="highlights">
                <div class="highlight-item">
                    <span class="highlight-icon">⚡</span>
                    <span class="highlight-text">Live Demo of Tally + Zoho</span>
                </div>
                <div class="highlight-item">
                    <span class="highlight-icon">📊</span>
                    <span class="highlight-text">Fast, Unified Financial Reporting</span>
                </div>
                <div class="highlight-item">
                    <span class="highlight-icon">🎯</span>
                    <span class="highlight-text">Free Trial Available</span>
                </div>
                <div class="highlight-item">
                    <span class="highlight-icon">🛠️</span>
                    <span class="highlight-text">Custom Solutions</span>
                </div>
                <div class="highlight-item">
                    <span class="highlight-icon">💬</span>
                    <span class="highlight-text">Full Support Included</span>
                </div>
                <div class="highlight-item">
                    <span class="highlight-icon">🔄</span>
                    <span class="highlight-text">Seamless Integration</span>
                </div>
            </div>

            <div class="cta-section">
                <a href="#" class="cta-button">Register Now for Free!</a>
            </div>

            <div class="qr-section">
                <div class="qr-text">
                    <div class="qr-title">Quick Registration</div>
                    <div class="qr-subtitle">Scan QR code to register instantly</div>
                </div>
                <div class="qr-code">
                    <div class="qr-placeholder"></div>
                </div>
            </div>
        </div>

        <div class="footer">
            <strong>Thinking of high cost? Don't worry.</strong><br>
            We give you all the support, customization, and features – in one place.
        </div>
    </div>
</body>
</html>
