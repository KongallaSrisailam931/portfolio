import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable

os.makedirs('public', exist_ok=True)
pdf_path = 'public/Kongalla_Srisailam_Resume.pdf'

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=36,
    rightMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()
normal = styles['Normal']

title_style = ParagraphStyle(
    'DocTitle',
    parent=normal,
    fontName='Helvetica-Bold',
    fontSize=18,
    leading=22,
    textColor=colors.HexColor('#0f172a')
)

subtitle_style = ParagraphStyle(
    'DocSubtitle',
    parent=normal,
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor('#0284c7')
)

contact_style = ParagraphStyle(
    'Contact',
    parent=normal,
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor('#475569')
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=normal,
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=colors.HexColor('#0f172a'),
    spaceAfter=4,
    spaceBefore=8
)

body_style = ParagraphStyle(
    'Body',
    parent=normal,
    fontName='Helvetica',
    fontSize=9,
    leading=13,
    textColor=colors.HexColor('#334155')
)

bullet_style = ParagraphStyle(
    'Bullet',
    parent=normal,
    fontName='Helvetica',
    fontSize=8.5,
    leading=12,
    textColor=colors.HexColor('#334155'),
    leftIndent=12,
    firstLineIndent=-8
)

company_style = ParagraphStyle(
    'Company',
    parent=normal,
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=13,
    textColor=colors.HexColor('#0f172a')
)

date_style = ParagraphStyle(
    'Date',
    parent=normal,
    fontName='Helvetica-Oblique',
    fontSize=8.5,
    leading=12,
    alignment=2,
    textColor=colors.HexColor('#64748b')
)

story = []

# Header
story.append(Paragraph("KONGALLA SRISAILAM", title_style))
story.append(Paragraph("Full Stack Developer | PHP • Laravel • CodeIgniter • React.js", subtitle_style))
story.append(Paragraph("Email: kongallasrisailam931@gmail.com | Phone: +91 9381695637 | Location: Hyderabad, India<br/>LinkedIn: linkedin.com/in/srisailam-kongalla-0b0938394", contact_style))
story.append(Spacer(1, 6))
story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceAfter=8))

# Executive Profile
story.append(Paragraph("EXECUTIVE PROFILE", section_heading))
story.append(Paragraph(
    "Results-driven Full Stack Developer with 3+ years of experience delivering enterprise-grade web applications, "
    "custom CMS platforms, and database-driven solutions. Proven expertise in PHP, Laravel, CodeIgniter, MySQL, and modern frontend tools. "
    "Successfully architected the official Chhota Bheem website and custom CMS from scratch at Green Gold Animation, implemented scalable MVC backend modules, "
    "engineered REST APIs, and managed production applications across Media, Real Estate, HR, and E-Commerce domains.",
    body_style
))
story.append(Spacer(1, 6))

# Core Technical Skills
story.append(Paragraph("CORE TECHNICAL SKILLS", section_heading))
skills_data = [
    [Paragraph("<b>Backend Engineering:</b>", body_style), Paragraph("PHP (7.x / 8.x), Laravel, CodeIgniter, Yii2, RESTful APIs, OOP, MVC Architecture", body_style)],
    [Paragraph("<b>Frontend Development:</b>", body_style), Paragraph("HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, jQuery, AJAX, Tailwind CSS", body_style)],
    [Paragraph("<b>Database & Storage:</b>", body_style), Paragraph("MySQL, PostgreSQL, Relational Schema Design, Complex Query Tuning, Indexing", body_style)],
    [Paragraph("<b>Integrations & Tools:</b>", body_style), Paragraph("Razorpay Gateway, Twilio SMS OTP, Firebase FCM, Git, GitHub, Postman", body_style)],
    [Paragraph("<b>Platforms & Solutions:</b>", body_style), Paragraph("Custom Enterprise CMS, Odoo ERP Modules, OpenCart, Shopify Customization", body_style)],
]
t = Table(skills_data, colWidths=[130, 410])
t.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ('TOPPADDING', (0,0), (-1,-1), 2),
]))
story.append(t)
story.append(Spacer(1, 6))

# Professional Experience
story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))

def exp_block(title, company, dates, bullets):
    table_data = [[
        Paragraph(f"<b>{title}</b> | {company}", company_style),
        Paragraph(dates, date_style)
    ]]
    tb = Table(table_data, colWidths=[380, 160])
    tb.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(tb)
    for b in bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 4))

exp_block(
    "Full Stack Developer",
    "Green Gold Animation Pvt Ltd",
    "Jul 2025 – Present",
    [
        "Led end-to-end design and development of the official Chhota Bheem website and custom enterprise CMS from scratch.",
        "Architected scalable MVC modules managing character profiles, games, movie releases, episodes, and promotional events.",
        "Engineered role-based access control (RBAC) admin dashboards enabling marketing and editorial teams to update media dynamically.",
        "Developed internal Employee Helpdesk System for automated departmental ticketing, SLA tracking, and file uploads.",
        "Built intelligent Resume Parsing System extracting candidate qualifications and structuring recruitment data in real-time.",
        "Maintained database normalization and optimized SQL queries for high stability and reliable production operations."
    ]
)

exp_block(
    "Full Stack Developer",
    "Anicalls Pvt Ltd",
    "Jul 2023 – Jul 2025",
    [
        "Engineered business-critical Laravel and CodeIgniter applications for real estate and multi-region classified platforms.",
        "Developed property listing engine with parametric multi-attribute filtering, broker dashboards, and lead capture workflows.",
        "Implemented secure authentication, session management, and role-based permissions across admin and agent consoles.",
        "Integrated third-party REST APIs and optimized MySQL relational queries to ensure low latency and consistent uptime."
    ]
)

exp_block(
    "PHP Backend Developer",
    "Innoitlabs",
    "Mar 2023 – Jul 2023",
    [
        "Developed backend REST APIs for CRM and classified advertising platforms in PHP and MySQL.",
        "Integrated Twilio SMS API for two-factor OTP verification and Firebase for transactional push notifications.",
        "Designed relational database tables, implemented input validation, and supported deployment pipelines."
    ]
)

exp_block(
    "PHP Backend Developer Intern",
    "Rubia Services",
    "Sep 2022 – Feb 2023",
    [
        "Contributed to enterprise application modules built on Yii2 framework and MySQL.",
        "Configured Razorpay payment gateway integration, transaction status tracking, and SMS notification webhooks.",
        "Assisted in database maintenance, defect resolution, unit testing, and production support."
    ]
)

# Key Enterprise Projects
story.append(Paragraph("KEY PROJECT CASE STUDIES", section_heading))

projects_summary = [
    ("Chhota Bheem Website & Custom CMS:", "PHP, MySQL, JavaScript, Bootstrap, REST APIs. Official digital home for flagship IP. Custom CMS with media, movie, events, and games management."),
    ("Employee Helpdesk & Workflow System:", "PHP, MySQL, REST APIs, Session Security. Departmental ticket routing, SLA resolution matrix, file attachment uploads, and audit tracking."),
    ("Real Estate Enterprise Platform:", "Laravel, CodeIgniter, MySQL, Bootstrap. Parametric property search engine, agent dashboards, and composite indexing for high-speed query response."),
    ("B2B E-Commerce & Multi-Vendor Engine:", "PHP, Laravel, MySQL, Razorpay Gateway. Supplier/buyer dashboards, category tree, GST invoice calculations, and order tracking.")
]

for p_title, p_desc in projects_summary:
    story.append(Paragraph(f"<b>{p_title}</b> {p_desc}", bullet_style))
story.append(Spacer(1, 6))

# Education
story.append(Paragraph("EDUCATION", section_heading))
edu_table = [[
    Paragraph("<b>B.Tech in Electrical & Electronics Engineering</b><br/>Malla Reddy Institute of Engineering and Technology (JNTUH)", company_style),
    Paragraph("2019 – 2022<br/>Hyderabad, India", date_style)
]]
te = Table(edu_table, colWidths=[380, 160])
te.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
]))
story.append(te)

doc.build(story)
print("Recruiter-ready PDF resume generated at:", pdf_path)
