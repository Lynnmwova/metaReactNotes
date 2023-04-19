function Promo(){
    const styles = {
        color: 'tomato',
        fontSize: '20px'
    }
    return (
    <div className="promo-section">
    <div style={styles}> 
    <h1>Don't miss this amazing deal!</h1>
    </div>
    <div> 
    <h2>Subscribe to my newsletter and get all shop items at 50% off</h2>
    </div>

    </div>
 );
};

export default Promo;