import React from 'react';

const FlippingCoin1 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-10">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        {/* Segment Name */}
        <div className="d-flex align-items-center mb-3">
          <label htmlFor="segmentName" className="col-form-label me-3" style={{ minWidth: '150px' }}>
            Segment Name:
          </label>
          <input
            type="text"
            id="segmentName"
            className="form-control"
            defaultValue="Banking : NatWest-HighRisk"
          />
        </div>

        {/* Condition */}
        <div className="d-flex align-items-center mb-3">
          <label htmlFor="condition" className="col-form-label me-3" style={{ minWidth: '150px' }}>
            Condition:
          </label>
          <input
            type="text"
            id="condition"
            className="form-control"
            defaultValue="Past Due < 5 Days"
          />
        </div>

        {/* View Segments */}
        <div className="d-flex align-items-center mb-3">
          <label htmlFor="viewSegments" className="col-form-label me-3" style={{ minWidth: '150px' }}>
            View Segments:
          </label>
          <select id="viewSegments" className="form-select">
            <option>Banking : NatWest-HighRisk</option>
          </select>
        </div>

        {/* Upload Existing List */}
        <div className="d-flex align-items-center mb-3">
          <label htmlFor="uploadList" className="col-form-label me-3" style={{ minWidth: '150px' }}>
            Upload Existing List:
          </label>
          <input
            type="text"
            id="uploadList"
            className="form-control"
            defaultValue="NatWest"
          />
        </div>
      </div>
    </div>
  );
};

export default FlippingCoin1;
