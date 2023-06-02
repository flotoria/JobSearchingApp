import { useState, useEffect } from 'react' 
import axios from 'axios'


const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {query: 'React Developer', page: '1', num_pages: '1'},
    headers: {
      'X-RapidAPI-Key': '5869415b42mshf46363e67977868p172bdfjsnb76178889ef0',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => { 
    setIsLoading(true);

    try { 
      const response = await axios.request(options);
      setData(response.data.data)
    }
    catch(error) {
      setError(error)
      alert("Error has occurred. Please try again.")
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => { fetchData(); }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return {data, isLoading, error, refetch};
}

export default useFetch