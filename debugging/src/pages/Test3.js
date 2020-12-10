import React, { useEffect, useState } from "react";
import axios from "axios";

const Test1 = props => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      let response = await axios.get("http://localhost:3001/companies");
      setCompanies(response.data);
    };
    getCompanies();
  }, []);

  return (
    <div>
      {companies.map(company => (
        <p key={company.nasdaq}>
          Company: {company.name} - Nasdaq: {company.nasdaq}
        </p>
      ))}
    </div>
  );
};

export default Test1;
