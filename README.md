# 🧭 Personalized Travel Planner using Fine-Tuned LLMs

This project explores how **Large Language Models (LLMs)** can generate **personalized travel itineraries** tailored to user preferences. By combining real-world data from **Google Maps** and synthetic data generated using **Gemini**, we fine-tuned and optimized a compact model to plan customized trips across Tunisia.

---

## 🚀 Overview

We fine-tuned a quantized version of Google’s Gemma 2B-IT model — for personalized trip generation.  
The model was integrated into a **Retrieval-Augmented Generation (RAG)** system powered by **ChromaDB**, which matches user embeddings with relevant destinations and activities creating [**Planned.AI Gemma 2B-IT Quantized**](https://huggingface.co/SadokBarbouche/planned.AI-gemma-2b-it-quantized).

A lightweight **Flask API** exposes the LLM capabilities, while a **demo interface** (see below) showcases the trip planning workflow in action.

🎥 **Demo:** 
<video style="max-width:100%; height:auto;" controls>
  <source src="docs/demo.mp4" type="video/mp4">
</video>


---

## 🧠 Key Features

- **Fine-tuned LLM for trip planning** using LoRA (Low-Rank Adaptation) and MLX for efficient macOS training.  
- **Quantized model** (float16) for lightweight and fast inference.  
- **Retrieval-Augmented Generation (RAG)** with ChromaDB for context-aware recommendations.  
- **Synthetic data generation** using Gemini for enhanced coverage and coherence.  
- **Containerized deployment** using Docker for reproducibility and scalability.

---

## 🧩 Tech Stack

- **Modeling:** Gemma 2B-IT, LoRA, MLX, Hugging Face SFT Trainer  
- **Data Layer:** ChromaDB, Sentence Transformers  
- **APIs & Services:** Flask, LangChain  
- **Deployment:** Docker, Hugging Face Hub  
