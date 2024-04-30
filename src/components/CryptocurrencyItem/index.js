// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyList} = props
  console.log(currencyList)
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyList

  return (
    <li className="item-container">
      <div className="currency-info">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <p>{usdValue}</p>
      <p>{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
