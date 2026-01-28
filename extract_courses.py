#!/usr/bin/env python3
import sys
try:
    import PyPDF2
    has_pypdf2 = True
except ImportError:
    has_pypdf2 = False

try:
    import pdfplumber
    has_pdfplumber = True
except ImportError:
    has_pdfplumber = False

def extract_with_pypdf2(pdf_path):
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
    return text

def extract_with_pdfplumber(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text

if __name__ == "__main__":
    pdf_path = "/Users/jonahortega/Downloads/school work/AUP Course Catalog 22-Jan-2026.pdf"
    
    if has_pdfplumber:
        text = extract_with_pdfplumber(pdf_path)
    elif has_pypdf2:
        text = extract_with_pypdf2(pdf_path)
    else:
        print("ERROR: No PDF library available", file=sys.stderr)
        sys.exit(1)
    
    print(text)
