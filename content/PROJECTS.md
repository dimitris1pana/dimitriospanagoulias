# Projects Overview 
Below is a summary of [my](https://dimitris1pana.github.io/dimitriospanagoulias/) key projects, showcasing their objectives, methodologies, and current applications.
## 🩺 MedicalGR – Medical CRM Platform
**Summary:**  
MedicalGR is a robust, fully-featured **Medical Customer Relationship Management (CRM) system** tailored for private clinics and healthcare professionals. Designed with flexibility and security in mind, it integrates appointment management, patient history tracking, communications, invoicing, and medical imaging.

**Key Features:**
- Clean architecture backend using .NET, Identity Services, Javascript and PostgreSQL
- Customizable roles for doctors, nurses, and front desk staff
- Integration with analytics modules for operational insights
- GDPR-compliant data handling and storage
- Secure cloud deployment on AWS
- Stock management and invoicing capabilities
- .....

**Current Use Case:**  
Deployed at various medical practices & clinics with more than 3000 encrypted invoices per month sent to AADE

**Website:** [medicalgr](https://diskinside.com/medicalgr)

---

## 🧠 NuHealthSoft – Patient-Centric Digital Ecosystem

**Website:** [nuhealthsoft](https://diskinside.com/nuhealthsoft)

**Summary:**  
NuHealthSoft is a modular ecosystem for personalized medicine and patient empowerment. It merges patient history, intelligent appointment scheduling, and guided care plans with AI-assisted data analysis.

**Modules Under Development:**
- **NuTrack:** Tracks patient progress using medical biomarkers and appointment data.
- **NuMind:** Cognitive support tools for mental health tracking and conversational AI agents.
- **NuConnect:** Telemedicine and secure communication integration.

**Research Synergy:**  
Forms the foundation for ongoing experimentation with patient-facing AI tools and aligns with national and EU digital health agendas.

---

## 🧬 Dermacen Analytica – AI-Powered Dermatology Diagnostics

**Summary:**  
Dermacen Analytica is a novel framework for integrating **multi-modal large language models (LLMs)** with domain-specific machine learning pipelines for real-time dermatological assessments.

**Highlights:**
- Combines image analysis, LLMs, and expert rules for mole and skin lesion evaluation
- Transparent diagnostic reports powered by XAI
- Built-in generalization layer for adapting the pipeline to other medical specialties

**Academic Impact:**  
Published in *Elsevier’s International Journal of Medical Informatics*. Developed in conjunction with PhD and postdoctoral research.

---

## 🧠 CognetMD – Cognitive Network Evaluation Toolkit for Medical Domains

**Dataset:** [COGNET-MD on Hugging Face](https://huggingface.co/datasets/DimitriosPanagoulias/COGNET-MD)  
**Published Chapter:** [Springer LNNS 2024, Chapter 38](https://link.springer.com/chapter/10.1007/978-981-97-9559-8_38)

**Summary:**  
**COGNET-MD** is a benchmark dataset and evaluation framework developed for assessing the **correctness of responses from Large Language Models (LLMs)** in medical settings. It provides a curated collection of **Multiple Choice Quizzes (MCQs)** authored and reviewed by medical professionals, specifically targeting LLMs' reasoning accuracy in specialized domains.

**Key Features:**
- Covers five key medical fields: **Psychiatry, Dentistry, Pulmonology, Dermatology**, and **Endocrinology**
- Includes MCQs with **varying difficulty levels** and **multiple correct answers**
- Proposes a **custom scoring scheme** that:
  - Awards **partial credit** for partially correct responses
  - Assigns **full credit** for entirely correct answers
  - **Penalizes** overconfidence by subtracting 0.5 points for each incorrect selection

**Intended Use Cases:**
- Fine-tuning and evaluation of domain-specific LLMs
- Comparative benchmarking across general-purpose and medical-tuned models
- Developing trustworthy, explainable AI systems for medical education and decision support

**Relevance:**  
CognetMD plays a foundational role in the evaluation loop of **Dermacen Analytica** and supports broader research efforts in **explainable medical AI and model validation**. It serves as a gold-standard dataset for future publications and applications involving LLM correctness in critical domains.

---

## 🎨 Pinxel – AI Literacy-Based Personalization Engine

**Summary:**  
Pinxel is a personalization engine that adapts content and interaction styles based on a user’s AI literacy. It is designed to ensure inclusivity and engagement in systems where AI plays a central role.

**Core Mechanisms:**
- Uses adaptive NLP models to adjust explanations
- Dynamically tunes UI/UX for different user personas
- Includes feedback loops for continuous learning

**Applications:**
- Deployed experimentally in NuHealthSoft interfaces
- Used to evaluate explainability and trust in medical LLMs

---

## 📊 Evaluation of Medical LLMs

**Summary:**  
Systematic evaluation and fine-tuning of medical large language models for accuracy, trustworthiness, and explainability in healthcare environments.

**Methodology:**
- Hybrid pipeline combining classical ML classifiers, explainability layers (e.g., SHAP, LIME), and GPT-based reasoning
- Focused on benchmark tasks in diagnosis, triage, and medical Q&A
- Evaluated against clinician feedback and gold-standard datasets

**Outcomes:**  
Supports the fine-tuning component of Dermacen Analytica and contributes to ongoing discussions in explainable medical AI.

---

## 🚀 Vision Ahead

[LinkedIn](https://www.linkedin.com/in/dimitris-panagoulias-17a05217/) | [Website](https://diskinside.com) | [GitHub](https://github.com/dimitris1pana)