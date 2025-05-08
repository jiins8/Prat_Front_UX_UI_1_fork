// useFormStatus es un hook de React que nos permite acceder al estado de un formulario
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  console.log('Estado de envío:', { pending });
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

/**
 * Responde a 4 de las siguientes preguntas:
 * ¿Qué sucede si intentamos enviar el formulario dos veces rápidamente?
 * ¿Se deshabilita el botón correctamente?
 * ¿Cómo afecta esto a la experiencia del usuario?
 * ¿Cómo podríamos mejorar el feedback visual durante el envío?
 * ¿Podemos agregar animaciones o estilos adicionales?
 * ¿Qué otros estados podríamos mostrar además de "Submitting..."?
 * ¿Qué sucede con el estado pending después de que el formulario se envía?
 * ¿Se restaura automáticamente a false?
 * ¿Necesitamos limpiar el estado manualmente?
 * ¿Cómo podríamos hacer este componente más reutilizable?
 * ¿Podemos agregar props para personalizar el texto del botón?
 * ¿Podemos agregar estilos personalizados?
 * ¿Podemos manejar diferentes tipos de envío (submit, reset, etc.)?
 */