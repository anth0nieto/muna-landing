import React from "react";

export const MunaCard = ({ backgroundImage, description }) => {
  return (
    <div className="muna-card-container">
      <div className="muna-card">
        <div className="muna-logo">
          <div className="logo-circle">
            <img src={backgroundImage} alt="Muna Logo" style={{width: "100%", height: "100%", borderRadius: "50%"}} />
          </div>
          <div className="muna-text">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .muna-card-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          margin-bottom: 20px;
        }

        .muna-card {
          background-color: #f8f9fa;
          border: 1px solid var(--primary-blue);
          border-radius: 16px;
          padding: 20px;
          max-width: 400px;
          height: 200px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .muna-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(248, 249, 250, 0.9);
          border-radius: 16px;
          z-index: 1;
        }

        .muna-logo {
          position: relative;
          z-index: 2;
          top: -50px;
        }

        .logo-circle {
          background-color: var(--primary-blue);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .logo-accent {
          color: white;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: -5px;
        }

        .logo-letter {
          color: white;
          font-size: 32px;
          font-weight: bold;
          font-family: serif;
        }

        .muna-text {
          position: relative;
          z-index: 2;
        }

        .muna-text p {
          color: #3b4b8a;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.4;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        @media (max-width: 768px) {
          .muna-card {
            max-width: 300px;
            padding: 30px 20px;
          }
          
          .logo-circle {
            width: 60px;
            height: 60px;
          }
          
          .logo-letter {
            font-size: 24px;
          }
          
          .muna-text p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}; 