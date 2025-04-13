const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

// Habilitar CORS para permitir solicitudes desde tu aplicación React
app.use(cors());

// Para analizar solicitudes JSON
app.use(express.json());

// Endpoint para el formulario de contacto
app.post('/api/contact', async (req, res) => {
  try {
    // URL del script de Google
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBUq_hmNv9eIsSYBL65GBBewDbsoHjmCM4qo3P_jGda8b1EZ3F7fyOUJ52f8PRVkYcwg/exec?gid=86537127';
    
    console.log('Datos recibidos del formulario de contacto:', req.body);
    
    // Hacer la solicitud al script de Google usando los datos recibidos
    const response = await axios.post(
      SCRIPT_URL,
      req.body,
      { headers: { 'Content-Type': 'application/json' } }
    );
    
    console.log('Respuesta de Google Script:', response.data);
    
    // Devolver la respuesta a la aplicación React
    res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      data: response.data 
    });
  } catch (error) {
    console.error('Error al enviar datos a Google:', error);
    
    // Devolver el error a la aplicación React
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Endpoint para el formulario de reserva
app.post('/api/booking', async (req, res) => {
  try {
    // URL del script de Google
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBUq_hmNv9eIsSYBL65GBBewDbsoHjmCM4qo3P_jGda8b1EZ3F7fyOUJ52f8PRVkYcwg/exec?gid=0';
    
    console.log('Datos recibidos del formulario de reserva:', req.body);
    
    // Hacer la solicitud al script de Google usando los datos recibidos
    const response = await axios.post(
      SCRIPT_URL,
      req.body,
      { headers: { 'Content-Type': 'application/json' } }
    );
    
    console.log('Respuesta de Google Script:', response.data);
    
    // Devolver la respuesta a la aplicación React
    res.status(200).json({ 
      success: true, 
      message: 'Reserva enviada correctamente',
      data: response.data 
    });
  } catch (error) {
    console.error('Error al enviar datos de reserva a Google:', error);
    
    // Devolver el error a la aplicación React
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Ruta simple para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor intermedio para Hotel Sierra Nevada funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor intermedio ejecutándose en el puerto ${PORT}`);
});