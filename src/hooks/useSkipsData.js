import { useState, useEffect } from 'react';

const useSkipsData = (postcode = 'NR32', area = 'Lowestoft') => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSkips(data);
      } catch (err) {
        console.error('Error fetching skips:', err);
        setError('Failed to load skip options');
        
        // Fallback to mock data for demo purposes
        const mockData = [
          {"id":17933,"size":4,"hire_period_days":14,"price_before_vat":278,"vat":20,"allowed_on_road":true,"allows_heavy_waste":true,"forbidden":false},
          {"id":17934,"size":6,"hire_period_days":14,"price_before_vat":305,"vat":20,"allowed_on_road":true,"allows_heavy_waste":true,"forbidden":false},
          {"id":17935,"size":8,"hire_period_days":14,"price_before_vat":375,"vat":20,"allowed_on_road":true,"allows_heavy_waste":true,"forbidden":false},
          {"id":17936,"size":10,"hire_period_days":14,"price_before_vat":400,"vat":20,"allowed_on_road":false,"allows_heavy_waste":false,"forbidden":false},
          {"id":17937,"size":12,"hire_period_days":14,"price_before_vat":439,"vat":20,"allowed_on_road":false,"allows_heavy_waste":false,"forbidden":false},
          {"id":17938,"size":14,"hire_period_days":14,"price_before_vat":470,"vat":20,"allowed_on_road":false,"allows_heavy_waste":false,"forbidden":false},
          {"id":17939,"size":16,"hire_period_days":14,"price_before_vat":496,"vat":20,"allowed_on_road":false,"allows_heavy_waste":false,"forbidden":false}
        ];
        setSkips(mockData);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};

export default useSkipsData;