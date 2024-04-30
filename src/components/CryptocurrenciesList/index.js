// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currencyData: []}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const data = await response.json()
    console.log(data)

    const convertedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({currencyData: convertedData, isLoading: false})
  }

  render() {
    const {isLoading, currencyData} = this.state
    console.log(isLoading)
    console.log(currencyData)

    return (
      <div className="bg-list">
        <h1 className="bg-title">CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bg-logo"
        />

        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="bg-item-container">
            <li className="bg-item-header">
              <h3 className="bg-coin-type">Coin Type</h3>
              <h3 className="bg-usd">USD</h3>
              <h3 className="bg-euro">EURO</h3>
            </li>
            {currencyData.map(eachData => (
              <CryptocurrencyItem currencyList={eachData} key={eachData.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
