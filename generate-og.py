# #!/usr/bin/env python3
# """Generate OG image for Jyotiska Biswas Portfolio"""

# from PIL import Image, ImageDraw, ImageFont
# import math

# WIDTH = 1200
# HEIGHT = 630

# # Create image with dark gradient background
# img = Image.new('RGB', (WIDTH, HEIGHT), '#0F172A')
# draw = ImageDraw.Draw(img)

# # Draw gradient background
# for y in range(HEIGHT):
#     r = int(15 + (y / HEIGHT) * 10)
#     g = int(23 + (y / HEIGHT) * 15)
#     b = int(42 + (y / HEIGHT) * 30)
#     draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))

# # Draw decorative circles/blobs
# def draw_circle(draw, cx, cy, radius, color):
#     for i in range(radius, 0, -1):
#         alpha = int(255 * (i / radius) * 0.15)
#         r, g, b = color
#         draw.ellipse(
#             [cx - i, cy - i, cx + i, cy + i],
#             fill=(r, g, b)
#         )

# # Blue accent blob top-right
# for i in range(180, 0, -1):
#     opacity_factor = (i / 180) * 0.08
#     r = int(37 * opacity_factor + 15)
#     g = int(99 * opacity_factor + 23)
#     b = int(235 * opacity_factor + 42)
#     draw.ellipse([900 - i, 50 - i, 900 + i, 50 + i], fill=(r, g, b))

# # Purple accent blob bottom-left
# for i in range(150, 0, -1):
#     opacity_factor = (i / 150) * 0.08
#     r = int(124 * opacity_factor + 15)
#     g = int(58 * opacity_factor + 23)
#     b = int(237 * opacity_factor + 42)
#     draw.ellipse([200 - i, 550 - i, 200 + i, 550 + i], fill=(r, g, b))

# # Small blue blob mid-left
# for i in range(100, 0, -1):
#     opacity_factor = (i / 100) * 0.06
#     r = int(37 * opacity_factor + 15)
#     g = int(99 * opacity_factor + 23)
#     b = int(235 * opacity_factor + 42)
#     draw.ellipse([80 - i, 200 - i, 80 + i, 200 + i], fill=(r, g, b))

# # Draw grid pattern (subtle)
# for x in range(0, WIDTH, 60):
#     draw.line([(x, 0), (x, HEIGHT)], fill=(30, 41, 59), width=1)
# for y in range(0, HEIGHT, 60):
#     draw.line([(0, y), (WIDTH, y)], fill=(30, 41, 59), width=1)

# # Draw a subtle border
# draw.rectangle([0, 0, WIDTH - 1, HEIGHT - 1], outline=(37, 99, 235), width=2)

# # Draw accent line at top
# for x in range(WIDTH):
#     t = x / WIDTH
#     r = int(37 + (124 - 37) * t)
#     g = int(99 + (58 - 99) * t)
#     b = int(235 + (237 - 235) * t)
#     draw.line([(x, 0), (x, 4)], fill=(r, g, b))

# # Load fonts
# try:
#     font_bold_large = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 64)
#     font_bold_medium = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 32)
#     font_regular = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 24)
#     font_mono = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf", 20)
#     font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
# except:
#     font_bold_large = ImageFont.load_default()
#     font_bold_medium = ImageFont.load_default()
#     font_regular = ImageFont.load_default()
#     font_mono = ImageFont.load_default()
#     font_small = ImageFont.load_default()

# # Draw "Hello, I'm" text
# greeting = "Hello, I'm"
# bbox = draw.textbbox((0, 0), greeting, font=font_regular)
# tw = bbox[2] - bbox[0]
# x = (WIDTH - tw) // 2
# draw.text((x, 140), greeting, fill=(96, 165, 250), font=font_regular)

# # Draw name "Jyotiska Biswas" with gradient effect
# name = "Jyotiska Biswas"
# bbox = draw.textbbox((0, 0), name, font=font_bold_large)
# tw = bbox[2] - bbox[0]
# th = bbox[3] - bbox[1]
# name_x = (WIDTH - tw) // 2
# name_y = 185

# # Create gradient text effect for the name
# name_img = Image.new('RGBA', (tw + 20, th + 20), (0, 0, 0, 0))
# name_draw = ImageDraw.Draw(name_img)

# # Draw text multiple times for gradient effect
# for i, char in enumerate(name):
#     char_bbox = draw.textbbox((0, 0), name[:i + 1], font=font_bold_large)
#     char_x = char_bbox[2] - draw.textbbox((0, 0), char, font=font_bold_large)[2] + draw.textbbox((0, 0), char, font=font_bold_large)[0]
#     t = i / max(len(name) - 1, 1)
#     # Blue to purple gradient
#     r = int(96 + (167 - 96) * t)
#     g = int(165 + (139 - 165) * t)
#     b = int(250 + (250 - 250) * t)
#     # Draw on main image directly
#     pass

# # Simpler approach - draw name in gradient-like color
# draw.text((name_x, name_y), name, fill=(130, 155, 250), font=font_bold_large)

# # Draw subtitle
# subtitle = "Full Stack Developer  |  ML Engineer  |  Problem Solver"
# bbox = draw.textbbox((0, 0), subtitle, font=font_regular)
# tw = bbox[2] - bbox[0]
# x = (WIDTH - tw) // 2
# draw.text((x, 280), subtitle, fill=(148, 163, 184), font=font_regular)

# # Draw divider line
# line_width = 300
# line_x = (WIDTH - line_width) // 2
# for x_pos in range(line_x, line_x + line_width):
#     t = (x_pos - line_x) / line_width
#     r = int(37 + (124 - 37) * t)
#     g = int(99 + (58 - 99) * t)
#     b = int(235 + (237 - 235) * t)
#     draw.line([(x_pos, 340), (x_pos, 342)], fill=(r, g, b))

# # Draw skills tags
# skills = ["Python", "React", "Flask", "TensorFlow", "MongoDB", "Web3", "JavaScript", "Node.js"]
# tag_y = 375
# total_width = 0
# tag_widths = []
# tag_padding = 16
# tag_gap = 12

# for skill in skills:
#     bbox = draw.textbbox((0, 0), skill, font=font_small)
#     w = bbox[2] - bbox[0] + tag_padding * 2
#     tag_widths.append(w)
#     total_width += w + tag_gap

# total_width -= tag_gap
# tag_x = (WIDTH - total_width) // 2

# for i, skill in enumerate(skills):
#     w = tag_widths[i]
#     h = 36
#     # Draw rounded tag background
#     draw.rounded_rectangle(
#         [tag_x, tag_y, tag_x + w, tag_y + h],
#         radius=18,
#         fill=(30, 41, 59),
#         outline=(55, 75, 100),
#         width=1
#     )
#     # Draw text centered in tag
#     bbox = draw.textbbox((0, 0), skill, font=font_small)
#     tw = bbox[2] - bbox[0]
#     th = bbox[3] - bbox[1]
#     text_x = tag_x + (w - tw) // 2
#     text_y = tag_y + (h - th) // 2 - 2
#     draw.text((text_x, text_y), skill, fill=(148, 163, 184), font=font_small)
#     tag_x += w + tag_gap

# # Draw bottom section - website URL and education
# url = "www.jyotiska.tech"
# bbox = draw.textbbox((0, 0), url, font=font_mono)
# tw = bbox[2] - bbox[0]
# x = (WIDTH - tw) // 2
# draw.text((x, 470), url, fill=(96, 165, 250), font=font_mono)

# # Draw education info
# edu = "B.Tech IT  •  Kalyani Government Engineering College  •  SIH 2025 Finalist"
# bbox = draw.textbbox((0, 0), edu, font=font_small)
# tw = bbox[2] - bbox[0]
# x = (WIDTH - tw) // 2
# draw.text((x, 510), edu, fill=(100, 116, 139), font=font_small)

# # Draw bottom accent dots
# dot_y = 570
# dot_colors = [(37, 99, 235), (124, 58, 237), (5, 150, 105)]
# dot_x_start = (WIDTH - (len(dot_colors) * 12 + (len(dot_colors) - 1) * 16)) // 2
# for i, color in enumerate(dot_colors):
#     cx = dot_x_start + i * 28 + 6
#     draw.ellipse([cx - 4, dot_y - 4, cx + 4, dot_y + 4], fill=color)

# # Save the image
# output_path = "/home/jyotiska/Desktop/normal port folio/Portfolio/public/og-image.png"
# img.save(output_path, "PNG", quality=95)
# print(f"OG image saved to {output_path}")
# print(f"Image size: {img.size}")
