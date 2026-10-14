import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/images/projects', exist_ok=True)

# 1. Tech developer illustration transparent (800x800)
dev_img = Image.new('RGBA', (800, 800), (0, 0, 0, 0))
draw = ImageDraw.Draw(dev_img)

# Futuristic orbital circles
for r in range(350, 180, -25):
    alpha = int(40 * (1 - (r - 180)/170))
    draw.ellipse([400 - r, 400 - r, 400 + r, 400 + r], outline=(0, 85, 255, alpha), width=3)

# Base platform
draw.ellipse([200, 580, 600, 720], fill=(15, 23, 42, 230), outline=(0, 85, 255, 180), width=3)
draw.ellipse([250, 610, 550, 690], fill=(30, 41, 59, 210), outline=(56, 189, 248, 160), width=2)

# Central workstation screen & holographic code lines
draw.rounded_rectangle([260, 260, 540, 480], radius=16, fill=(10, 15, 30, 240), outline=(0, 85, 255, 255), width=3)
draw.rounded_rectangle([280, 280, 520, 315], radius=6, fill=(30, 41, 59, 240))
draw.rectangle([300, 294, 370, 302], fill=(56, 189, 248, 255))

# Floating code lines on screen
colors = [(59, 130, 246), (16, 185, 129), (245, 158, 11), (139, 92, 246), (236, 72, 153)]
for i, y in enumerate(range(330, 460, 20)):
    c = colors[i % len(colors)]
    draw.rectangle([290, y, 350 + (i * 30) % 140, y + 9], fill=(*c, 230))
    draw.rectangle([450 - (i * 15) % 60, y, 510, y + 9], fill=(148, 163, 184, 180))

# Laptop / terminal base
draw.polygon([(230, 500), (570, 500), (600, 550), (200, 550)], fill=(30, 41, 59, 240), outline=(0, 85, 255, 200))

# Floating holographic badges
badges = [
    (140, 220, (239, 68, 68)),
    (660, 200, (56, 189, 248)),
    (110, 400, (245, 158, 11)),
    (670, 420, (16, 185, 129)),
    (400, 150, (99, 102, 241)),
]
for bx, by, col in badges:
    draw.rounded_rectangle([bx - 60, by - 24, bx + 60, by + 24], radius=12, fill=(15, 23, 42, 240), outline=(*col, 220), width=2)
    draw.ellipse([bx - 40, by - 8, bx - 24, by + 8], fill=col)
    draw.rectangle([bx - 14, by - 4, bx + 45, by + 4], fill=(226, 232, 240, 220))

dev_img.save('public/images/tech-developer-illustration-transparent.png', 'PNG')
print('Tech developer illustration created!')

# 2. Project Mockups 1 to 6 (1200x800)
projects = [
    {
        'id': '1',
        'title': 'Chhota Bheem Official & Custom CMS',
        'badge': 'FLAGSHIP ENTERPRISE CMS',
        'category': 'Green Gold Animation Pvt Ltd',
        'accent': (245, 158, 11),
        'bg': (15, 23, 42)
    },
    {
        'id': '2',
        'title': 'Green Gold Corporate Portal',
        'badge': 'STUDIO WEB INFRASTRUCTURE',
        'category': 'Corporate Web Platform',
        'accent': (16, 185, 129),
        'bg': (15, 23, 42)
    },
    {
        'id': '3',
        'title': 'Enterprise Helpdesk & Workflow Engine',
        'badge': 'INTERNAL ERP & WORKFLOWS',
        'category': 'Operational Management',
        'accent': (59, 130, 246),
        'bg': (15, 23, 42)
    },
    {
        'id': '4',
        'title': 'Intelligent Resume Parsing System',
        'badge': 'TALENT RECRUITMENT AUTOMATION',
        'category': 'Automated CV Analysis',
        'accent': (168, 85, 247),
        'bg': (15, 23, 42)
    },
    {
        'id': '5',
        'title': 'Real Estate Enterprise Platform',
        'badge': 'PROPERTY LISTING & CRM',
        'category': 'Anicalls Pvt Ltd',
        'accent': (236, 72, 153),
        'bg': (15, 23, 42)
    },
    {
        'id': '6',
        'title': 'LocalClassyAds Multi-Region Marketplace',
        'badge': 'CLASSIFIED ADS & OTP AUTH',
        'category': 'High-Traffic Classifieds',
        'accent': (14, 165, 233),
        'bg': (15, 23, 42)
    }
]

for p in projects:
    im = Image.new('RGB', (1200, 800), p['bg'])
    d = ImageDraw.Draw(im)
    
    # Technical grid lines
    for x in range(0, 1200, 50):
        d.line([(x, 0), (x, 800)], fill=(255, 255, 255, 10))
    for y in range(0, 800, 50):
        d.line([(0, y), (1200, y)], fill=(255, 255, 255, 10))
        
    # Top browser header bar
    d.rectangle([0, 0, 1200, 56], fill=(10, 14, 23))
    # browser dots
    d.ellipse([24, 22, 36, 34], fill=(239, 68, 68))
    d.ellipse([46, 22, 58, 34], fill=(234, 179, 8))
    d.ellipse([68, 22, 80, 34], fill=(34, 197, 94))
    
    # URL bar
    d.rounded_rectangle([120, 14, 800, 42], radius=8, fill=(30, 41, 59))
    d.rectangle([140, 24, 380, 32], fill=(148, 163, 184))
    
    # Main preview container
    d.rounded_rectangle([60, 90, 1140, 740], radius=16, fill=(17, 24, 39), outline=p['accent'], width=2)
    
    # Header banner inside card
    d.rounded_rectangle([90, 120, 1110, 220], radius=12, fill=(30, 41, 59))
    d.rounded_rectangle([120, 145, 380, 185], radius=6, fill=p['accent'])
    d.rectangle([410, 155, 700, 175], fill=(241, 245, 249))
    
    # Content sections mock
    d.rounded_rectangle([90, 250, 420, 700], radius=10, fill=(24, 34, 56))
    d.rounded_rectangle([450, 250, 1110, 460], radius=10, fill=(24, 34, 56))
    d.rounded_rectangle([450, 490, 760, 700], radius=10, fill=(24, 34, 56))
    d.rounded_rectangle([790, 490, 1110, 700], radius=10, fill=(24, 34, 56))
    
    # Decorative data bars
    for line_idx in range(6):
        d.rounded_rectangle([480, 280 + line_idx * 26, 750 + (line_idx * 40) % 220, 294 + line_idx * 26], radius=4, fill=(71, 85, 105))
    
    out_name = p['id']
    im.save(f'public/images/projects/project-{out_name}.png', 'PNG')
    print(f'Saved project-{out_name}.png')

print('All assets generated successfully!')
