import type { ComparisonData } from './types'

/**
 * Creates mock/empty data structure for the dashboard
 * This allows the UI to work without real data files
 */
export function createMockData(): ComparisonData {
  const currentYear = new Date().getFullYear()
  const startYear = currentYear - 5
  const baseYear = currentYear
  const forecastYear = currentYear + 5

  return {
    metadata: {
      market_name: 'Sample Market',
      market_type: 'Sample',
      industry: 'General',
      years: Array.from({ length: forecastYear - startYear + 1 }, (_, i) => startYear + i),
      start_year: startYear,
      base_year: baseYear,
      forecast_year: forecastYear,
      historical_years: [startYear, startYear + 1, startYear + 2, startYear + 3, baseYear - 1],
      forecast_years: Array.from({ length: forecastYear - baseYear + 1 }, (_, i) => baseYear + i),
      currency: 'USD',
      value_unit: 'Million',
      volume_unit: 'Units',
      has_value: true,
      has_volume: true
    },
    dimensions: {
      geographies: {
        global: ['Global'],
        regions: [],
        countries: {},
        all_geographies: ['Global']
      },
      segments: {
        'By Product Type': {
          type: 'flat',
          items: [
            'Builder/Sculpture Gels (hard gels, structure gels)',
            'Soak-Off Gel Polish (colour gels)',
            'Base Coat Gels',
            'Top Coat Gels (gloss, matte, chrome, no-wipe)',
            'Treatment/Strengthening Gels',
            'Gel Extensions (tips, forms)'
          ],
          hierarchy: {}
        },
        'By Curing Technology': {
          type: 'flat',
          items: [
            'UV Light Cured',
            'LED Light Cured',
            'Dual Cure (UV + LED compatible)'
          ],
          hierarchy: {}
        },
        'By Formulation / Ingredient Profile': {
          type: 'flat',
          items: [
            'Standard Formulation',
            'HEMA-Free',
            'Vegan & Cruelty-Free',
            'X-Free Formulations (5-free, 7-free, 10-free)',
            'Hypoallergenic / Dermatologically Tested'
          ],
          hierarchy: {}
        },
        'By End User': {
          type: 'flat',
          items: [
            'Professional / Salon Use',
            'DIY / At-Home Consumer',
            'Training Academies & Beauty Schools'
          ],
          hierarchy: {}
        },
        'By Sales Channel': {
          type: 'flat',
          items: [
            'Direct-to-Professional (brand distributor model)',
            'Indirect Professional Beauty Wholesale',
            'Online B2B Platforms',
            'Online B2C / DTC (Amazon, brand websites)',
            'Offline Retail Stores'
          ],
          hierarchy: {}
        },
        'By Application': {
          type: 'flat',
          items: [
            'Natural Nail Overlay',
            'Nail Extensions',
            'Nail Art & Design',
            'Pedicure Applications',
            'Repair & Reinforcement Applications'
          ],
          hierarchy: {}
        }
      }
    },
    data: {
      value: {
        geography_segment_matrix: []
      },
      volume: {
        geography_segment_matrix: []
      }
    }
  }
}

