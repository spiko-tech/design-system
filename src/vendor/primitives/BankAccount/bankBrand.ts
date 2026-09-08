import { Option, pipe } from 'effect';
import { getBic } from './getBic.js';

/**
 * A recognisable consumer-facing bank brand, keyed off the BIC.
 */
export type BankBrand = {
  readonly id: string;
  readonly name: string;
  readonly fallback?: { readonly color: string; readonly monogram: string };
};

const BAAS_BICS: ReadonlySet<string> = new Set(['SMOE', 'SWNB', 'MPAY', 'TRZO']);

const BANK_BRANDS_BY_BIC: ReadonlyMap<string, BankBrand> = new Map([
  // CIC and Crédit Mutuel share the CMCI institution code and differ only by location code.
  ['CMCIFRPP', { id: 'cic', name: 'CIC' }],
  ['CMCI', { id: 'credit-mutuel', name: 'Crédit Mutuel' }],

  ['QNTO', { id: 'qonto', name: 'Qonto' }],
  ['BOUS', { id: 'boursobank', name: 'BoursoBank' }],
  ['BNPA', { id: 'bnp-paribas', name: 'BNP Paribas' }],
  ['AGRI', { id: 'credit-agricole', name: 'Crédit Agricole' }],
  ['CRLY', { id: 'lcl', name: 'LCL' }],
  ['SOGE', { id: 'societe-generale', name: 'Société Générale' }],
  ['CEPA', { id: 'caisse-depargne', name: "Caisse d'Épargne" }],
  ['REVO', { id: 'revolut', name: 'Revolut' }],
  ['CCBP', { id: 'banque-populaire', name: 'Banque Populaire' }],
  ['MEMO', { id: 'memo-bank', name: 'Memo Bank' }],
  ['FTNO', { id: 'fortuneo', name: 'Fortuneo' }],
  ['SNNN', { id: 'shine', name: 'Shine' }],
  ['PSST', { id: 'la-banque-postale', name: 'La Banque Postale' }],
  ['TRWI', { id: 'wise', name: 'Wise' }],
  ['CCOP', { id: 'credit-cooperatif', name: 'Crédit Coopératif' }],
  ['NTSB', { id: 'n26', name: 'N26' }],
  ['BGLL', { id: 'bgl-bnp-paribas', name: 'BGL BNP Paribas' }],
  ['GEBA', { id: 'bnp-paribas-fortis', name: 'BNP Paribas Fortis' }],
  ['GKCC', { id: 'belfius', name: 'Belfius' }],
  ['AXAB', { id: 'axa-banque', name: 'AXA Banque' }],

  // No square logo mark published anywhere, so these render as a monogram.
  ['TRBK', { id: 'trade-republic', name: 'Trade Republic', fallback: { color: '#1A1A1A', monogram: 'TR' } }],
  ['BRED', { id: 'bred', name: 'BRED Banque Populaire', fallback: { color: '#005DAA', monogram: 'BR' } }],
  ['CMBR', { id: 'credit-mutuel-arkea', name: 'Crédit Mutuel Arkéa', fallback: { color: '#E2001A', monogram: 'CMA' } }],
]);

export const getBankBrand = (details: Record<string, unknown>): Option.Option<BankBrand> =>
  pipe(
    getBic(details),
    Option.map((bic) => bic.replace(/\s/g, '').toUpperCase()),
    Option.filter((bic) => !BAAS_BICS.has(bic.slice(0, 4))),
    Option.flatMap((bic) =>
      Option.fromNullable(BANK_BRANDS_BY_BIC.get(bic.slice(0, 8)) ?? BANK_BRANDS_BY_BIC.get(bic.slice(0, 4)))
    )
  );
