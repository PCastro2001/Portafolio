export interface BankConfig {
  id: string;
  name: string;
  minDividendRatio: number; // e.g. 0.25 (25%)
  maxDividendRatio: number; // e.g. 0.33 (33%)
  averageInterestRate: number; // e.g. 4.8% CAE
  maxYears: number; // e.g. 20 o 25 o 30
}

export interface SubsidyConfig {
  type: string; // DS1 Tramo 1, DS1 Tramo 2, DS1 Tramo 3, DS19
  maxPropertyValUF: number; // Valor máximo de la vivienda en UF
  savingsRequiredUF: number; // Ahorro mínimo requerido en UF
  baseSubsidyUF: number; // Subsidio base recibido en UF
  averageMinvuCutoffScore: number; // Puntaje de corte estimado
}

export const bankList: BankConfig[] = [
  {
    id: "banco-estado",
    name: "BancoEstado",
    minDividendRatio: 0.25,
    maxDividendRatio: 0.30,
    averageInterestRate: 4.5,
    maxYears: 30
  },
  {
    id: "banco-santander",
    name: "Banco Santander",
    minDividendRatio: 0.25,
    maxDividendRatio: 0.33,
    averageInterestRate: 4.9,
    maxYears: 25
  },
  {
    id: "banco-de-chile",
    name: "Banco de Chile",
    minDividendRatio: 0.25,
    maxDividendRatio: 0.33,
    averageInterestRate: 4.8,
    maxYears: 25
  },
  {
    id: "banco-bci",
    name: "Banco BCI",
    minDividendRatio: 0.25,
    maxDividendRatio: 0.33,
    averageInterestRate: 5.0,
    maxYears: 30
  },
  {
    id: "banco-itau",
    name: "Banco Itaú",
    minDividendRatio: 0.25,
    maxDividendRatio: 0.30,
    averageInterestRate: 4.7,
    maxYears: 30
  }
];

export const subsidyList: SubsidyConfig[] = [
  {
    type: "DS1 Tramo 1 (Ex Título I Tramo 1)",
    maxPropertyValUF: 1100,
    savingsRequiredUF: 30,
    baseSubsidyUF: 600,
    averageMinvuCutoffScore: 450
  },
  {
    type: "DS1 Tramo 2 (Ex Título I Tramo 2)",
    maxPropertyValUF: 1600,
    savingsRequiredUF: 40,
    baseSubsidyUF: 350,
    averageMinvuCutoffScore: 320
  },
  {
    type: "DS1 Tramo 3 (Ex Título II)",
    maxPropertyValUF: 2200,
    savingsRequiredUF: 80,
    baseSubsidyUF: 250,
    averageMinvuCutoffScore: 280
  },
  {
    type: "DS19 (Integración Social y Territorial)",
    maxPropertyValUF: 2200,
    savingsRequiredUF: 40,
    baseSubsidyUF: 125, // Variable por zona y precio
    averageMinvuCutoffScore: 0 // Postulación directa vía inmobiliaria
  }
];

export const financialConstants = {
  defaultDividendRatio: 0.25, // 25% regla del dividendo
  maxDividendRatioLimit: 0.33, // 33% tope legal bancario
  minSalaryCLPForCredits: 400000, // Sueldo mínimo para evaluar crédito
};
