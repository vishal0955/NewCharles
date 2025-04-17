import React from 'react'

const Review = () => {
  const styles = {
    bpavCertificate: {
      backgroundColor: '#4DD0D9',
      color: '#000',
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
      minHeight: '600px',
      position: 'relative',
    },
    bpavLogo: {
      maxWidth: '200px',
      marginBottom: '20px',
    },
    bpavTitle: {
      fontSize: '60px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    bpavSerial: {
      fontSize: '16px',
      marginBottom: '30px',
    },
    bpavDates: {
      display: 'flex',
      borderTop: '1px solid #000',
      maxWidth: '400px',
      paddingTop: '5px',
      marginBottom: '20px',
    },
    bpavDateBlock: {
      marginRight: '20px',
    },
    bpavDateLabel: {
      fontSize: '14px',
      marginBottom: '5px',
    },
    bpavDateValue: {
      fontSize: '16px',
    },
    bpavCompanyInfo: {
      textAlign: 'right',
      fontSize: '14px',
      lineHeight: '1.4',
    },
    bpavRecipient: {
      textAlign: 'right',
      marginTop: '20px',
    },
    bpavRecipientTitle: {
      fontSize: '14px',
      marginBottom: '10px',
    },
    bpavRecipientName: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    bpavRecipientDetails: {
      fontSize: '14px',
    },
    bpavIdNumber: {
      fontSize: '12px',
      marginTop: '10px',
    },
  };
  return (
    <>
    <div style={styles.bpavCertificate}>
      <div className="container-fluid p-0">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <div>
              <img 
                src="/api/placeholder/200/60" 
                alt="XYZ Logo" 
                style={styles.bpavLogo} 
              />
            </div>
            
            <div style={styles.bpavTitle} className="mt-5">TEST</div>
            <div style={styles.bpavSerial}>#20241225-231724666</div>
            
            <div style={styles.bpavDates}>
              <div style={styles.bpavDateBlock}>
                <div style={styles.bpavDateLabel}>Issued</div>
                <div style={styles.bpavDateValue}>25 December 2024</div>
              </div>
              <div style={styles.bpavDateBlock}>
                <div style={styles.bpavDateLabel}>Expires</div>
                <div style={styles.bpavDateValue}>24 January 2025</div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="col-md-6">
            <div style={styles.bpavCompanyInfo}>
              <div className="fw-bold">XYZ Technology Group Ltd</div>
              <div>XYZ</div>
              <div>heloo@xyz.global</div>
              <div>
                Floor 4, Unit D4<br />
                in Park, <br />
                  india<br />
                park new<br />
                  in
              </div>
              <div className="mt-2">
                hello@xyz.global<br />
                (in) +91 333 344 0000<br />
                (in) +11 (000) 528-8520<br />
                www.xyz.co.uk
              </div>
              <div className="mt-2">
                Reg no. 14304458<br />
                VAT no. 87654321
              </div>
              
              <div style={styles.bpavRecipient} className="mt-5">
                <div style={styles.bpavRecipientTitle}>Prepared for</div>
                <div style={styles.bpavRecipientName}>Test</div>
                <div style={styles.bpavRecipientDetails}>
                  Test Unknown<br />
                  test@test.com
                </div>
                <div style={styles.bpavIdNumber}>1231231231231231231231231231231231231</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Review