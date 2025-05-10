// Logo interactivo
document.querySelector('.logo').addEventListener('mouseenter', function() {
    this.querySelector('.logo-icon').style.transform = 'scale(1.1)';
    this.querySelector('h1').style.color = '#f97316';
});

document.querySelector('.logo').addEventListener('mouseleave', function() {
    this.querySelector('.logo-icon').style.transform = 'scale(1)';
    this.querySelector('h1').style.color = '#1e3a8a';
});

// Calculadora de contratación
document.getElementById('calcularBtn')?.addEventListener('click', function() {
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const presupuesto = parseInt(document.getElementById('presupuesto').value) || 0;
    
    if (horas > 0 && presupuesto > 0) {
        const costeTotal = horas * presupuesto * 1.21; // IVA incluido
        document.getElementById('costeTotal').textContent = costeTotal.toFixed(2);
        document.getElementById('resultadoCalculo').style.display = 'block';
    } else {
        alert('Por favor, introduce valores válidos para horas y presupuesto.');
    }
});

// Validación de DNI/NIE español
document.getElementById('contratacionForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dni = document.getElementById('dni').value.toUpperCase();
    const dniRegex = /^[XYZ]?\d{7,8}[A-Z]$/;
    
    if (!dniRegex.test(dni)) {
        alert('Por favor, introduce un DNI o NIE español válido.');
        return;
    }
    
    alert('Solicitud enviada correctamente. Nos pondremos en contacto contigo en breve.');
    this.reset();
    document.getElementById('resultadoCalculo').style.display = 'none';
});

// Chatbot functionality
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const quickQuestions = document.querySelectorAll('.quick-question');

// Mostrar/ocultar chatbot
chatbotBtn?.addEventListener('click', function() {
    chatbotWindow.style.display = 'flex';
});

chatbotClose?.addEventListener('click', function() {
    chatbotWindow.style.display = 'none';
});

// Funciones del chatbot...
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
        addUserMessage(message);
        chatbotInput.value = '';
        
        setTimeout(() => {
            addBotMessage("Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto.");
        }, 1000);
    }
}

function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function addBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Smooth scrolling para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});