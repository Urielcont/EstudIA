
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

function Matematicas() {
  const [pregunta, setPregunta] = useState(""); 
  const [historial, setHistorial] = useState([]);

  // Inicializar el cliente de Google Generative AI con la clave de API
  const genAI = new GoogleGenerativeAI("AIzaSyDjMA8LHnM5GE1K6todT08HUCEVWK6uWBU");

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];
  const manejarCambio = (event) => {
    setPregunta(event.target.value);
  };

  const enviarPregunta = async (event) => {
    event.preventDefault();

    if (pregunta.trim() === "") {
      alert("Por favor, escribe una pregunta.");
      return;
    }

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings, systemInstruction: "Tu eres un amigo que ayuda a estudiar solo matematicas de la escuela, y no puedes resolver problemas solo crear un ejercicio para ayudar al desarrollo, puedes poner ejercicios y dar opciones pero no resolverselos al usuario", });
      const result = await model.generateContent(pregunta);
      const responseText = await result.response.text();

      // Actualizar el historial con la nueva pregunta y respuesta
      setHistorial((prevHistorial) => [
        ...prevHistorial,
        { pregunta: pregunta, respuesta: responseText }
      ]);
    } catch (error) {
      console.error("Error generando contenido:", error);
      setHistorial((prevHistorial) => [
        ...prevHistorial,
        { pregunta: pregunta, respuesta: "Hubo un problema al generar la respuesta." }
      ]);
    }

    // Limpiar el campo de la pregunta después de enviarla
    setPregunta("");
  };

  return (
    <div style={styles.contenedor}>
      <h1>¡Bienvenido a la clase!</h1>
      <p>Escribe tu pregunta abajo:</p>

      <form onSubmit={enviarPregunta}>
        <textarea
          value={pregunta}
          onChange={manejarCambio}
          placeholder="Escribe tu pregunta aquí..."
          style={styles.textarea}
        />
        <br />
        <button type="submit" style={styles.boton}>Enviar Pregunta</button>
      </form>

      {/* Mostrar el historial de preguntas y respuestas */}
      <div style={styles.historial}>
        {historial.map((item, index) => (
          <div key={index} style={styles.interaccion}>
            <p><strong>Pregunta {index + 1}:</strong> {item.pregunta}</p>
            <p><strong>Respuesta:</strong> {item.respuesta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos en línea
const styles = {
  contenedor: {
    textAlign: "center",
    marginTop: "50px",
  },
  textarea: {
    width: "300px",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
  },
  boton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  historial: {
    marginTop: "20px",
    textAlign: "left",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  interaccion: {
    marginBottom: "10px",
    paddingBottom: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default Matematicas;
