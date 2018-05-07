import {
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_AFTER_REPAIR_VALUE,
  NUMBER_SYSTEM_DECIMAL,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_REPAIR_COSTS,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_PURCHASE_PRICE
} from '../constants'

export const getAnnualConstantExpensesGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualConstantExpensesGrowth = futureProjections[
    INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
  ]
  return annualConstantExpensesGrowth
    ? parseFloat(annualConstantExpensesGrowth).toFixed(4)
    : 0
}

export const getAfterRepairValue = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const propertyValue = initialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
  return propertyValue
    ? parseFloat(propertyValue, NUMBER_SYSTEM_DECIMAL).toFixed(2)
    : 0
}

export const getAnnualPropertyValueGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualPropertyValueGrowth = futureProjections[
    INPUT_ID_PROPERTY_VALUE_GROWTH
  ]

  return annualPropertyValueGrowth
    ? parseFloat(annualPropertyValueGrowth).toFixed(4)
    : 0
}

export const getAnnualIncomeGrowth = inputContent => {
  const futureProjections = inputContent[TITLE_FUTURE_PROJECTIONS]

  const annualIncomeGrowth = futureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]

  return annualIncomeGrowth
    ? parseFloat(annualIncomeGrowth).toFixed(4)
    : 0
}

export const getAmortizationPeriod = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const amortizationPeriod = initialPurchase[INPUT_ID_AMORTIZATION_PERIOD]

  return amortizationPeriod
    ? parseInt(amortizationPeriod)
    : 0
}

export const getDownPayment = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const downPayment = initialPurchase[INPUT_ID_DOWN_PAYMENT]

  return downPayment
    ? parseFloat(downPayment).toFixed(2)
    : 0
}

export const getRepairCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const repairCosts = initialPurchase[INPUT_ID_REPAIR_COSTS]
  return repairCosts
    ? parseFloat(repairCosts).toFixed(2)
    : 0
}

export const getClosingCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const closingCosts = initialPurchase[INPUT_ID_CLOSING_COSTS]

  return closingCosts
    ? parseFloat(closingCosts).toFixed(2)
    : 0
}

export const getOtherCosts = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const otherCosts = initialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]

  return otherCosts
    ? parseFloat(otherCosts).toFixed(2)
    : 0
}

export const getPurchasePrice = inputContent => {
  const initialPurchase = inputContent[TITLE_INITIAL_PURCHASE]

  const purchasePrice = initialPurchase[INPUT_ID_PURCHASE_PRICE]

  return purchasePrice
    ? parseFloat(purchasePrice).toFixed(2)
    : 0
}