import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAppStore } from '../store'

const useFetchConversion = (url) => {

  const { fromCurrency, toCurrency, firstAmount } = useAppStore()
  const [resultCurrency, setResultCurrency] = useState(0)
  const [error, setError] = useState('')
      
  const codeFromCurrency = fromCurrency ?  fromCurrency.split(' ')[2] : ''
  const codeToCurrency =  toCurrency ? toCurrency.split(' ')[2] : ''

  const params = { 
    apikey: import.meta.env.VITE_API_KEY,
    base_currency: codeFromCurrency,
    currencies: codeToCurrency,  
  }
    
  useEffect(() => {
          
  let isMounted = true

    const fetchCurrencyConversion = async () => {
        try {
          const response = await axios.get(url, { params });
          const rate = response.data.data[codeToCurrency];
          const convertedAmount = firstAmount * rate;

          if(isMounted) {
            setResultCurrency(convertedAmount);
          }

        } catch (error) {
          setError(error);
        }
      };
  
    if (firstAmount) {
      fetchCurrencyConversion();
    }

    return () => { isMounted = false }

    }, [firstAmount, fromCurrency, toCurrency]);

    return { resultCurrency, error }
    
}

export default useFetchConversion