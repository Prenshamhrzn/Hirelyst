import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/companyLogo.css";

const CompanyInfoPage = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/employers/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCompanyInfo(data);
        } else {
          console.error("Failed to fetch company info");
        }
      } catch (error) {
        console.error("Error fetching company info:", error);
      }
    };

    fetchCompanyInfo();
  }, []);

  if (!companyInfo) {
    return <p>⏳ Loading company information...</p>;
  }

  return (
    <div className="company-info-page">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      <h3>📄 Company Profile</h3>
                <ul>
                  <li><strong>🏢 Company Name:</strong> {companyInfo.companyName}</li>
                  <li><strong>📧 Email:</strong> {companyInfo.email}</li>
                  <li><strong>👤 Contact Person:</strong> {companyInfo.contactPerson}</li>
                  <li><strong>📞 Phone:</strong> {companyInfo.phone}</li>
                  <li><strong>🏭 Industry:</strong> {companyInfo.industry}</li>
                  <li><strong>👥 Company Size:</strong> {companyInfo.companySize}</li>
                  <li>
                    <strong>🌐 Website:</strong>{" "}
                    <a href={companyInfo.website} target="_blank" rel="noreferrer">
                      {companyInfo.website}
                    </a>
                  </li>
                </ul>
    </div>
  );
};

export default CompanyInfoPage;
