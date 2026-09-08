import { Schema } from 'effect';

export const Industry = Schema.Literal(
  'AgricultureAndFoodProcessing',
  'ArtsMediaAndEntertainment',
  'CasinosAndGambling',
  'Construction',
  'Cryptocurrency',
  'DefenseAndMilitaryIndustry',
  'Education',
  'EnergyAndUtilities',
  'FinancialServices',
  'FoodAndLodging',
  'Government',
  'HealthProfessions',
  'HoldingCompany',
  'IndustryAndManufacturing',
  'Mining',
  'NonProfit',
  'ProfessionalServices',
  'RealEstate',
  'RetailTradeAutomotive',
  'RetailTradeJewelryAntiques',
  'RetailTradeOthers',
  'SportAndTourism',
  'TechnologyAndComputing',
  'Transportation'
);
export type Industry = typeof Industry.Type;

export const Sector = Schema.Literal(
  ...Industry.literals,
  'Politics', // not for organizations
  'Retired', // not for organization
  'Student' // not for organization
);
export type Sector = typeof Sector.Type;
