# 📝 Text Checker Web App
⚠️ This project is currently in development. More features and refinements are being added to enhance functionality and improve user experience. ⚠️

This is a Flask-based web application that allows users to analyze and correct text grammar and spelling. Users can either manually input text or upload PDF/PPTX files for correction. The application uses LanguageTool for spelling correction and Grammarly's CoEdit model for grammar correction.

## ✨ Features
- ✅ Spell check using LanguageTool
- ✅ Grammar correction using Grammarly's CoEdit model
- 📄 PDF and PPTX text extraction
- 📥 Download corrected text as a PDF
- 🎨 User-friendly interface with responsive design

## 🔧 Installation

### 📌 Prerequisites
Ensure you have Python installed (recommended version: 3.8 or higher). You also need `pip` to install dependencies.

### 📂 Clone the Repository
```bash
git clone https://github.com/yourusername/text-checker.git
cd text-checker
```

### ⚙️ Create and Activate Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate  # On Windows
```

### 📦 Install Dependencies
Run the following command to install all required libraries:
```bash
pip install -r requirements.txt
```

#### 📜 Required Libraries
This project uses the following libraries:
```txt
Flask
pdfplumber
python-pptx
reportlab
transformers
language-tool-python
torch
```

## 🚀 Running the Application
To start the Flask server, run:
```bash
python app.py
```
The application will be available at `http://127.0.0.1:5000/`.

## 🎯 Usage
1. 🖊️ Open the web application in a browser.
2. 📌 Enter text manually or upload a PDF/PPTX file.
3. 🔍 Click "Submit" to analyze and correct the text.
4. 📜 View the corrected text and optionally download it as a PDF.

## 📁 Project Structure
```
text-checker/
│-- static/
│   │-- styles.css
│   │-- results.css
│-- templates/
│   │-- index.html
│   │-- result.html
│-- app.py
│-- requirements.txt
│-- README.md
```

## 👩‍💻 Contributors
- **Navya Singhal**


