import { ContriesAPI } from "../Data"

const useFilterCountries = () => {
 
  const dataCountries = ContriesAPI.map(item => {
    return `${item.flag} - ${item.currencyCode} - ${item.country}`
  })

  return { dataCountries }

}

export default useFilterCountries
