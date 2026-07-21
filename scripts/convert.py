from pathlib import Path
from PIL import Image
from pillow_heif import register_heif_opener

# Enable HEIC support
register_heif_opener()

# Find the project root (parent of the scripts folder)
PROJECT_ROOT = Path(__file__).resolve().parent.parent

INPUT_FOLDER = (
    PROJECT_ROOT
    / "src"
    / "images"
    / "teamPhotos"
    / "decode-heic"
)

OUTPUT_FOLDER = (
    PROJECT_ROOT
    / "src"
    / "images"
    / "teamPhotos"
    / "decode-raw"
)

OUTPUT_FOLDER.mkdir(parents=True, exist_ok=True)

count = 0

print(INPUT_FOLDER)
print(INPUT_FOLDER.exists())
print(list(INPUT_FOLDER.iterdir()))

for heic_file in INPUT_FOLDER.iterdir():
    if heic_file.suffix.lower() == ".heic":
        with Image.open(heic_file) as img:
            img = img.convert("RGB")
            output = OUTPUT_FOLDER / f"{heic_file.stem}.jpg"
            img.save(output, "JPEG", quality=95)
            print(f"✓ {heic_file.name} -> {output.name}")
            count += 1

print(f"\nDone! Converted {count} image(s).")