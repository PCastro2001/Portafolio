/**
 * Formatea un número en pesos chilenos (CLP) de forma limpia.
 * Ejemplo: 1250000 -> $1.250.000
 */
export function formatCLP(amount: number): string {
  const rounded = Math.round(amount);
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(rounded);
}

/**
 * Formatea un número en UF (Unidades de Fomento) con decimales apropiados.
 * Ejemplo: 1250.456 -> 1.250,46 UF
 */
export function formatUF(amount: number, decimals: number = 2): string {
  return new Intl.NumberFormat("es-CL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount) + " UF";
}

/**
 * Sanitiza números decimales flotantes previniendo errores de precisión típicos de JS.
 */
export function sanitizeFloat(value: number, decimals: number = 4): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

/**
 * Calcula el dividendo mensual bancario máximo permitido basado en una renta mensual líquida
 * y un porcentaje de restricción (ej: 25% o 33%).
 */
export function calculateMaxDividend(salary: number, ratio: number = 0.25): number {
  if (salary <= 0) return 0;
  return sanitizeFloat(salary * ratio, 0);
}

/**
 * Calcula la brecha o déficit financiero.
 */
export function calculateGap(required: number, available: number): number {
  const diff = required - available;
  return diff > 0 ? diff : 0;
}
